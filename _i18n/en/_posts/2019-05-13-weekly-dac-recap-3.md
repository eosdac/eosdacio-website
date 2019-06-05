---
layout: post
title:  "Weekly DAC Recap #3"
date:   2019-05-13T12:20:12
external_link: https://steemit.com/eosio/@eosdac/weekly-dac-recap-3
---
# Custodian News
This week’s Custodian Board (Custodians are re-elected every 7 days! If you want to engage in running eosDAC and make decisions for it, stake a minimum of 35000 EOSDAC and register yourself as a candidate on https://members.eosdac.io/)

| [![](https://i.imgur.com/mB81ivl.png)](https://members.eosdac.io/profile/cream5eosdac) | [![](https://i.imgur.com/xq6yE5Z.png)](https://members.eosdac.io/profile/dallasjohnso) | [![](https://i.imgur.com/sUYhAh3.png)](https://members.eosdac.io/profile/eosdackorean) |[![](https://i.imgur.com/QWBqjPi.png)](https://members.eosdac.io/profile/jbucksteiner)  |
|----------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------------:|---------------------------------------------------------------------------------------|
| [![](https://i.imgur.com/BK709TN.png)](https://members.eosdac.io/profile/lukeeosproxy)                                                                        | [![](https://i.imgur.com/VEJoIOl.png)](https://members.eosdac.io/profile/spaceinvader)               |                                                                                  [![](https://i.imgur.com/7NL6b94.png)](https://members.eosdac.io/profile/greentreesom)  | [![](https://i.imgur.com/4UQ7uRe.png)](https://members.eosdac.io/profile/soyoungkimsk)                                                                                   |
| [![](https://i.imgur.com/hTRYoRu.png)](https://members.eosdac.io/profile/angeljeffrey)                                                                      |                                       [![](https://i.imgur.com/mJTH4UJ.png)](https://members.eosdac.io/profile/mryeateshere)                                        |                                                                             [![](https://i.imgur.com/lTFlntS.png)](https://members.eosdac.io/profile/khaleesiwang)  | [![](https://i.imgur.com/Cjz069H.png)](https://members.eosdac.io/profile/investingwad)                                                                               |

# This weeks highlights 

* Want to participate in a community owned block producer and help enable decentralized autonomous communities? Joining eosDAC has become easier again with EOS Lynx wallet! Users can just head to ‘Explore’ menu and select ‘eosDAC Member Client’ to access to the client. Be part of the DAC future! 

https://cdn.discordapp.com/attachments/440994228986970112/576186901870936083/FB_IMG_1557443923265.jpg

*  EOS Weekly uploaded a fantastic 10-minute video explaining the current token Contract Security Risks and different solutions proposed, including eosDAC's. If you think you "own" an unsecured EOS token, you may be surprised to learn a single person really controls that token!
https://youtu.be/JMh6UoGYXek
<br>
* **Meanwhile on Jungle…**
eosDAC, along with many other BPs, activated and tested the EOSIO Consensus Protocol Upgrade v1.8 on Jungle Testnet. Here’s what we learned.  Once consensus protocol upgrade is activated, any node running < v1.8 of EOSIO software will kicked from the network. 

![](https://cdn.steemitimages.com/DQmf9M7H5TBuDxV7ALyDSFi9DWbJta57JHawPGUt8vn5EDQ/image.png)
+)
![](https://cdn.steemitimages.com/DQmZHK2XMN6YJywud1peC24xvUrroDL6pDCbTNzweDbDeeo/image.png)
(We wish this was our mainnet rank! Please support **eosdacserver**)

* For those who want to gift EOS accounts to noobs, check out this EOS Gift Card project. https://eosgiftcard.com/ 
![](https://cdn.steemitimages.com/DQmSdCYAWTPHuRZJAMpJx2hs4HZtwEJGqED4zDzfsohtxUi/image.png)

# Msigs of the Week
We have 1 msig proposal approved and executed this week:
[Update The Constitution To V4 (try #2)](https://bloks.io/transaction/CBE43C87D0726F868B17A281CE692F26D203F198B2E3E8C163E737CB9C39883C)
This is to reflect the changes in the custodian contract which include fixing the custodian payment calculation from "median" to "mean" and other small formatting issues. (You can see the full diff [here](https://github.com/eosdac/eosdac-constitution/compare/v3...v4))
Once this is updated, members will have to log back in to the member client and sign the constitution again.

And 1 to-be-approved:
[Update Custodian Contract](https://bloks.io/transaction/DF712D330F412060C80F7EE5B0691511E8061F5E8F6DE246F9FB8E38BDF292B0)
This is a follow-up to actually update the custodian contract regarding the payment change described above.


# EOS Report…
### Burn them all!
On 8th of May 2019 marks an incredible milestone for EOS - 34 Millions tokens from the eosio.saving account has been officially retired (AKA burned!). 

Reasoning behind? The current inflation rate is set to be a total of 5%, of which 1% goes to BP rewards and the rest of 4% of inflated tokens were initially reserved to fund the EOS Worker Proposal System but never served the community and been just accumulated in the account. Debates and opinions raised by the community on how to utilise this fund ([for example](https://eosauthority.com/polls_details?proposal=wps_20190112&lnc=en)) but the agreement could not be reached. On 22nd of April 2019 EOS Nation proposed [the retire savings](https://eosauthority.com/approval/view?scope=eosnationftw&name=forumretire&lnc=en) and this was executed with approvals of 15 Active BPs and 6 Stand-bys. (See the transaction [26ca16319febafc0942a8c6e3be26c16b84846b7cfe5f6ade906a0b86a6c2bb7](https://eosauthority.com/transaction/26ca16319febafc0942a8c6e3be26c16b84846b7cfe5f6ade906a0b86a6c2bb7?network=eos))

Dan Larimer seemed to be supportive of this idea too as per his message earlier on:

![](https://cdn.steemitimages.com/DQmdAJtyDA14o5JcPCa9oVgspguFk5zDopVPgejZLprDVy6/image.png)


Whether you supported the idea or not, you’ll all agree that this truly shows how EOS is governing itself. The idea was proposed, supported and executed by the ecosystem!

Related but a completely different news is that MEET.ONE has submitted [a multisig-proposal to remove the 4% inflation ](https://www.eosx.io/tools/msig/proposal?proposer=eosiomeetone&name=removesaving) on the EOS mainnet after testing the code on Kylin Testnet last week. If this proposal gets approved by 15 Active BPs, the EOS network will only retain 1% of the additional issuance for rewarding Block Producers. MEET.ONE has previously asked the community about the idea and the majority answered 'YES' for it! ([See the Referendum and comments down below](https://eosauthority.com/polls_details?proposal=inflation_20190307&prev=search))

So, let us know what is your thought on this! If you aren't sure whther to support it or not, we strongly recommend you watch this video featuring Luke covering the subject: https://youtu.be/et095r8jXZo 
<br>

### EOSIO Labs™ Release: The Assert Manifest Security Model

![](https://cdn.steemitimages.com/DQmcNJNSjWJzwJ3pQxHM8ivfbakCKtU1Kn5vY32MBiTUY1q/image.png)

Block.One introduces the concept of a **Layered Security Model** which firstly help the end users validate the source of the application (whether it’s legitimate), and secondly give them assurance that the transactions being posted by the application are legitimate by validating transaction contents. A great initiative to help the users understand what they are signing and to avoid fraudulent dApps. This is at its inception so if you would like to explore the concept in detail and leave feedback, [read this post](https://medium.com/eosio/eosio-labs-release-the-assert-manifest-security-model-cdd296a58710).

#  eosDAC Twitter highlights
![](https://cdn.steemitimages.com/DQmcsyMufJ54tLw4n6Zn2o57Ez7CtxELX7CDQKMaLBghdh1/image.png)
![](https://cdn.steemitimages.com/DQmQ2kDh8KeK62YQ6RTTE1s8QZipchLomPyZJFid3Y6w1E6/image.png)
---
![](https://cdn.steemitimages.com/DQmT899vJvse8RXEGov83ATFVNXFgg7tDTz7MVxSCTzSknH/image.png)
![](https://cdn.steemitimages.com/DQmWumA7CE4rHdWyvgsprn8ubQdVesiQ6x1gTiNactpemPj/image.png)
---
![](https://cdn.steemitimages.com/DQmf7EGtA5bULgDgPfz41vSERxzC48sCiF5D5tCGQQVPD2Y/image.png)

---

<center><a href="https://eosdac.io/"><img src="https://cdn.steemitimages.com/DQmRQWM3QtQ21wddAMCjbVRhB3rM7L4AGWLY9QpNmkXNLps/Screen%20Shot%202018-06-12%20at%2011.00.55%20PM.png"></a></center>

<iframe width="560" height="315" src="https://www.youtube.com/embed/PbQpAJOP6iA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<center><h1>Please vote for eosdacserver</h1></center>

Join <a href="https://eosdac.io/news/#newsletter">our newsletter</a> to stay informed and follow us on your favorite social media platform:

<sub><a href="https://steemit.com/@eosdac" target="_blank">Steemit</a> | <a href="http://discord.io/eosdac" target="_blank">Discord</a> | <a href="https://t.me/eosdacio" target="_blank">Telegram</a> | <a href="https://facebook.com/eosdac" target="_blank">Facebook</a> | <a href="https://twitter.com/eosdac" target="_blank">Twitter</a> | <a href="https://plus.google.com/+eosdac" target="_blank">Google-plus</a> | <a href="https://github.com/eosdac" target="_blank">Github</a> | <a href="https://instagram.com/eosdac" target="_blank">Instagram</a> | <a href="https://linkedin.com/company/eosdac" target="_blank">Linkedin</a> | <a href="https://medium.com/eosdac" target="_blank">Medium</a> | <a href="https://www.reddit.com/r/EOSDAC/" target="_blank">Reddit</a> | <a href="https://www.youtube.com/eosdac" target="_blank">YouTube</a> | <a href="http://weibo.com/eosdac" target=”_blank”>Weibo</a>| <a href="https://vk.com/eosdac" target="_blank">VK</a>| <a href="https://bihu.com/people/586348" target="_blank">Bihu</a></sub>
