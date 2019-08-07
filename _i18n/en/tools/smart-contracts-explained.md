### What's going on in there?
Someone asked me the other day about all this EosDAC stuff what's so special about all the work we have been doing on building this strange thing we are calling a DAC toolkit. How is it different from centralised solutions to organisation governance and operations? How is it secure? How have we designed and built the collection of smart contracts to ensure no single entity will be able to harm the DAC through the smart contracts? 

There have been several articles and blog posts discussing the core beliefs and the how-to's to operate a DAC using the code in this article I will focus on what the smart contracts are doing and how they work together to achieve secure autonomous governance. All the code is open source and available to view/use/fork on Github but then, not everyone reads C++.

A primary consideration in all our smart contracts has been reusability for other DACS that may clone and use our source code. This was one of our core beliefs from the beginning and the justification for why some design decisions were more complex than they otherwise would have been if it was just for one use case. Our future goal would be to make these even more reusable so that multiple DACs could use our installed instances of the smart contracts and be able to tweak the settings for their own purpose without needing to maintain their own code. This way they would get updates along with the EosDAC team for feature updates and general bug fixes. 

The code contracts consist of a token contract (`eosdactokens`), an election and custodian managing contract (`daccustodian`), a worker proposal contract to manage all worker proposals and payment coordination and a separate escrow account (`dacescrow`) to securely hold funds for in-progress worker proposals to protect both the DAC and worker from potential loss of promised payments for their work.

## EOSDACTOKENS

This is where it all started. The EOSDAC Token is held in this smart contract. It started as a clone from the main `eosio.token` contract code which is used for the EOS token and most likely the starting point for all the tokens that are running on all the EOS chains. We added some functionality to this contract to suit our needs for the launching of the DAC and the initial airdrop including the following:

### Ability to create a token in a locked state.
The purpose of this was so that when we did the initial airdrop to the holders of the original Ethereum based tokens, back in June 2018, we could do thorough testing of the balances of the receiving accounts to ensure they matched the expected balances from the Ethereum snapshot before users could start trading the token. We take testing very seriously :) .

EOSDAC was one of the very first tokens to do an airdrop on the chain so there were many unknowns. Once the airdrop was completed and tested we could unlock the token to allow transfers. Importantly, there is no ability to lock a token again once it has been unlocked since this function could have enabled the possibility for token creators to manipulate the price through centralised control of the token liquidity.

### Membership terms and acceptance.
Agreeing to terms of use as part of the DAC was seen by us as a fundamental core feature of the DAC smart contracts and therefore it made sense to include the functionality into the token contract. The terms would be agreed to by a user in order for them to become a member via performing the `memberreg` action on the contract. 

To perform this action a user would need to supply a checksum of the terms they have actually agreed to and the contract action would ensure these checksums match with the known checksum of the latest terms before accepting their agreement and membership. This checksum logic is abstracted away from the end user through the front end user interface but provides cryptographic evidence that the user agreed to a particular set of terms and is ready for others to add their user interface to interact with the contract code. As long as they are able to provide the same checksum of known terms and conditions then they will able to successfully run the `memberreg` action. While this may seem like a verbose way to agree to terms and conditions we took this approach because it is like saying "I agree to *these* terms and conditions" rather than asking the user "Do you agree to the latest terms and conditions" with the user responding "yes" or "no". We felt the latter would be less robust to ensure users don't accept the wrong terms accidentally or via a user interface that is out of date with the contract. 

In the interest of saving RAM usage for all the end users, the contract only stores a reference to the hash of the accepted terms stored once in the contract rather than storing a copy of the accepted hash for each user. This means each user only needs to store the version of accepted terms (8 bytes) and not the whole hash (32 bytes) and since RAM on-chain is expensive every little saving helps. 

The state of each member's acceptance of the latest terms is referred to repeatedly throughout the EOSDAC smart contracts to ensure users are not able to perform actions on the DAC without agreeing to the latest terms, including in the future when the terms are updated.

## DACCUSTODIAN

This contract manages all the staking, nomination, voting, tallying of votes and appointment of custodians at the conclusion of each election period. The ultimate outcome from this contract's actions is to manage the permissions on the DAC managing account (`dacauthority`) as configurable via the configs on this contract since the managing account has pre-defined permissions to do anything in DAC including changing the code and transfer funds. These allowed actions will be driven various multi-sig transactions leveraging off the the built-in sophisticated permission management tools available in the EOSIO protocol software. The parameters for the operations of the election process can be changed via a configuration object set on the contract via the `updateconfig` action. The functionality of this contract can be broken into the following broad sections:

