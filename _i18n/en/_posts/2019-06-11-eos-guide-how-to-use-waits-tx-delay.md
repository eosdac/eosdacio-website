---
layout: post
title:  "EOS Guide: How to use Waits (TX Delay)"
date:   2019-06-09T20:10:24
external_link: https://steemit.com/eos/@eosdacvietnam/eos-guide-how-to-use-waits-tx-delay
---
<sub>* EOS Guide: Keep your EOS account SAFE using Multisig Structure https://steemit.com/eos/@eosdacvietnam/eos-guide-keep-your-eos-account-safe-using-multisig-structure</sub>
<sub>* EOS Guide: Create Custom EOS Permissions For Each DApp https://steemit.com/eos/@eosdacvietnam/eos-guide-create-custom-eos-permissions-for-each-dapp</sub>

Today, I am gonna show you how to use <b>Waits (TX Delay)</b> to keep your EOS account SAFE.

<h2>What is WAITS?</h2>Specifying waits allows a user to ensure that transaction may not be executed without a required delay.

Look at my testing account first:
![](https://cdn.steemitimages.com/DQmNPAph3kJfbhRdERVietF2nm1gJ8H9TuSsGnLXkeaJgdb/image.png)
There is no wait on <code>account4test</code>. I will add waits to <code>active</code> permission.

<h1>Let's start!</h1><h2>I. Add Waits</h2>
<code>Login</code> your EOS account with your <code>Active Key</code> on [bloks.io](https://bloks.io/) => [Wallet](https://bloks.io/wallet) => [Permissions Manager](https://bloks.io/wallet/permissions-manager)
![](https://cdn.steemitimages.com/DQmbyi7ChBYjLotqZXmCuU7pv84rJh7bv1S1eBZ96wUw6zv/image.png)

Change the info:
![](https://cdn.steemitimages.com/DQmX3P23WHfs73ZtAyd8xKzbqTkeNiaN5eHC4T3u8dv3ass/image.png)
* Threshold (always >=2): <code>2</code>
* Keys:
  * change the threshold of <code>EOS8gKJKboCpK1XtoM3EajUDLZ6rVubBjN5TifMw6q1sHav3smCrS</code> to <code>2</code> (I change it just for backup or make any transaction immediately when needed. You can keep <code>1</code>)
  * Add a new key <code>EOS63MkrMsTUrKwK5LshQnahRCpQPtaq4deLXNQca446Y4GFAQ5r6</code> with threshold <code>1</code>
* Waits (always < threshold): <code>1</code>

Click <code>Save Permission</code>

When completed, check out your account permissions
![](https://cdn.steemitimages.com/DQmfCvPAJcWAffia5Tbz7rYYNeM1iu5zVst6RPBJcA3t8TJ/image.png)

<h2>II. Let's test!</h2>In this guide, I am gonna transfer tokens
* <code>Login</code> with the new key <code>EOS63MkrMsTUrKwK5LshQnahRCpQPtaq4deLXNQca446Y4GFAQ5r6</code>
![](https://cdn.steemitimages.com/DQmUbKEBz5Luu9H9P48cEubKA3sHRHXXGJQBuxzqvV6Nm6X/image.png)

* To satisfy the new permission: I will schedule the transaction to be delayed by 3 minutes and provide authorization for the key <code>EOS63MkrMsTUrKwK5LshQnahRCpQPtaq4deLXNQca446Y4GFAQ5r6</code>
  * Change TX Delay (s) to 180 seconds (3 minutes)
![](https://cdn.steemitimages.com/DQmbZnancbzJdwW4N6j143aManmmHcdKkTDiXiYNshZz8qz/image.png)

* Go to [Wallet](https://bloks.io/wallet) => Transfer Tokens
![](https://cdn.steemitimages.com/DQmRzXVaRxJDvFhUDvLeHAMftWgsXVLjM1SpfJ9ueXsv6aK/image.png)

* Click on <code>Transfer 0.1 EOS to iloveueosdac</code>
![](https://cdn.steemitimages.com/DQmbW2XiNAG4Gv4xXDMYFWEJt7dHiCGzX4AaSdfScMRsMxU/image.png)

* Then click on TX <code>0e6cb9034de72a45004666944aaa233bed9a8734c6bb3a7a98d9a0baa7ffd425</code>

* You will see
![](https://cdn.steemitimages.com/DQmaaNHZc6dMzEUM18M6JMpS5Cba3DMY3oDaxbT9hThsaaq/image.png)
<b>Transaction Not Found</b>: the transaction is only going online after 3 minutes. However, that consumed some RAM (that shows the transaction is about to go online)
![](https://cdn.steemitimages.com/DQmTjhxd6WrcFb56nkntSCWk29S46hDPVo6wyjuAkfE9Q8Y/image.png)

* 3 minutes later, you refresh the page and see the transaction online
![](https://cdn.steemitimages.com/DQmSAKZrRsJV7tFPVnTgaxZgSi1NjXw1MrrsKkahK2AGegp/image.png)
The transaction is done!

<h2>NOTE:</h2>
* If you use the key with the highest threshold, Waits (TX Delay) is Optional. You can put any TX Delay. No need to be like the Waits on your EOS account.
* If you use the key with lower threshold, Waits (TX Delay) is required and must be the same as the Waits on your EOS account.

<center>[![](https://cdn.steemitimages.com/DQmReQj3D2My9so7vzqE9rRppYULYeDhnvZxdyEeJNTdNja/image.png)](https://eosdac.io)</center>

<iframe width="640" height="360" src="https://www.youtube.com/embed/PbQpAJOP6iA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<center><h2>Hãy bỏ phiếu cho eosdacserver</h2></center>
Đăng ký [bản tin của chúng tôi](https://eosdac.io/news/#newsletter) để nhận thông báo và theo dõi chúng tôi trên các nền tảng mạng xã hội yêu thích của bạn:

 <sub><a href="https://steemit.com/@eosdac">Steemit</a> | <a href="http://discord.io/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Discord</a> | <a href="https://t.me/eosdacio" rel="nofollow noopener" title="This link will take you away from steemit.com">Telegram</a> | <a href="https://facebook.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Facebook</a> | <a href="https://twitter.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Twitter</a> | <a href="https://plus.google.com/+eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Google-plus</a> | <a href="https://github.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Github</a> | <a href="https://instagram.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Instagram</a> | <a href="https://linkedin.com/company/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Linkedin</a> | <a href="https://medium.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Medium</a> | <a href="https://www.reddit.com/r/EOSDAC/" rel="nofollow noopener" title="This link will take you away from steemit.com">Reddit</a> | <a href="https://www.youtube.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">YouTube</a> | <a href="http://weibo.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">Weibo</a>| <a href="https://vk.com/eosdac" rel="nofollow noopener" title="This link will take you away from steemit.com">VK</a>| <a href="https://bihu.com/people/586348" rel="nofollow noopener" title="This link will take you away from steemit.com">Bihu</a></sub>
