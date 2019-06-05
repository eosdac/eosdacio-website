---
layout: post
title:  "eosDAC Custodian Candidate Voting Is Live!"
date:   2018-12-15T19:56:45
external_link: https://steemit.com/eosdac/@eosdac/eosdac-custodian-candidate-voting-is-live
---
We are very excited to announce eosDAC custodian candidate voting is now live! Once we reach 15% of EOSDAC token holders voting for candidates, the DAC will be turned over to the top 12 voted custodian candidates via an automated permissions change on the [dacauthority](https://www.bloks.io/account/dacauthority) account.

![](https://cdn.steemitimages.com/DQmcvHaNcGEMPxBNBf8wBBLMCBtq14kZgy3rsWTMjHSghkY/image.png)


---

한국어 번역본: [eosDAC 관리인 후보 투표 개시!](https://steemit.com/blockproducer/@koyoungk/62qg4q-eosdac)
この投稿は日本語でもご覧になれます：<a href="https://steemit.com/eosdac/@zahanwu/4fh6q3-eosdac">eosDACカストディアン候補への投票が始まりました</a>
Этот пост также доступен на русском языке: <a href="https://steemit.com/eos/@shadow82/golosovanie-za-khranitelei-eosdac-zapusheno">Голосование за Хранителей eosDAC запущено!</a>
bài này có sẵn bằng tiếng việt: [Chức Năng Bỏ Phiếu Bầu Ứng Viên Giám Hộ Đã Mở!](https://steemit.com/eosdac/@eosdacvietnam/chuc-nang-b-phieu-bau-ung-vien-giam-ho-da-mo)
Esta publicación está disponible en vietnamita: [¡Ya se puede votar a los candidatos al primer Consejo de Representantes eosDAC!](https://steemit.com/eos/@ferbuerotrebino/ya-puede-votar-a-los-candidatos-al-primer-consejo-de-representantes-eosdac)
这篇文章也有中文简体版: [eosDAC托管人候选人投票正在进行中](https://steemit.com/eosio/@eosdac/4hftmj-eosdac)

---

The eosDAC community has been working hard to reach this important moment which included many off-chain requirements such as [forming The DAC Foundation](https://steemit.com/eosio/@eosdac/eosdac-announce-the-formation-of-the-dac-foundation) and [securing commercial terms with a service company](https://steemit.com/eosio/@eosdac/eosdac-prepares-transition-arrangements-into-custodian-governance), namely Dacoco Gmbh. All registered members of eosDAC can now vote for custodian candidates they trust to secure the long-term value of the DAC.

In true, decentralized style, you can build the EOS Member Client yourself and run it locally using the code on <a href="https://github.com/eosdac/eosdactoolkit/releases">our Github here</a> in order to vote for your favorite candidates. You can also use the version hosted at https://members.eosdac.io/ Just click the Vote for Custodians menu item, review the profiles of the candidates, click the + button next to five you like, and then click Submit My Votes.

That's it!

Once the required 15% threshold is met, the DAC permissions will be turned over so the code and funds which run the DAC will be controlled by the custodians who are voted in through on-chain voting of EOSDAC stake-weighted votes by registered members of eosDAC. This is a huge milestone for us as a community-owned EOS Block Producer and DAC Enabler. Our goal is to provide technical leadership and answer directly to the EOS community. We are also paving the way for a more decentralized future as we not only build but also use tools to enable Decentralized Autonomous Communities.

Thank you for your continued support as we build these open source, DAC-enabling tools. Please vote for eosdacserver to support our work and if you haven't already, register as a member of eosDAC and use your EOSDAC tokens to vote for custodians and help us fully launch the DAC by achieving 15% voting.

For a little more detail on the current technical structure of the DAC, read on!

# In Terms of EOS Accounts and Code, What Is eosDAC?

The main EOS account which controls the DAC is called [dacauthority](https://www.bloks.io/account/dacauthority). Click on "permissions" on the bloks.io explorer to see how it is set up:

![](https://cdn.steemitimages.com/DQmWmhbZJCs5L8WuhTqMvX656GujG4kojTQTf2Z65r6GWy9/image.png)

Temporarily, the initial block producer team of Rob, Michael, and Luke will retain access to the EOS5XZMyRHJdq8DaCQbeK63SoAo1vmCLbW9bnvbiFPGYSGEsbVNxp owner key for a period of time to fix any technical problems which might arise such as a technical failure preventing the elected custodians from fulfilling their role or some other code bug which could not otherwise be corrected. After there is enough confidence within the community, that key will be resigned as well. The high, med, and low permissions correspond to the voting threshold requirements outlined in [the eosDAC constitution](https://members.eosdac.io/constitution). Once the DAC reaches 15%, the high, medium, low, and one permissions will be updated to be the accounts of the elected custodians.

The block producer account <a href="https://www.bloks.io/account/eosdacserver">eosdacserver</a> is also currently controlled via multisig by Rob, Michael, and Luke as you can see here: 

![](https://cdn.steemitimages.com/DQmWevaNKUC2BAsWhPqjLZiLy3mhttwmGWQ9N8EoS6xWg6s/image.png)

There are also additional permissions configured for specific on-chain actions such as claiming block producer rewards.

Rob, Michael, and Luke have an <a href="https://eosdac.io/active-worker-proposals/">active worker proposal</a> to provide block production services to the DAC and in the future, control of that account will also be given over to the DAC so that, if the token holders decide via their custodian representatives to replace Rob, Michael, and Luke, they will have the on-chain ability to do so. This is important as we define decentralization as no single point of failure.

The next part of the DAC is the <a href="https://www.bloks.io/account/eosdactokens">eosdactokens</a> account which has all the code for the EOSDAC token including member registration which <a href="https://github.com/eosdac/eosdactoken">you can review here</a>. As you can see, full control of this account is in the hands of dacauthority which will be controlled by the custodians when we reach 15% voting threshold required to launch the DAC:

![](https://cdn.steemitimages.com/DQmaTvqkp2iELEowKCYpbiFTjdceVHE4rZ7SE3cUPW6CW2p/image.png)

The main functionality for the DAC can be found in the <a href="https://www.bloks.io/account/daccustodian">daccustodian</a> account with code <a href="https://github.com/eosdac/daccustodian">you can review here</a>. This includes functions like claiming pay, nominating custodians, casting votes, updating configurations, and more:

![](https://cdn.steemitimages.com/DQmbvMR54dRq3r4H6umBuivbaM7S3sU1steJWvxv5gZycrq/image.png)

The permissions on this account are again controlled by dacauthority with an additional time-delay xfer permission so all code-initiated transfers will have to delay transactions by 1 hour. The purpose of this delay is to ensure the code is functioning as expected and if somewhere in the code a transfer is initiated incorrectly, we may have time as a DAC to fix it before the DAC loses funds inappropriately.

![](https://cdn.steemitimages.com/DQmSBhfdpqx5c4WmezoWvv9z3neWfmFcvr4yA2sAPtu6MAV/image.png)

The main funds of the DAC are held in the <a href="https://www.bloks.io/account/eosdacthedac">eosdacthedac</a> account which is again controlled by dacauthority and also has the same timed-delay xfer permission.

The code we're still working on includes functionality to help custodians <a href="https://github.com/eosdac/dacmultisigs">approve multi-signature proposals on chain</a> through our member client. We're also building out a full <a href="https://github.com/eosdac/dacproposals">worker proposal system</a> which will facilitate all the work the DAC is doing.

As we continue to build and refine our process for running DACs on the EOSIO software, we'll also continue to explore our <a href="https://steemit.com/eosdac/@eosdac/the-dac-chain-initiative-announcing-an-exploratory-into-how-usage-of-eos-side-chains-and-separate-chains-may-create-benefits-for">DAC Chain Initiative</a> so these core DAC functionalities will be available to future DACs as system-level contracts on the DAC Chain.

As always, we welcome any and all feedback and encourage you to join our community on discord: http://discord.io/eosdac

Thank you again for your encouragement and support as we've worked to reach this milestone.

Now get out there and vote for some eosDAC candidates! :) http://members.eosdac.io

- Luke

<a href="https://eosdac.io/"><img src="https://cdn.steemitimages.com/DQmRQWM3QtQ21wddAMCjbVRhB3rM7L4AGWLY9QpNmkXNLps/Screen%20Shot%202018-06-12%20at%2011.00.55%20PM.png"></a>

<iframe width="560" height="315" src="https://www.youtube.com/embed/PbQpAJOP6iA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<center><h1>Please vote for eosdacserver</h1></center>

Join <a href="https://eosdac.io/news/#newsletter">our newsletter</a> to stay informed and follow us on your favorite social media platform:

<sub><a href="https://steemit.com/@eosdac" target="_blank">Steemit</a> | <a href="http://discord.io/eosdac" target="_blank">Discord</a> | <a href="https://t.me/eosdacio" target="_blank">Telegram</a> | <a href="https://facebook.com/eosdac" target="_blank">Facebook</a> | <a href="https://twitter.com/eosdac" target="_blank">Twitter</a> | <a href="https://plus.google.com/+eosdac" target="_blank">Google-plus</a> | <a href="https://github.com/eosdac" target="_blank">Github</a> | <a href="https://instagram.com/eosdac" target="_blank">Instagram</a> | <a href="https://linkedin.com/company/eosdac" target="_blank">Linkedin</a> | <a href="https://medium.com/eosdac" target="_blank">Medium</a> | <a href="https://www.reddit.com/r/EOSDAC/" target="_blank">Reddit</a> | <a href="https://www.youtube.com/eosdac" target="_blank">YouTube</a> | <a href="http://weibo.com/eosdac" target=”_blank”>Weibo</a>| <a href="https://vk.com/eosdac" target="_blank">VK</a>| <a href="https://bihu.com/people/586348" target="_blank">Bihu</a></sub>