### Staking	
Before being able to successfully nominate as a candidate a member must first transfer EOSDAC as a staking amount using the `transfer` action on the token contract to this account. The memo must equal this contract's account name (eg. "daccustodian") in order for the transfer to be recognised as a staking transaction and the amount of required stake is configurable by the `lockupasset` field in the config object. Upon successfully staking there will be a pending stake amount in the contract for this candidate ready for the actual nomination action.

### Candidate nomination - `nominatecand`:
To become an elected custodian for the DAC a valid member must first nominate as a candidate using the `nominatecand` action. This requires the account name of the account nominating and a request pay amount of EOS. This action checks the user is a valid member and has staked sufficient EOSDAC tokens. It also checks that the requested pay amount does not exceed the `requested_pay_max` from the config and if all these conditions are met will add the user as a votable candidate for future voting actions.

### Voting - `votecust`:
The voting is performed by the `votecust` action and requires voter account and a list of candidates that the voter would like to vote for. The votes follow the following rules: 

* Voting requires valid membership and agreement to the current member terms.
* The weight of each vote is determined by the balance of EOSDAC the voter has in their account. (There is currently no staking required for voting.)
* Once a vote has been placed that vote remains active until the voter changes the vote. This means that if the account balance falls to 0 and then has a balance added or one of the candidates resigns and then later returns the vote will still be active and applicable in the vote tallying.
* All candidates voted for by a voter receive the same vote weight based on the EOSDAC balance.
* There is a maximum number of candidates a voter can vote for, determined by a config setting.
* To remove a vote a voter would need to vote with an empty list of candidates.
* Voting and transferring tokens to and from a voting account will have a direct and immediate effect on the weight of each active vote but the only time the weight of votes matters is the block when the `newperiod` action is called (explained below).

### New election periods - `newperiod`:
For each valid candidate the vote weight will be continuously tracked based on changes triggered from the `votecust` action or the `transfer` action on the token contract if there is an active vote for the `from` or `to` accounts on the transfer action. With these values being continuously tracked the actual election (at the time of `newperiod` running) only needs to take a snapshot of the candidates ordered by the most votes at that moment. The number of candidates is configurable via the `numelected` field on the config. There are other checks required to be satisfied in order to successfully run the `newperiod` action including:

* Ensure the initial number of voters exceeds the `initial_vote_quorum_percent` config. 
* Ensure on subsequent elections the number of voters exceeds `vote_quorum_percent` config.
* Ensure the time period between calls to `newperiod` exceeds the `periodlength` time delay.

If all these checks succeed the following events are performed:

* Custodian pay is distributed as per the median amount of the current custodians `requestedpay` amounts.
* The new custodians are allocated based the ranking weight of their accumulated votes for the next period.
* The permissions for operating the DAC accounts are updated to include the newly appointed custodians.
* The current time is saved to use as a time reference for future calls the `newperiod` to ensure it's not called too early for the next period.
* For each candidate elected as a custodian their staked tokens will become locked up at this time to show they have some skin in the game. They will be able to unstake their tokens once they are no longer a elected after a lockup period determined by `lockup_release_time_delay` from the config.

### Other actions:
In addition to the happy path as explained above, there are other actions supported in this contract including:

