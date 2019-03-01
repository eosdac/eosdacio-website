---
layout: post
title:  "EOS.IO Development Update"
date:   2018-01-13T00:46:09
external_link: https://steemit.com/eosio/@dan/eos-io-development-update
image:  /assets/news/2018-01/13.png
---
We have been very busy working to make EOS.IO the best smart contract platform on the market. Our team has been pushing the boundaries of blockchain design to provide the best possible balance between ease of development and performance. 

In our last update, we outlined some of the changes we were working on, including:
- Support for Apple’s Touch ID / Secure Enclave
- Error Handling on Deferred (asynchronous) Transactions
- Parallel Execution 

Since that update we have implemented much of what we discussed.  Much of this work has been occuring in the `eos-noon` branch on github so that we can maintain a stable master for those utilizing the test network. Here are some details of what we’ve been working on.

## Deferred Transactions 
Deferred transactions enable communication between different shards by minimizing the number of database locks that must be acquired at the same time. These have now been implemented along with the ability to schedule a transaction to be delivered in the future and to cancel a scheduled transaction.

Scheduled transactions (combined with free transactions) makes EOS.IO the first “Turing Complete Smart Contract Platform”.  This means that it will be possible to create a smart contract that will automatically perform an action multiple times per second on an ongoing basis without any outside input. As long as the contract has sufficient computational bandwidth, the contract can run forever.  All other competing smart contract platforms require outside input to run due to being limited by fees and the lack of ability to schedule a transaction for a future point in time. 

This functionality is now complete  in our code and will be available in the EOS Dawn 3.0 Testnet release, which we are hoping to release by the end of Q1 2018.

## Authorization Delays
Time is a critical element of security. We are in the process of updating the permission structures of EOS.IO to enable users to configure a mandatory delay for each permission level. For example, posting to social media can be instant, while transfering funds may require a 24 hour or longer delay. When a user attempts to perform an action with a configured delay, the transaction will be packaged and deferred for the delay period, and can be cancelled any time prior to the end of that period. This will enable the user to utilize the Hacked Account Recovery process to regain control over their account before any significant harm can be done. 

## Hacked Account Recovery
Every account will have three special permissions: owner, active, and recovery. The owner permission should be configured with N of M multisig (2 of 2), and has the power to change all other permissions instantly. Updating the owner permission should be configured to require a 30 day delay. Ideally the owner would require the active permission of a recovery partner. To hack the owner permission would require the user and their recovery partner to be compromised at the same time. If the recovery partner’s active key is compromised, then the recovery partner can use their owner permission to recover.  In practice, this forms a web of trust among all users that would require everyone to be hacked at once for accounts to be compromised.

If the recovery partner(s) decides to be uncooperative, the active permission can always unilaterally update the owner permission with a 30 day delay. This means that your account cannot be held at the mercy of others.
There is only one scenario that could leave an individual helpless: losing their active key at the same time as the hacker gets the key. This can largely be mitigated by having an adequate backup strategy with redundant keys.

## Lost Password Recovery
People forget passwords, computers break, and stuff happens. Murphy’s law states that anything that can go wrong, will go wrong, and this applies to the best laid plans of mice and crypto experts. With EOS.IO you are not out of luck. Every account can specify a number of recovery partners that have the ability to update the active authority (with 7 days delay), but only if your account is inactive for 30 days. As long as you specify some friends and family you trust to return your account to you if you lose your keys, then you never have to worry about getting locked out forever. 

Every account will include a constitutional and legal obligation to restore your property right to the account. If they abuse the position and attempt to take over your account while you are in a 30 day coma, you can still sue them to get the account back. Because you only appoint people you know to be your recovery partner, it will be easy to know who to hold accountable. 

Lost password recovery is made possible by the power of combining social networks, time delays, and cryptography to build trust networks that protect everyone’s property rights. 

## Update Resource Usage Algorithms
EOS Dawn 2.0 implemented some basic resource limits, but we still have work to do. Over the past two months we have completely revamped our resource rate limiting strategy for bandwidth, computation, voting, and storage.

### Separate Staking
The most significant change we’ve  added is to create different staking pools for different rights in order to recognize the economic reality of different supply/demand prices for bandwidth, memory, and control. For example, we don’t want people allocating memory they don’t intend to use just so that they can claim their voting rights or bandwidth. We also want to impose a 3 day delay for unstaking bandwidth, no delay for unstaking unused storage, and a 6 month delay for unstaking voting.  Bandwidth and voting can be delegated but storage cannot. As you can see there are many different needs that must be addressed.

#### Bandwidth Delegation
Any account can delegate bandwidth to any other account by transferring tokens to a bandwidth staking account. To keep things symmetrical, a user “delegates bandwidth” to themselves the same way they would delegate bandwidth to someone else. A user can get their tokens back at any time after a 3 day delay. 
Bandwidth will be “billed” to all accounts that authorize a transaction and usage will linearly decay to 0 after 3 days of inactivity.   

