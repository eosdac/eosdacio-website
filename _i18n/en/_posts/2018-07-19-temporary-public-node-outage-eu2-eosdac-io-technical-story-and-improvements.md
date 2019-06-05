---
layout: post
title:  "Temporary Public Node Outage (eu2.eosdac.io): Technical Story and Improvements"
date:   2018-07-19T19:40:12
external_link: https://steemit.com/eosdac/@eosdac/temporary-public-node-outage-eu2-eosdac-io-technical-story-and-improvements
---
We recently had an issue with one of our public nodes and thought it would be a good opportunity to do a technical write up on our response. At no time was block production compromised as our primary and backup block producing nodes were functioning as expected.

The public endpoints are the only thing public monitoring systems see, so this red line here is because one of our public nodes, eu2, experienced an outage:

https://media.discordapp.net/attachments/437558191753003018/469564971307630602/Capture.PNG

We have a load balancer in front of our public nodes so some requests to eu.eosdac.io worked and some did not. Because the server on the backend was still active (but nodeos was not responding correctly) it still included eu2 in the balancer. This is something we'll be improving in the future with scripts to automatically remove a non-functioning node from our load balancer.

We were alerted of an issue when Leo from <a href="http://monstereos.io/">MonsterEOS</a> messaged us in our Telegram channel:

![](https://cdn.steemitimages.com/DQmWq4jGQBhptvcu7ukELt5GCzZV4wAq9gAZWrQT4isAwEJ/image.png)

They've been using our public endpoints to power their game. We were able to quickly reproduce the problem ourselves:

![](https://cdn.steemitimages.com/DQmXKFjETG89JKqJQYGxC9fpF3iqNv79bFQb9LdTVYyfyNC/image.png)

`NODEOS_UNREACHABLE ` was showing up half the time because eu1 was working while eu2 was not. The data got corrupted with a `bad alloc` issue (something that can happen occasionally with blockchain systems, which we monitor for closely).

We also got a message from Adam in our Discord:

![](https://cdn.steemitimages.com/DQmWGEGzGfRNE4x1i3NUHUdWr526jLpt9CTvGvtperWP3XU/image.png)

Though Michael Yates is currently in Korea for a conference, Rob Allen is in the UK, and Luke Stokes is in the US, we quickly got together <a href="http://discord.io/eosdac">on our discord live chat</a> to assess the situation.

![](https://cdn.steemitimages.com/DQmTi2UQD3BSCAwiZ3njvYpBt6fCX4JKeWW7h5mjnPq4WT6/image.png)

As Rob and Michael worked to remove eu2 from the load balancer, Luke attempted various replay strategies before removing the block data and starting a resync with the correct genesis file:

```
rm -rf data-dir/blocks/* data-dir/state/*
./start.sh --genesis-json genesis.json 
```
<br />
As of this post, we're re-syncing eu2, and it is currently outside of our load balancer. We'll add it back in as soon as it finishes syncing. The load balancer in front of our public nodes gives us the ability to quickly change things up as we upgrade or update our servers and software. Just yesterday we upgraded to `mainnet-1.1.0` and if there was an issue or if that release required a replay, we'd be able to do one server at a time without disrupting the service of anyone using our public node endpoint.

What's unusual about this event (and the only reason anyone noticed prior to us resolving it immediately), is that eu2 had a misconfigured monitoring script.

![](https://cdn.steemitimages.com/DQmVSo5QDLQAyJzFBV5aJ1KNZvzGgd6c8b1V5XticapNwBS/image.png)

Luke has custom monitoring scripts which check the status every minute and send text messages if needed. Unfortunately the file was misnamed on this one server as `checkstatus.sh` instead of `check_status.sh` so no alert came. Michael also has external monitoring configured, but since it was 2am in Korea, the messages he received due to the outage were at first lost in the shuffle (though he responded immediately when messaged in Keybase).

## Things We Improved

1) Fixed the misconfigured monitoring script for eu2
2) Prioritized updating our load balancer to automatically remove nodes that are not giving a correct response code
3) Updated our internal polices and procedures document to include information about adjusting the load balancer and recovering from a corrupted chain

We hope you've enjoyed this behind the scenes look at how our geographically diverse block production team functions together seamlessly and is continuously improving. For more behind the scenes, you might enjoy this look at the <a href="https://www.youtube.com/watch?v=sqbV9I7edGo">First eosDAC Worker Proposal Multi-Signature Payment</a>. You can also join our `5-tech-and-development` channel <a href="http://discord.io/eosdac">on Discord</a> for real-time updates regarding our DAC Toolkit, EOSDAC Token Explorer, and smart contracts to run the DAC including custodian elections. We are currently on track to have working betas for these tools within Q3 as mentioned on <a href="https://eosdac.io/">our site roadmap</a>. If that changes, we'll keep the community updated in Slack, Telegram, and Discord.

![](https://cdn.steemitimages.com/DQmcKUDoDCQ6KzyePAd3tZA2QPi5LBM2pCFqBem7hqUxERT/image.png)

We greatly appreciate the support of those who have invested in eosDAC and understand the value DACs will bring to the world. We on the launch team are getting contacted regularly by organizations around the world who want to consult with eosDAC to learn more about how they can use the tools we're building to create their own DAC. With a solid <a href="https://eosdac.io/operations/#constitution">Constitution</a>, revenue from EOS Block Production, <a href="https://steemit.com/eosdac/@eosdac/eosdac-announces-first-approved-worker-proposals-prioritising-block-production-and-dac-toolkit">active worker proposals</a>, and more, we're very excited about the progress being made. We hope you will join us and participate in adding value to the DAC.

If you have any questions at all, please feel to raise them to the community. We are a community owned block producer and DAC enabler. The value we want is the value we create.

![Screen Shot 2018-06-12 at 11.00.55 PM.png](https://cdn.steemitimages.com/DQmRQWM3QtQ21wddAMCjbVRhB3rM7L4AGWLY9QpNmkXNLps/Screen%20Shot%202018-06-12%20at%2011.00.55%20PM.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/PbQpAJOP6iA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<center><h1>Please vote for eosdacserver</h1></center>

Join <a href="https://eosdac.io/news/#newsletter">our newsletter</a> to stay informed and follow us on your favorite social media platform:

<sub><a href="https://steemit.com/@eosdac" target="_blank">Steemit</a> | <a href="http://discord.io/eosdac" target="_blank">Discord</a> | <a href="https://t.me/eosdacio" target="_blank">Telegram</a> | <a href="https://facebook.com/eosdac" target="_blank">Facebook</a> | <a href="https://twitter.com/eosdac" target="_blank">Twitter</a> | <a href="https://plus.google.com/+eosdac" target="_blank">Google-plus</a> | <a href="https://github.com/eosdac" target="_blank">Github</a> | <a href="https://instagram.com/eosdac" target="_blank">Instagram</a> | <a href="https://linkedin.com/company/eosdac" target="_blank">Linkedin</a> | <a href="https://medium.com/eosdac" target="_blank">Medium</a> | <a href="https://www.reddit.com/r/EOSDAC/" target="_blank">Reddit</a> | <a href="https://www.youtube.com/eosdac" target="_blank">YouTube</a></sub>