* Withdraw candidate (`withdrawcand`): This would be called by an existing candidate, including one that is currently an elected custodian when they would like to remove themselves from the next period of elections. Their tokens will remain staked and if the tokens are also locked up they will remain locked until the release time expires. A good use case for this action may be a custodian going on holidays with the intention of returning soon (that's the reason for keeping the unstake functionality separate). Otherwise, this action could be used for any other reason for a candidate voluntarily withdrawing from participating in the DAC operations.
* fire a candidate (`firecand`): This would be called by the currently elected custodians via the multi-sig auth account to remove a misbehaving candidate. This action has the option to lockup the candidates staked tokens if they are not already locked up.
* fire a custodian (`firecust`): Similar to the `firecand` this action will remove a currently elected custodian as actioned by the other custodians. This will remove the custodian from elected custodian group, remove them as a potential candidate for future elections, replace the custodian with the next highest voted candidate and finally update the account permissions to reflect the new set of elected custodians.
* resign a custodian (`resigncust`): This action must be run by an active custodian who would like to resign from being an active custodian. This would remove them from an eligible candidate and replace the custodian with the next highest voted candidate.
* Update requested pay (`updatereqpay`): A candidate may update their requested pay as a custodian. This will not take effect until the next period to prevent mid-period changes to custodian pay.
* Claim pay (`claimpay`): This is the action called by an active custodian in order to receive the payment amount that is due to be paid to them. Due to the legacy legal system, we live in the payment is made via a service company for legal reasons beyond the scope of this document. From the contract's perspective this is the action to pay a custodian for their services to the DAC as a custodian and after this action has been performed the custodian is considered paid.
* Update config (`updateconfig`): There are several configurable options on the contract code to allow it to be customised for use without needing to recompile and deploy the code. This future plan is that this will allow different DACs to operate using the same deployed code but with their own custom configurations. The changes are made by setting a new config object via this action with the following options:

	* `lockupasset`: The amount of EOSDAC tokens that are locked up by each candidate applying for election.
	* `maxvotes` : The maximum number of votes that each member can make for a candidate. default of 5.
	* `numelected` : Number of custodians to be elected for each election count.
	* `periodlength` : Length of a period in seconds. Used to prevent early elections from being called on the `newperiod` action. default 7 days.
	* `authaccount` : controlling account to have it's permissions set with the elected custodians.
	* `tokenholder` : The contract that holds the funds for the DAC. This is used as the source for custodian pay.
	* `serviceprovider` :  The contract that will act as the service provider account for the DAC. This is used as the deliverer of pay to custodians and workers on worker proposals.
	* `should_pay_via_service_provider` : If set to true the contract will direct all payments via the service provider rather than paying directly.
	* `initial_vote_quorum_percent` :  Amount of token value in votes required to trigger the initial set of custodians
	* `vote_quorum_percent` : Amount of token value in votes required to allow a new set of custodians to be set after the initial threshold has been achieved - election period 2 and onwards.

		The required number of custodians to approve different levels of authenticated actions on the DAC smart contracts:	

	* `auth_threshold_high`
	* `auth_threshold_mid`
	* `auth_threshold_low`
	* `lockup_release_time_delay` : The time before locked up stake can be released back to the candidate using the unstake action
	* `requested_pay_max` : The maximum amount of pay a custodian can request for payment.

## DACPROPOSALS

This contract is responsible for managing the worker proposals related to the DAC. It is once again built for configurability rather than just to suit our immediate needs in EosDAC. 

The general idea is that potential worker will have a piece of work they would like to propose to add value to the DAC in exchange for being paid in an amount of EOS based tokens. The proposal would be voted for approval for commencement and then completion by the current custodians and these actions would trigger payments to the proposer. 


### Create proposal `createprop` 
A proposing worker would create a proposal and submit it to the blockchain for the review and voting by the current DAC custodians. To proposal would need to include the following:

* `title` (String): to identify the proposal
* `summary` (String): a brief summary of the purpose of the worker proposal
* `arbitrator` (EOS Account name): the account name of an independent arbitrator who may be called upon to satisfy disputes in the completion of a worker proposal.
* `pay_amount` (EOSAsset): an amount of EOS based tokens requested as the pay amount for the worker proposal.
* `content_hash` (ChecksumHash): a content hash to ensure details of a proposal stored off-chain are not modified after a proposal has been agreed to. This allows for much more extensive detail that would not be stored on-chain while still maintaining data integrity.

For each proposal, minimal content data is required to be stored in the contract state and is instead only passed through for data integrity via transaction logs. Only the account and payment data is stored for utilisation in later actions within this contract.

### Voting for a proposal `voteprop`
Once a proposal has been created it would be in a state waiting for the current custodians to vote either 'proposal_approve' or 'proposal_deny' for a proposal with the required number of votes and number of 'yes' votes to be configurable in the contract. At this time there may be refinements to the proposal with cancelling `cancel` of existing proposals and resubmitting changes based on feedback from the custodians until the proposals get to the ready and positively-voted-for position.

### Start work on an accepted proposal `startwork`
It there have been sufficient positive votes for a proposal the proposer will be able to call this action to confirm that they will agree to work on the agreed proposal with the agreed terms, payment etc. At this point, the agreed payment amount is transferred into an escrow account to ensure the funds can and will be paid to the proposer when the work is complete as approved by the custodians or the agreed arbitrator for the proposal.

The locking of funds in an escrow account is a crucial step to protect the worker from potentially malicious custodians who could reverse an earlier proposal acceptance because they have a trusted arbitrator on the proposal to also be able to release the funds.

### Signal completion of work `completework`
After a worker has completed their work they would signal to the custodians that work is believed to be complete and the custodians would need to assess the work before approving via another vote using `voteprop` but this time with a different choice of vote values to indicate `claim_approve` or `claim_deny`.

### Claim payment for completed work `claim`
If there have been sufficient positive votes for the completed work from the custodians based on the current configurations then the proposer can call the action which will trigger the transfer of token payments to the worker. In practice for EosDAC, the funds are sent to a service company account but effectively they are paid directly to the worker for their services.

### Contract configuration `updateconfig`
Various options are configurable for this contract including:

* `service_account` (Eos account name) 
* `proposal_threshold` number of required votes to participate in voting for a proposal.
* `proposal_approval_threshold_percent` required percentage of positive votes to approve a proposal
* `claim_threshold` number of required votes to participate in voting for completing a proposal.
* `claim_approval_threshold_percent` required percentage of positive votes to approve a proposal claim.
* `escrow_expiry` the expiry time set on the created escrow transaction (number of seconds). This has a default value of 30 days.

## DACESCROW
This contract is responsible for holding the secured funds for worker proposals until the elected custodians or an agreed arbitrator releases the funds to the receiver or the escrow time limit expires which would allow returning of funds to the sender. The intention is that this contract would be locked to even prevent code modification from malicious custodians. This would be achieved by deleting the owner and active keys on the account after the contract code has been set. This desire for immutability is another reason for this contract to be separate and simple from the other code contracts in the code. The hope is that this code never needs to be modified. In the unfortunate (and hopefully very unlikely) scenario that this code does need to be modified the custodians would need to get the required agreement from the current block producers to reset the owner key for this account.

### Initialise an escrow transaction - `init`
An escrow transaction must be initialised specifying all the required fields including the sender, intended receiver, expiry time, arbitrator, memo for the eventual transfer action. There is also an optional external key which can be used as a cross-contract reference key rather than only relying on the internal auto-incrementing key which would otherwise lead to key collisions in time.

### Transfer funds for an escrow - `transfer`
Funds for an escrow would need to be transferred to escrow contract using the usual `transfer` action as seen and replicated by most EOS based token contracts. This contract's code relies on the built-in notifications that the transfer action directs to both the sender and receiver of accounts of the transfer. When a transfer notification is received by the escrow contract the `transfer` action implementation will verify the sender has an empty escrow record and assigns the amount transferred into that escrow record for later processing by the other actions in the escrow contract code. An initialised escrow record may be cancelled with the `cancel` action provided it is called before the transfer action has populated the escrow.

### Approval or un-approval of an escrow - `approve` and `unapprove`
Once an escrow has been initialised and populated with a transfer action the next step would be to approve the escrow either by the sender, the nominated arbitrator or receiver. Two approvals are required from any of these three accounts to allow the `claim` action to be performed. `unapprove` may be subsequently called to remove an existing approval by the relevant actor. 

### Claim an approved escrow payment - `claim`
The claim action can only be executed by the intended receiver for an escrow payment and will only succeed with the correct approval state for the escrow record. At this point, the escrowed amount will be transferred to the nominated service company account so that payments can be processed to the intended receiver. 

_Note: The service company step is not included for technical reasons but is a legal requirement to have sufficient interfacing with the traditional legal world. As much as we would like to perform all actions in the safety of cryptographically secured smart contract environment the world is not ready :( ._

### Refund after expiry - `refund`
While the funds in the escrow account must be locked up for a certain duration they must also be available after expiry time has passed if there has not been sufficient approval from the sender or the arbitrator otherwise there could be funds locked in the account permanently. The `refund` action provides this mechanism and can only be called by the sender if the expiry time has passed. Then the escrowed amount will be transferred back the sender and the escrow record will be removed to prevent a double refund scenario.  

[Back]({% translate_link tools %})