#### Voting 
Now that we have separated staking pools for bandwidth and memory, we can provide better alignment of interests for those who wish to exercise political control on the platform. To gain influence in selecting block producers and protocol upgrades, users must stake tokens in a contract with a 6 month linear withdraw period. This will expose them to capital losses if their actions have negative impact on the platform.

#### Memory 
RAM is expensive and limited in what a single computer can support on commodity hardware. If we allocate all 1TB of RAM proportional to a market cap of $100B, then it would cost over $10 per byte of storage.  This would make the platform unusable in a world where 99.99% of token holders don’t actually need the RAM.

To resolve this issue we can borrow an idea from Bancor to treat memory like a smart token with 1% reserve.  In this case the reserve is 1TB of *real* RAM and the Bancor algorithm sells this real RAM at a dynamic price such that RAM never runs out. When someone wishes to reserve RAM, they send tokens to the memory contract and are reserved bytes based on a function of liquid tokens and available RAM. 

The blockchain will track the actual usage of an account and abort transactions that would attempt to consume more RAM than they had previously allocated.  When an account is done with its allocated, but no longer needed RAM, it can request a reduction of its allocation and will receive back the locked tokens.

It will  not be possible to transfer or delegate reserved storage nor to profit from capital appreciation by reserving RAM at cheap prices and then freeing it at expensive prices.  This is critical to prevent storage from becoming a speculative instrument which would bid up prices beyond what people actually need today.  

Each user is limited to one increase in allocation per day, and the price they pay for their full allocation will be based upon the free RAM after the allocation. This means that it is very expensive to allocate a lot of RAM at once (due to market slippage) and that the most cost effective strategy is to buy storage over time and only in quantities an individual expects to use in the future.

This strategy will cause those who want to reserve a lot of RAM to dollar cost average and give all competitors similar prices over time.

##### Billing Memory Usage
We have learned a lot about how to make applications usable and one of the things we realized very quickly is that there are many cases where the contract owner would be better off if they could have the user bring their own storage. Without being able to put the cost on the user, it makes certain parallel computations difficult and forces contract developers to build their own accounting models.
Every contract will have the option to either bill the storage to the user who authorized the transaction, or to the contract itself. In most cases it works much better for each user to store their own “account information” rather than a service contract to store it internally. This gives developers maximum flexibility in designing their user experiences.

This change is in progress and scheduled for inclusion in EOS Dawn 3.0.

## Implicit Transaction Locking  
We have renamed “read/write scopes” to “read/write locks” to convey their logical behavior and have also increased the granularity of the locks to maximize opportunity for parallel execution.
Developers testing EOS Dawn 2.0 are familiar with the need to declare the “scopes” required for each transaction. This made transactions more difficult to construct and fragile in the face of certain dynamic situations. We investigated the situation and determined that block producers could determining which read/write locks are required. This removed the need to specify the required locks in every transaction which saves space while making things easier than ever for developers.

This change has been implemented in the eos-noon branch.
## Dynamic Upgrades of Core Features
Normally upgrading a blockchain requires a hardfork. This can occur anytime new features are desired, existing features need upgrades, or bugs need fixed. Hard forks are disruptive to the entire network; therefore, it is desirable for as much of the blockchain behavior to be defined dynamically via WASM as possible. 
We have started the process of migrating core features from native C++ to WASM contracts. These features include:
- The core token (e.g. EOS)
- Staking for bandwidth, memory, and voting
- Producer voting 
- Multisig Contracts
- Community Benefit Contract / Worker Proposal allocation

The only transactions that will not be implemented directly in WASM will be:
- Account creation
- Bandwidth / RAM usage metrics  
- Permission Updates 

## Scheduled / Deferred Transactions
With this change, block producers will be able to fix bugs and upgrade many aspects of the protocol without having to hard fork. Through this process we are eating our own dog food and ensuring that our smart contract development environment is robust enough to implement every contract we can think of.

## Emerging Token Standard
In an effort to support interoperability between contracts we have been developing a token standard for contracts. This standard will be similar to the idea behind ERC-20 tokens and enable many contracts to interoperate with each other. 

Our token standard will have many advantages over traditional ERC-2* tokens:
- Transfers may contain memos for application data
- Sender and receiver can execute code and reject the transaction
- Benefit from the EOS.IO permission system
- Native tokens are implemented using the same code
- A single contract can create and manage multiple tokens

We are implementing a standard C++ library that will make creating your token as simple as parameterizing some template variables and deploying a contract.

## Focus on Stability
Our single threaded code is on track to sustain 5000 TPS with a 0.5 second block interval, and delivering finality within 2 seconds. This is industry leading performance; therefore we believe the market would benefit more from improved stability, features, and better architecture than pure performance at this stage. Therefore, we are choosing to improve overall quality of transactions before we push to maximise the quantity of transactions per second.

