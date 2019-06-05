---
layout: post
title:  "eosDAC托管人候选人投票正在进行中！"
date:   2019-01-08T18:56:06
external_link: https://steemit.com/eosio/@eosdac/4hftmj-eosdac
---
我们非常高兴地宣布eosDAC托管人候选人投票系统现已上线！EOSDAC代币持有者现在可以投票给候选人，一旦投票率达到15%，我们将通过dacauthority帐户的自动权限变更合约，将DAC管理权限移交给获得最多投票的前12名托管人候选人。
![](https://cdn.steemitimages.com/DQmcvHaNcGEMPxBNBf8wBBLMCBtq14kZgy3rsWTMjHSghkY/image.png)

---

This post is available in English: [eosDAC Custodian Candidate Voting Is Live!](https://steemit.com/eosdac/@eosdac/eosdac-custodian-candidate-voting-is-live)
한국어 번역본: [eosDAC 관리인 후보 투표 개시!](https://steemit.com/blockproducer/@koyoungk/62qg4q-eosdac)
この投稿は日本語でもご覧になれます：<a href="https://steemit.com/eosdac/@zahanwu/4fh6q3-eosdac">eosDACカストディアン候補への投票が始まりました</a>
Этот пост также доступен на русском языке: <a href="https://steemit.com/eos/@shadow82/golosovanie-za-khranitelei-eosdac-zapusheno">Голосование за Хранителей eosDAC запущено!</a>
bài này có sẵn bằng tiếng việt: [Chức Năng Bỏ Phiếu Bầu Ứng Viên Giám Hộ Đã Mở!](https://steemit.com/eosdac/@eosdacvietnam/chuc-nang-b-phieu-bau-ung-vien-giam-ho-da-mo)
Esta publicación está disponible en vietnamita: [¡Ya se puede votar a los candidatos al primer Consejo de Representantes eosDAC!](https://steemit.com/eos/@ferbuerotrebino/ya-puede-votar-a-los-candidatos-al-primer-consejo-de-representantes-eosdac)

---

eosDAC社区一直在致力于实现这一重要时刻。其中还包括一些链下工作，比如成立DAC基金会，以及成立一家满足商业条款的服务公司：Dacoco有限公司。eosDAC的所有0注册会员现在都可以投票给他们所信任的托管人候选人，以确保DA​​C的长期价值。

实际上，你自己也可以用我们在Github上的开源代码在本地部署一份EOS会员客户端，以去中心化的方式为你喜欢的候选人投票。你也可以使用官网上的版本https://members.eosdac.io/，点击选举托管人菜单，查看候选人的个人资料，并选择最多5个候选人进行投票。

就这么简单！

一旦达到所要求的15％的投票门槛，DAC权限——包括所有代码和资金将会移交给由eosDAC注册会员通过链上EOSDAC投票系统选出的候选人进行控制。无论是对于我们——一个完全由社区拥有的EOS超级节点，还是DAC支持者，这都是一个巨大的里程碑。我们的目标是提供技术指导并与EOS社区直接对话和沟通。我们也在致力于发展更加去中心化的社区治理前景——我们不仅开发工具，我们还使用这个工具来强化去中心化社区治理。

感谢你为我们构建这些开源的DAC支持工具所提供的一贯支持。请为eosdacserver超级节点投票，如果你还没有注册成为eosDAC会员，请马上注册并使用您的EOSDAC代币为候选人投票，以帮助我们尽快达到15%的投票率来启动DAC治理。

下面是一些更详细的技术架构，请继续阅读！

# 从EOS账户和代码的层面，什么是eosDAC？

控制DAC的EOS主网账号是：dacauthority。点击链接 https://bloks.io/account/dacauthority，打开bloks.io区块链浏览器，点击“Permissions”，让我们看一下它是如何建立的：

![](https://cdn.steemitimages.com/DQmWmhbZJCs5L8WuhTqMvX656GujG4kojTQTf2Z65r6GWy9/image.png)


作为一项临时措施，超级节点启动团队成员，包括Rob、Michael和Luke，将在一段时间内保留所有者秘钥（owner key）EOS5XZMyRHJdq8DaCQbeK63SoAo1vmCLbW9bnvbiFPGYSGEsbVNxp的访问权限，以解决可能出现的任何技术问题，例如因为技术故障导致当选的托管人无法履行其职责或某些其他无法修复的代码错误。一旦我们的社区有足够的信心可以处理此类问题，此秘钥也将会被退还。高、中及低权限则对应于eosDAC章程中的投票门槛要求，一旦DAC投票率达到15%，高、中、低这三个权限连同one权限都会被更换成被选举的托管人账户。

超级节点账号eosdacserver当前也是被Rob、Michael和Luke用多签的方式控制，如下所示：

![](https://cdn.steemitimages.com/DQmWevaNKUC2BAsWhPqjLZiLy3mhttwmGWQ9N8EoS6xWg6s/image.png)


还有一些为特定的链上操作配置的其他权限，例如领取超级节点奖励。

Rob、Michael和Luke还管理一个 工作人员提案系统 （https://eosdac.io/active-worker-proposals/），用于向DAC提供超级节点相关服务。如果EOSDAC代币持有人决定用他们选举出来的托管人代表来取代Rob、Michael和Luke，未来该账号的控制权也将移交给DAC治理。他们确实拥有这么做的链上权利。这对于我们将去中心化定义为无单点故障来说，是非常重要的。

DAC的下一部分是eosdactokens帐户（https://bloks.io/account/eosdactokens），这里有包括会员注册在内的EOSDAC代币的所有代码，可以在这里查看 https://github.com/eosdac/eosdactoken。正如你所看到的，此帐户的控制权完全由账号dacauthority掌控，当我们达到启动DAC所需的15％投票门槛时，托管人将对其进行控制：


![](https://cdn.steemitimages.com/DQmaTvqkp2iELEowKCYpbiFTjdceVHE4rZ7SE3cUPW6CW2p/image.png)

DAC的主要功能可以在daccustodian帐户中找到，您可以在此查看代码（https://github.com/eosdac/daccustodian）。包括了领取薪酬、提名托管人、投票，更新配置等功能：

![](https://cdn.steemitimages.com/DQmbvMR54dRq3r4H6umBuivbaM7S3sU1steJWvxv5gZycrq/image.png)

此帐户的权限还是由账户dacauthority进行控制，并具有额外的延时xfer权限，因此所有由代码激活的转账都将延迟交易1小时。设置此延迟的目的是确保代码按预期运行，如果代码中存在错误，作为DAC我们可能有时间来修复问题，从而避免DAC遭受不必要的资金损失。

![](https://cdn.steemitimages.com/DQmSBhfdpqx5c4WmezoWvv9z3neWfmFcvr4yA2sAPtu6MAV/image.png)

DAC的主要资金存放在eosdacthedac帐户中，该帐户还是由账户dacauthority控制，并且具有相同的延时xfer权限。

我们仍在开发中的代码包括帮助托管人通过我们的会员客户端批准链上的多签名提案功能（https://github.com/eosdac/dacmultisigs）。我们还在开发一个完整版的工作人员提案系统（https://github.com/eosdac/dacproposals），该系统将为DAC正在开展的所有工作提供便利。

随着我们继续构建和完善在EOSIO如鉴赏运行的DAC系统，我们也在继续探索我们自己的DAC链启动计划（https://steemit.com/eosdac/@eosdac/the-dac-chain-initiative-announcing-an-exploratory-into-how-usage-of-eos-side-chains-and-separate-chains-may-create-benefits-for），以便将这些核心DAC功能作为DAC链上的系统级合约给未来的DAC使用。

一如既往，我们欢迎任何反馈，并鼓励您加入我们的discord社区: http://discord.io/eosdac

再次感谢您的鼓励和支持，帮助我们努力实现了这一里程碑。

诚邀您为eosDAC候选人投票：http://members.eosdac.io

作者：Luke
原文链接：https://steemit.com/eosdac/@eosdac/eosdac-custodian-candidate-voting-is-live

![Screen Shot 2018-06-12 at 11.00.55 PM.png](https://cdn.steemitimages.com/DQmRQWM3QtQ21wddAMCjbVRhB3rM7L4AGWLY9QpNmkXNLps/Screen%20Shot%202018-06-12%20at%2011.00.55%20PM.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/oGnvusYgDhc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<center><h1>请为 eosdacserver 投票</h1></center>

订阅<a href="https://eosdac.io/news/#newsletter">我们的新闻快报</a>来获取最新资讯，并且在您最喜欢的社交平台上关注我们：

<sub><a href="https://steemit.com/@eosdac" target="_blank">Steemit</a> | <a href="http://discord.io/eosdac" target="_blank">Discord</a> | <a href="https://t.me/eosdac_chinese" target="_blank">Telegram</a> | <a href="https://facebook.com/eosdac" target="_blank">Facebook</a> | <a href="https://twitter.com/eosdac" target="_blank">Twitter</a> | <a href="https://plus.google.com/+eosdac" target="_blank">Google-plus</a> | <a href="https://github.com/eosdac" target="_blank">Github</a> | <a href="https://instagram.com/eosdac" target="_blank">Instagram</a> | <a href="https://linkedin.com/company/eosdac" target="_blank">Linkedin</a> | <a href="https://medium.com/eosdac" target="_blank">Medium</a> | <a href="https://www.reddit.com/r/EOSDAC/" target="_blank">Reddit</a> | <a href="https://www.youtube.com/eosdac" target="_blank">YouTube</a> | <a href="http://weibo.com/eosdac" target=”_blank”>Weibo</a>| <a href="https://vk.com/eosdac" target="_blank">VK</a>| <a href="https://bihu.com/people/586348" target="_blank">Bihu</a></sub>
