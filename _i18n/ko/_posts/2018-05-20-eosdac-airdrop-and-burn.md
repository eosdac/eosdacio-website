---
layout: post
title:  "eosDAC Airdrop and Burn"
date:   2018-05-20T13:36:03
external_link: https://steemit.com/eos/@eosdac/eosdac-airdrop-and-burn
image:  /assets/news/2018-05-20/img.png
---
It is the vision of eosDAC that EOS.IO block production should be open for everyone to contribute and benefit. To realise this vision, eosDAC is an evolving Decentralised Autonomous Community (DAC) focused on EOS.IO Block Production serving the EOS communities worldwide. 

To develop its community, and to make sure it included the EOS stakeholders, eosDAC decided to airdrop 75% of its tokens onto the EOS Distribution. 

![airdrop1.png](https://steemitimages.com/DQmZtFLFYGepaxhCJ3A95CBauY1Zch4y7rPcz5YSWFTenQX/airdrop1.png)

The launch team deemed that it was necessary to get the eosDAC distribution and community established before the launch of the EOS chain in June. A cut off point was set in place for the 15th April 2018 at 1am UTC. This time seemed natural as it was the point at which EOS reached 900 million distributed tokens. It would therefore be very well aligned to the EOS distribution, as well as allowing ample time for the airdrop and community activities prior to launch.

# Challenges and preparation work

There are nearly 300,000 Ethereum accounts which hold EOS and to airdrop to all of these would be difficult to guarantee in the timespan give. It would also cost a considerable amount of Ether in gas on the Ethereum network. 

Upon analysis, it was found that over 200 000 accounts held less than 100 EOS and the total amount of EOS held by these accounts was less than 0.5% of the total amount of EOS. It therefore made sense to limit the airdrop to accounts holding 100 EOS or more. However, the vision of eosDAC is that all account holders should have the chance to be included, so a process was developed whereby those accounts with less than 100 EOS could collect their allocation.

To complete an airdrop to so many addresses, and with such a specific distribution, required an auditable approach. It was decided to use a method where each transaction would generate a receipt of the transaction hash which would act as an auditable check on the airdrop. On the Ethereum blockchain, each transaction can take time to go through, but batching transactions appears to be more efficient as long as timeouts are not encountered. Based upon tests it was decided that putting transfers into batches of 50 would be optimal. 

![dreamstime_m_27008957.jpg](https://steemitimages.com/DQmZMrvPHpAkkx4WvMxXGWQMqQESjXtLAxf5hztrnZWbCrk/dreamstime_m_27008957.jpg)

To produce the EOS distribution snapshot, the launch team utilised the Block.one open source snapshot tool. This was tested extensively and several snapshots where checked during the month before the actual snapshot. This tool is an excellent resource and the eosDAC airdrop can be seen as a successful test.

Many of the largest wallets on the EOS distribution are owned by exchanges. However, airdropping to exchanges, who do not pass on the tokens, is problematic. The exchanges could dump these tokens, or use them for their own purposes. Therefore, we asked  the community to help in two ways. First, we asked them to put pressure on exchanges to support the airdrop. Secondly, we asked them to identify wallets of exchanges that did not support the airdrop. We also put a big campaign in place to make sure the community got their EOS off of unsupported exchanges at the time of the snapshot.

# The Snapshot and Airdrop

![snapshot.jpg](https://steemitimages.com/DQmUPMkjqRMrjb9bCbiANBTH9UPgNqVz5KPW4NkGGLLedDd/snapshot.jpg)

At the end of period 300, the snapshot scripts began to record the state of the EOS Distribution as of Ethereum Block 5442134 (https://etherscan.io/block/5442134) . The distribution file was generated and a large sample was checked to ensure that the snapshot figures correlated with the amounts shown on http://etherscan.io. The file was ordered from lowest amount, to highest, to allow for easy checking and to ensure that teething errors would be found, and mitigated, on lower value transactions. 

The distribution file was split into batches of 50 and the transaction sending scripts (written in web3.js) began to run. Although, it was possible to run batch scripts on multiple nodes, the majority of batch scripts where run sequentially to ensure they could all be checked before to moving onto the next one.

![tokenpulse.jpg](https://steemitimages.com/DQmSGjhCqhGxUNXdtVcwss4v2o1mxjbc2ENRBaYBJdQZGzV/tokenpulse.jpg)

Each batch script produced a log which contained the information possible to be gleaned from the transaction. This included Ethereum address, amount, transaction hash, block/block hash and gas used. These logs where loaded into a github repository https://github.com/eosdac/airdrop . These logs were parsed and matched back against the snapshot file. 

Occasional problems with timeouts, due to spikes of traffic on the Ethereum network, were checked manually and the transactions were resent if they did not go through. The gas price was changed dynamically to be the minimum fast transaction price (checking on http://www.ethgasstation.info), and in total the airdrop used approximately 30 Ether. This airdrop highlighted the difficulties with using Ethereum for large numbers of transactions. We expect the conversion of eosDAC tokens to be converted across to the EOS chain much more rapidly and efficiently.

Over 4000 account holders, with less than 100 tokens, collected their eosDAC. These claims were sent out at regular intervals during the airdrop with a final push at the end.

# Dealing with Exchanges

![exchanges.jpg](https://steemitimages.com/DQmYibKb53nbojCD7LJofeGyxm5RmN9dKCEwPNptVksXwrW/exchanges.jpg)

The eosDAC community, and launch team, identified 48 wallets belonging to either B1 or exchanges who did not support the airdrop were withheld. However, many exchanges supported the airdrop and eosDAC is grateful to all the operations that have passed the tokens onto their clients. 

Through working with exchanges there were a few deviations from the snapshot were required. For Upbit, we agreed to send through the amounts in contract wallets to a central wallet and Upbit provided proof that those were client wallets. Although Huobi announced support for the airdrop, they have a policy of not disclosing their wallets to protect customers. Although we identified a significant number of wallets belonging to Huobi, and their clients, there was a difference between what we thought we should airdrop and what Huobi were expecting. After considerable discussions and investigations, the launch team were satisfied that Huobi were simply acting in their clients best interests and airdropped the difference to them (1,119,834 tokens).

# Results and Amount of Tokens to Burn

Over 99.9% of transactions went through correctly but there was a mistake. One batch was sent twice due to the logging mechanism suggesting that it had not been run previously. This resulted in 50 accounts receiving their allocation twice and therefore the airdrop effectively over-sent 44090 tokens.  

The final figures for the airdrop are:

![eosdacairdrop.png](https://steemitimages.com/DQmZy1aJcKvSK7iDu2ddyDzza9ZpDbTqRpc8WaXnuigSA6w/eosdacairdrop.png)

This means that a total of 238,080,898.455 tokens will be burned. This amount will be sent to the unrecoverable Ethereum account 0x0000000000000000000000000000000000e05dac later today. 

This will leave a circulating supply of 961 919 101.545 eosDAC Tokens.

**Update : the burn is now completed** - https://etherscan.io/token/0x7e9e431a0b8c4d532c745b1043c7fa29a48d4fba?a=0x0000000000000000000000000000000000e05dac

https://etherscan.io/token/tokenholderchart/0x7e9e431a0b8c4d532c745b1043c7fa29a48d4fba