In our last update for Dawn 2.0, we indicated our intention to start work on parallel execution earlier than originally intended. Due to a large number of new developer-friendly features that we have added, we have reprioritized stability over performance for the June release of EOS.IO. We feel it is better to achieve the best possible architecture than to deliver more raw performance than the market will be able to immediately use. 

With the addition of interchain communication, we feel that EOS.IO will easily support infinite scaling. This feature is largely implemented, and we hope to have a proof-of-concept demonstration of interchain communication with 2-way peg by the end of Q2.

## Byzantine Fault Tolerant(BFT) DPOS
There are two primary proof of stake systems: DPOS, and BFT systems like tenderment. They each have different advantages. DPOS supports faster block times (0.5 second) and will continue to function and heal even if all but 1 block producer fails.  The downside to traditional DPOS is that it can take 45 seconds to reach absolute finality. In practice, systems like STEEM and BitShares have 99.9% finality in less than 2 seconds, but for low-latency inter-blockchain communication we would like absolute finality in less than 2 seconds.

BFT systems reach absolute finality every block, but their algorithm can be high bandwidth, can take 2-3 seconds and has no intermediate states with 99.9% finality. Furthermore, these systems halt completely if 33% of the nodes fail. 
BFT-DPOS gives us the best of all worlds.  Blocks are produced with 99.9% finality every 0.5 seconds and confirmed with absolute finality every 2 seconds or better.  We achieve this by having block producers send out a block confirmation every time they extend their local chain. A byzantine fault is proven if a block producer sends out two confirmations for the same block height or block time stamp. Producers include an incrementing sequence number with each confirmation they send. A producer who sends two confirmations with the same sequence number is also proven to be byzantine.

Since only one producer can produce a block at any time, and producers only switch forks when a longer chain is found, forks that would create different irreversible blocks are only possible if over ⅓ of producers commit cryptographically provable byzantine faults. In such a situation, the community through the constitution can take actions to freeze the producer’s accounts and the misbehaving producers can automatically be removed from the block schedule. The DPOS chain would still continue under the longest-chain rule until the issue is resolved.

## Compensation for Runner Up Block Producers
We are working on an algorithm that would divide Block Producer pay into two classes:
- Per-block reward
- Per-vote reward

All Block Producers with votes will be able to claim their per-vote reward once per hour by signing a transaction. To do this they will - at the very least - need to set up a bot to broadcast a transaction. With this compensation system, there is continual incentive for producers to campaign for votes.

We are also implementing a vote-decay system by weighing more recent votes more than older votes. In this way, Block Producer selection will in part be based upon who has the most active voters who refresh their vote at least once per month. Stale votes will decay to minimal impact within 2 years.

## Growing Team 
This week we were pleased to add 8 new people to our team. We are constantly looking for more. If you are a talented developer or designer please contact us.

## Conclusion
The EOS.IO software is maturing nicely and is on track for a robust June 2018 release, with far more features than were originally outlined in the White Paper.  


[Follow me on Twitter](https://twitter.com/bytemaster7) and stay tuned for our live special announcement from Seoul, South Korea! 

https://www.youtube.com/watch?v=zE_QRexLeco …



<sup><sup>
Disclaimer
block.one is a software company and is producing the EOS.IO software as free, open source software. This software may enable those who deploy it to launch a blockchain or decentralized applications with the features described above. block.one will not be launching a public blockchain based on the EOS.IO software. It will be the sole responsibility of third parties and the community and those who wish to become block producers to implement the features and/or provide the services described above as they see fit. block.one does not guarantee that anyone will implement such features or provide such services or that the EOS.IO software will be adopted and deployed in any way.
</sup></sup><sup><sup>
All statements in this document, other than statements of historical facts, including any statements regarding block.one’s business strategy, plans, prospects, developments and objectives are forward looking statements. These statements are only predictions and reflect block.one’s current beliefs and expectations with respect to future events and are based on assumptions and are subject to risk, uncertainties and change at any time. We operate in a rapidly changing environment. New risks emerge from time to time. Given these risks and uncertainties, you are cautioned not to rely on these forward-looking statements. Actual results, performance or events may differ materially from those contained in the forward-looking statements. Some of the factors that could cause actual results, performance or events to differ materially from the forward-looking statements contained herein include, without limitation: market volatility; continued availability of capital, financing and personnel; product acceptance; the commercial success of any new products or technologies; competition; government regulation and laws; and general economic, market or business conditions. Any forward-looking statement made by block.one speaks only as of the date on which it is made and block.one is under no obligation to, and expressly disclaims any obligation to, update or alter its forward-looking statements, whether as a result of new information, subsequent events or otherwise.
</sup></sup>
