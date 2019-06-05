---
layout: post
title:  "EOS Guide: Keep your EOS account SAFE using Multisig Structure"
date:   2019-05-24T19:20:24
external_link: https://steemit.com/eos/@eosdacvietnam/eos-guide-keep-your-eos-account-safe-using-multisig-structure
---
<sub>Please read this first: [<i>Advanced EOS Multisignature Tutorial</i>](https://medium.com/coinmonks/advanced-eos-multisignature-tutorial-bf4da94f8360) to understand EOS Multisignature</sub>
Recommend: Using Scatter Desktop, not Scatter extension on Chrome

Look at my testing account first:
![](https://cdn.steemitimages.com/DQmWHWbxFf8EjnKHsaZoriNHV1PWreuDEg12pRwLUJjDzrG/image.png)
What is the problem here?
<sub>If I lose my Active Key, I can use my Owner Key to change it.</sub>
* <b>If someone steals my Owner Key, that bad guy can take over my account. I will lose it forever.</b>

<h2>To avoid that, we should apply Multisig Structure on our EOS accounts.</h2>

<h1>1. Set up multisig permissions on your account:</h1>
* <code>Login</code> your EOS account with your <code>Owner Key</code> on [bloks.io](https://bloks.io/) => [Wallet](https://bloks.io/wallet) => [Permissions Manager](https://bloks.io/wallet/permissions-manager)
![](https://cdn.steemitimages.com/DQmdhF1G7Xu6XWM2BG44kxPKkrQR3sscwPy9h5zbz1cndpT/image.png)

* I focus on <code>Owner</code> first. You can use this guide for your Active later. Let's change it.
![](https://cdn.steemitimages.com/DQmSHsRiPQ8iadx7NrD7jZGrunpQD3YiV1363wRdoLjvvtm/image.png)

<i>What changes on the above picture:</i>
<sub>* Owner is the first layer, so let its Parent blank</sub>
1)<b>Threshold</b>: 2 (always >= 2)
2)<b>Keys</b>: delete all keys (because a key without the highest threshold cannot make a msig transaction)
<sub>* We should use accounts, please prepare the number of accounts > <b>Threshold</b>. In this guide, I prepare 3 accounts. The reason is that if you lose 1 account, you still have 2 left to make a msig transaction</sub>
3)<b>Accounts</b>: add 3 accounts <code>13jjjjjjjjjj@active</code>, <code>iloveueosdac@active</code>, and <code>1rtkjeosdac1@active</code> with <b>threshold</b> <code>1</code> for each

* Click <code>Save Permission</code>

* When completed, check out your account permissions
![](https://cdn.steemitimages.com/DQmVCzXRKrgu6G3P7R3DHemws5jHg9E46YPLv4Nzn3fXJ19/image.png)

<h1>2. Create a msig transaction (change permissions, tranfer tokens, stake, unstake, delegate, undelegate, buy/sell RAM, etc.):</h1>
In this guide, I am gonna transfer tokens

* Pick up 1 of 3 accounts to <code>login</code> (I choose <code>13jjjjjjjjjj@active</code>) and turn on <code>Multisig Mode</code>
![](https://cdn.steemitimages.com/DQmXym8VgX888edDNXprjV4nnVpe2Ef3v1pgaJtLm35T8Hu/image.png)

* Go to [Wallet](https://bloks.io/wallet) => Transfer Tokens
![](https://cdn.steemitimages.com/DQmShirHN5BFdKnkEMwFdY5B5Ur14Jj6AkQc8dj3Eud9Ajb/image.png)

* Click <code>Transfer 0.01 EOS to iloveueosdac</code>

* Then, you will turn to [Propose Multisig Transaction](https://bloks.io/wallet/msig)
![](https://cdn.steemitimages.com/DQmbCeuvE54oB81azVJmX8EfKaBcDZ6UXNBM2MnoPn2TzbJ/image.png)

* Put on the transaction information

![](https://cdn.steemitimages.com/DQmNZhcVPJyv54ZEHscKfF1x3EfyPJwvnJemDNreiNwNPb2/image.png)
<sub>* Proposal name: put on anything you want, but it is not longer than 12 characters </sub>
<sub>* Requested Approvals: my Owner Threshold is 2, so just pick up 2 of 3 accounts</sub>

![](https://cdn.steemitimages.com/DQmS6YvHdh6JLfu4tDpb3c5ZFD8QTnqCjc2MVdrdb2AzfQr/image.png)
<sub>* Authorization: put on your Sender account. Here is <code>account4test</code> and <code>owner</code> (I put on <code>owner</code> because all of my Requested Approvals are on Owner Permissions)</sub>
<sub>* Data: from: change <code>13jjjjjjjjjj</code> to <code>account4test</code> (tranfer tokens from <code>account4test</code>, not <code>13jjjjjjjjjj</code>)</sub>

* Click <code>Propose</code>

* When completed, click on <code>msigtxtest</code>
![](https://cdn.steemitimages.com/DQmVG39GxhgNRWDcq4m54SS1DZt9tMC94uMBYomg1fu2PVx/image.png)

![](https://cdn.steemitimages.com/DQmUNxKBoigBcubnvbhKWxS3UzoxcbtntwGrTvbcrFYGy4a/image.png)

* Turn off <code>Multisig Mode</code>
![](https://cdn.steemitimages.com/DQmRVZbJRVbQ2ak3Zcjf5HSGJ6bmhAEgAv1QoSKeCC2e696/image.png)

* Use the first approval account <code>13jjjjjjjjjj</code> and click <code>Approve Transaction</code>

* <code>Logout</code> and <code>Login</code> the second approval account <code>iloveueosdac</code> and click <code>Approve Transaction</code>

* Now you have 2 approvals, then click <code>Execute Transaction</code>
![](https://cdn.steemitimages.com/DQmRRJiPBuWXgdGs6jZ9tnaLmSVWq3JzsnAN2GRzt3KwYRG/image.png)

* Congratulations! Your msig transaction is done!
![](https://cdn.steemitimages.com/DQmWCvCrkwv56Howiay3PNFaGUxnr8SQ5q23VH3AnoDqVYU/image.png)

* When completed, click F5 and you will see
![](https://cdn.steemitimages.com/DQmZvey2x1GkW8vJShEQDrAo4w2kQRcDqoFy1Dsm8w9XYSo/image.png)

* Check out the transaction on <code>account4test</code>
![](https://cdn.steemitimages.com/DQmefzSeYAp5n8RtHMHaQxnaJQd2yRAfTb4jjk5rt37egRE/image.png)

<h2>That's all. Hope that helps you :)</h2>

<center>[![](https://cdn.steemitimages.com/DQmReQj3D2My9so7vzqE9rRppYULYeDhnvZxdyEeJNTdNja/image.png)](https://eosdac.io)</center>

<iframe width="640" height="360" src="https://www.youtube.com/embed/PbQpAJOP6iA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<center><h2>Hãy bỏ phiếu cho eosdacserver</h2></center>
Đăng ký [bản tin của chúng tôi](https://eosdac.io/news/#newsletter) để nhận thông báo và theo dõi chúng tôi trên các nền tảng mạng xã hội yêu thích của bạn:

 <sub><a href="https://steemit.com/@eosdac">Steemit</a> | <a href="http://discord.io/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Discord</a> | <a href="https://t.me/eosdacio" rel="nofollow noopener" title="This link will take you away from steemit.com">Telegram</a> | <a href="https://facebook.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Facebook</a> | <a href="https://twitter.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Twitter</a> | <a href="https://plus.google.com/+eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Google-plus</a> | <a href="https://github.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Github</a> | <a href="https://instagram.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Instagram</a> | <a href="https://linkedin.com/company/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Linkedin</a> | <a href="https://medium.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Medium</a> | <a href="https://www.reddit.com/r/EOSDAC/" rel="nofollow noopener" title="This link will take you away from steemit.com">Reddit</a> | <a href="https://www.youtube.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">YouTube</a> | <a href="http://weibo.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Weibo</a>| <a href="https://vk.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">VK</a>| <a href="https://bihu.com/people/586348" rel="nofollow noopener" title="This link will take you away from steemit.com">Bihu</a></sub>
