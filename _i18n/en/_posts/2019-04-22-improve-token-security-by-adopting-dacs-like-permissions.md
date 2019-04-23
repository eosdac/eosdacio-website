---
layout: post
title:  "Improve token security by adopting DACs like permissions"
date:   2019-04-22T16:46:12
external_link: https://steemit.com/eosio/@eosdac/improve-token-security-by-adopting-dacs-like-permissions
---
EOS New York has recently sparked a discussion on risks of EOS token smart contracts  ([read the post](https://medium.com/@eosnewyork/addressing-eos-token-smart-contracts-and-a-proposal-for-core-development-funding-on-eos-f43b91c57fe2)). In this article they highlight the risk that 8/10 of the top tokens on EOS have a single owner key which controls. EOS New York is proposing that the token can be created from the contract deployed into the eosio.token account, so there can't be new tokens created without 15/21 BP approval. 

We are glad that EOS New York has called attention to this issue and as a BP eosDAC has always taken the security first approach and  believes that we have solved this issue as a DAC. 


So, here’s our take on this.

<center>![](https://cdn.steemitimages.com/DQmfHAq8y4eyWYqBhiHF4qmb22qjAb5HEEXixfcmxpjMifa/image.png)</center>

## Risk of Self-issuance Still Remains



First of all, eosDAC is in complete agreement with EOS Newyork's opinion on how malicious it can be to have a single owner key meaning a centralized authority taking full control over the tokens of the dApps and eosio.token system contract by design allows for a more dencetralized control over token contracts. The solution presented by EOS New York is great as it prevents a “bad” actor from modifying token balances as they please or adding sneaky actions, etc. However, there is still a risk of the token issuer being able to simply issue more tokens. It does not prevent the issuer with a single key to inflate the token (and sell them to crash the market, a.k.a., exit scam), which we consider as a great threat. Creating the token under eosio.token still allows the issuer to issue or burn the token. A lot of tokens need that feature for inflation (ie., IQ). How can we address this potential issue as well then?

### Ability to modify token contract

Many projects do not use the standard token contract, in our case the EOSDAC token also stores whether a token holder is a member of the DAC.

## DAC as a Solution

Well, naturally, we propose using a DAC as a solution. DACs don’t have the same problem because everything (funds included) is protected by more than one person. The more people, the less chance they would collude to do something malicious or make a mistake. 

The [eosdactokens](https://www.bloks.io/account/eosdactokens) account which has all the code for the EOSDAC token which [you can review here](https://github.com/eosdac/eosdactoken).  You can verify that the source code matches the code deployed on the chain (to see that we haven't added any extra functions): https://eospark.com/contract/eosdactokens?tab=security  
As you can see, full control of this account is in the hands of [dacauthority](https://bloks.io/account/dacauthority) which is controlled by the 12 custodians since the DAC launched:

![](https://cdn.steemitimages.com/DQmaTvqkp2iELEowKCYpbiFTjdceVHE4rZ7SE3cUPW6CW2p/image.png)
![](https://cdn.steemitimages.com/DQmX2maVt133ZBuxkimYjRwEP6cnUR5AGEYaZDfp5C7874r/image.png)

The main functionality for the DAC can be found in the <a href="https://www.bloks.io/account/daccustodian">daccustodian</a> account with code <a href="https://github.com/eosdac/daccustodian">you can review here</a>. This includes functions like claiming pay, nominating custodians, casting votes, updating configurations, and more.

This means unlike the most tokens where a single person can do anything they like, we need approval of 10/12 Custodians (each carrying a vote weight of 1) to do any of above. For example, one of custodians may propose to take tokens from a particular account, but the other custodians would refuse to sign that proposal. Besides, a single owner key can always be lost or stolen, but if you have > 2 people, the chance is far lower.

Another thing is that the code update has to be broadcast to the network with an msig, so that anyone can verify that the code being deployed matches our github. We have to put the code change up for review in the eosio.msig contract and anyone can see that it is going to happen before the custodians sign it. Technically the custodians can compile the code from [Github](https://github.com/eosdac/dacmultisigs) and check that the hash matches what was proposed on chain. 


## How to try a DAC

It's easy and already available for the whole community. You can explore building your own DAC using a simple script we developed recently which automates much of the process for you. Try it yourself using [the Github repo here](https://github.com/eosdac/dac-factory)

Here's a detailed video showing how the script works:
https://youtu.be/dtFZjJ1409M


We continue to develop DAC Factory and aim to make launching DACs with a click of a button, with a plethora of customization options. 

If you are interested, you can read more benefits of launching a DAC [here](https://eosdac.io/why-launch/).

Support us by voting for **eosdacserver**


---


<center><a href="https://eosdac.io/"><img src="https://cdn.steemitimages.com/DQmRQWM3QtQ21wddAMCjbVRhB3rM7L4AGWLY9QpNmkXNLps/Screen%20Shot%202018-06-12%20at%2011.00.55%20PM.png"></a></center>

<iframe width="560" height="315" src="https://www.youtube.com/embed/PbQpAJOP6iA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<center><h1>Please vote for eosdacserver</h1></center>

Join <a href="https://eosdac.io/news/#newsletter">our newsletter</a> to stay informed and follow us on your favorite social media platform:

<sub><a href="https://steemit.com/@eosdac" target="_blank">Steemit</a> | <a href="http://discord.io/eosdac" target="_blank">Discord</a> | <a href="https://t.me/eosdacio" target="_blank">Telegram</a> | <a href="https://facebook.com/eosdac" target="_blank">Facebook</a> | <a href="https://twitter.com/eosdac" target="_blank">Twitter</a>  | <a href="https://github.com/eosdac" target="_blank">Github</a> | <a href="https://instagram.com/eosdac" target="_blank">Instagram</a> | <a href="https://linkedin.com/company/eosdac" target="_blank">Linkedin</a> | <a href="https://medium.com/eosdac" target="_blank">Medium</a> | <a href="https://www.reddit.com/r/EOSDAC/" target="_blank">Reddit</a> | <a href="https://www.youtube.com/eosdac" target="_blank">YouTube</a> | <a href="http://weibo.com/eosdac" target=”_blank”>Weibo</a>| <a href="https://vk.com/eosdac" target="_blank">VK</a>|
