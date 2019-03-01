---
layout: post
title:  "The eosDAC Token Distribution Is Complete!"
date:   2018-06-24T00:39:00
external_link: https://steemit.com/eosdac/@eosdac/the-eosdac-token-distribution-is-complete
image:  /assets/news/2018-06-24/img.png
---
Today the eosDAC launch team is pleased to announce it successfully distributed EOSDAC tokens onto the EOS chain. These tokens were accurately moved so users have the same number of EOSDAC on the EOS Mainnet as the eosDAC they had on the Ethereum chain at the time of the freeze, 23:59 UTC June 1st 2018.

There are a total of 994,895,254.9762* EOSDAC tokens on the EOS Mainnet spread over 88,135 accounts. For all Ethereum accounts which had eosDAC and less than 1 EOS, the eosDAC launch team created an account for them (29,572 accounts in total) and associated it to the standardized EOS fallback key which can be found using the <a href="https://eoskey.io/#/">eoskey.io tool produced by EOS Cafe</a>. If you had eosDAC in an Ethereum address with less than 1 EOS, you can claim the account we created for you by generating the EOS private key from the Ethereum private key and import it into an EOS wallet such as <a href="https://github.com/greymass/eos-voter">EOS Voter by Greymass</a>.

The distribution itself took about four hours with the launch team taking it slow to check things along the way. However, it was still over 50 times faster than the Ethereum based airdrop of eosDAC in April. This starts to show off the power of EOS. For the more technically minded the distribution required about 30mb RAM and 50,000 units of CPU. The fact that the EOS network is not yet busy may well of helped.     

The EOSDAC tokens are currently locked on the chain (no transfers allowed) for verification purposes. The community and independent auditors will have a chance to inspect the account balances prior to transfers being allowed. Every account holder can see their balances using <a href="https://github.com/eosrio/simpleos/">the Simpleos wallet</a> or by going to <a href="https://eospark.com/">https://eospark.com/MainNet/account/&lt;youraccountname&gt;</a> (choose EOSDAC from the list of tokens). If you don’t know your EOS account name, you can use our lookup tool at https://eosdac.io/token_check/  If you do not see your account name there or your tokens were stuck in a decentralized exchange contract like ForkDelta or IDEX, please use <a href="https://goo.gl/WQW8NH">this Google form</a>, and we will work with you in the future to develop a solution. If you have any issues with the processes outlined above, please contact us via our telegram channel: http://t.me/eosdacio or Discord server: http://discord.io/eosdac.

Once unlocked, holders will be able to transfer their EOSDAC tokens using the Cleos tools. The EOS node based cleos command for transfers is:

```
cleos push action eosdactokens transfer '[ "<from account>", "<to account>", "<amount.4 decimal places> EOSDAC", "<memo>" ]' -p <from account>
```

To check your account balance with cleos:

```
cleos get currency balance eosdactokens <your account> EOSDAC
```

The eosDAC launch team has already been discussing integration with wallet developers and exchanges and this will be a continuing priority. 

This distribution onto the EOS chain is the cumulation of many weeks of effort. The processes included the following:

* A snapshot of all eosDAC balances of the Ethereum chain.
* Merging data with the EOS genesis snapshot to get account names.
* Identifying all additional accounts that would not be created on the EOS chain and associating standardized fallback keys with them.
* Working with exchanges to support the change over.
* Amalgamating some accounts for exchange operations (see https://github.com/eosdac/conversion/blob/master/files/README.MD ).
* Creation of the eosDAC token contract (https://github.com/eosdac/eosdactoken).
* Creation of the Dropper/validation script https://github.com/eosdac/DACtools/tree/master/drop%20tool .
* Set up and staking of the eosdactokens account.
* Deployment of the token contract and issuance of tokens.
* The actual distribution and internal validation.

All the eosDAC tools and contracts found in our repositories are open source so the EOS community can verify them and reuse them.

Following successful verification, the next major priority for the launch team is to get the membership and custodian voting tools in place to allow for a handover from the launch team to the DAC custodians voted in by the token holders. To become full members of eosDAC, as per <a href="https://eosdac.io/operations/#constitution">the constitution</a>, holders will need to register and accept the terms and conditions. Full details of the process and benefits will be shared soon along with a planned timeline.

Related to the functioning of the DAC, we’re also transitioning to a new service provider for real-world contracts and traditional banking services. Despite best efforts, eosDAC Ltd has reported difficulty in establishing timely banking & other key processes to be able to act as a comprehensive service company to eosDAC.  Therefore all eosDAC assets (servers, contracts, fiat, IP) are now being held on behalf of the DAC by Incommsec Ltd. Incommsec Ltd is now the sole service company working directly for the DAC.

It has always been the vision that eosDAC will use multiple service companies in diverse geographic jurisdictions in order to meet its goal of maximum decentralization and redundancy. Other service companies from across the world are therefore invited to offer their service to eosDAC, these will be considered and decided upon by the custodians once they have been elected.

Thank you to everyone who has supported us and worked so hard to bring us this much closer to becoming a DAC reality. We're very excited about the future as we continue to build tools to empower our community and enable DACs.

<sub>* There are 4,473,804.6592 eosDAC Tokens locked in ethereum contracts such as etherdelta and IDEX. The launch team will be looking into ways to identify if balances can be proven. If you are included in this list, please contact us via this google form: https://goo.gl/WQW8NH</sub>
<sub>* There are 2,525,108.7124 eosDAC Tokens in 3,121 accounts for which the EOS fallback key could not be generated. These accounts will be published and owners are urged to contact eosDAC to provide proof of ownership and details of how to claim their tokens.</sub>

-----------------

![Screen Shot 2018-06-12 at 11.00.55 PM.png](https://cdn.steemitimages.com/DQmRQWM3QtQ21wddAMCjbVRhB3rM7L4AGWLY9QpNmkXNLps/Screen%20Shot%202018-06-12%20at%2011.00.55%20PM.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/PbQpAJOP6iA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<center><h1>Please vote for eosdacserver</h1></center>

Join <a href="https://eosdac.io/news/#newsletter">our newsletter</a> to stay informed and follow us on your favorite social media platform:

<sub><a href="https://steemit.com/@eosdac" target="_blank">Steemit</a> | <a href="http://discord.io/eosdac" target="_blank">Discord</a> | <a href="https://t.me/eosdacio" target="_blank">Telegram</a> | <a href="https://facebook.com/eosdac" target="_blank">Facebook</a> | <a href="https://twitter.com/eosdac" target="_blank">Twitter</a> | <a href="https://plus.google.com/+eosdac" target="_blank">Google-plus</a> | <a href="https://github.com/eosdac" target="_blank">Github</a> | <a href="https://instagram.com/eosdac" target="_blank">Instagram</a> | <a href="https://linkedin.com/company/eosdac" target="_blank">Linkedin</a> | <a href="https://medium.com/eosdac" target="_blank">Medium</a> | <a href="https://www.reddit.com/r/EOSDAC/" target="_blank">Reddit</a> | <a href="https://www.youtube.com/eosdac" target="_blank">YouTube</a></sub>
