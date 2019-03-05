---
layout: post
title:  "EOS BP Security Statement"
date:   2018-05-28T15:35:36
external_link: https://steemit.com/eos/@eostribe/eos-bp-security-statement
image:  /assets/news/2018-05-28/img.jpg
---
The EOSIO software is both groundbreaking and revolutionary. It has the potential to bring a new era of blockchain applications and create new paradigms in blockchain usability, scalability and governance. Thousands of people, including the people involved in this release, have invested huge amounts of time and money to ensure this potential is realised. This is all culminating in an expected launch of an EOS mainnet on June 2nd/3rd 2018.
<br><br>
However, the EOS mainnet is a unique target for attack. With a year long ICO and so much money raised, large community involvement, huge expectations, it is reasonable to assume that there are malicious detractors who wish it harm. We feel it prudent to consider the nature of possible attacks, and the defenses and procedures expected to be in place against such attacks.
<br><br>
The bootstrap methods implemented in the eos-bios program, result in severe vulnerabilities, allowing any attacker to damage or destroy producer nodes or the entire blockchain. The excessive information about the producer network published directly on the blockchain will allow all types of attack, from protocol injection up to volumetric DDoS attacks.
<br><br>
While it is never possible to perfectly secure any system, it is irresponsible to not create some reasonable defenses. In this message, we detail some of the attacks possible, demonstrate some tested attacks against the insecure boot chain, and then suggest our preferred method of bootstrapping in a more secure manner.
<br><br>
We deeply regret any discomfort and angst caused by this. We have tried to explain the problems and suggest solutions in public and private Telegram chat rooms for over two months. We have encouraged modifications to the proposed automatic bios code. Alas, changes to the security model have not been implemented, and have been actively resisted. We feel that we are left with no choice but to publish a few precise and demonstatable methods of attacking and damaging such a blockchain, and show how to mitigate such risks. If we do nothing, the risk of failure is too large to accept. 
<br/><br>
We did not publish these concerns earlier because we needed to investigate them extensively and verify that they were not just speculations before sharing them to the community. The writing that follows consists of facts supported by evidence.
<br>
<h3>Current insecurities discovered in the eos-bios boot process.</h3>
<br>
Much of the functionality of eosio is provided by plugins. They allow the system to produce blocks, connect to other nodes etc.  The base eosio software includes many plugins. A block producing node should not run any unnecessary plugin on a live network, because some of them allow the chain to be hacked. Some of these plugins should never be exposed on a publicly accessible node.
<br><br>
One particular plugin we have noticed is the <b>net_api plugin</b>, which provides an api which can be used to control the plugin remotely.  If this API is exposed on a public network then anyone with the ability to connect to this network can tell the block producers to disconnect from, or connect to, any other machine. This does not require anything close to a botnet. Without even being a part of the eos-bios network, a mac mini could disconnect every peer in the network.
<br><br>
Allowing this vulnerability on the live network could mean that an attacker can stop the chain from function properly and even partition the nodes so that eventually they stop. 
The Ghostbusters team noticed the vulnerability early on in the design of eos-bios and reported it to EOS Canada but no changes were made.  This is one reason that we cannot support the launch using eos-bios.
<br>
<h3>How to hack a chain knowing one peer node running net plugin</h3>
<br>
Run command: <pre>cleos -u [peer-url] net peers </pre>
<br>
Returns you a list of responses like following for each node:
<pre>
{
    "peer": "",
    "connecting": false,
    "syncing": false,
    "last_handshake": {
      "network_version": 1206,
      "chain_id": "0000000000000000000000000000000000000000000000000000000000000000",
      "node_id": "b92b2b7d8835e46e2fed97f5eebda31faea63fd07cc40ad52f132254f22cac8e",
      "key": "EOS1111111111111111111111111111111114T1Anm",
      "time": "1527171594944050635",
      "token": "0000000000000000000000000000000000000000000000000000000000000000",
      "sig": "SIG_K1_111111111111111111111111111111111111111111111111111111111111111116uk5ne",
      "p2p_address": "reach.me.example.com:9876 - b92b2b7",
      "last_irreversible_block_num": 57,
      "last_irreversible_block_id": "000000391a9439aaa2864d9807965bc84865cdd15c4a0a3d0ae3c7e54a85a38f",
      "head_num": 300,
      "head_id": "0000012c9826a4f37db5e5c8b4790acad70c01188aee8e7b7330790937a93cdd",
      "os": "linux",
      "agent": "\"EOS Example\"",
      "generation": 2
    }
</pre>

Next get a list of peers only: 
<pre>cleos -u [peer-url] net peers | grep peers</pre>

And disconnect each peer:
<pre>cleos -u [peer-url] net disconnect host:port</pre>

One could eventually force the connection to any other peer using, also increasing risks of network instability:
<pre>cleos -u [peer-url] net connect host:port</pre>
<br><br>
<h3>The Recommended Solutions</h3>
<br>
So should we be panicking and throwing out all of our tokens? Definitely not. As much as we have investigated and tested the potential security risks associated with launching the network, we have also experimented and discussed about solutions to the problems above.<br>
<h4>Wireguard Private Mesh Security</h4>
<br>
Given the fact that EOS software has not been securely vetted and BP node stores sensitive producer private keys, we have to take extra measures for securing those producing nodes. 
Ideally no public Internet access should be allowed to BP nodes while allowing meshing between BP nodes. 
Hence we propose using secure peer to peer communication between BP nodes via point-to-point secure tunnels using the open source WireGuard kernel based VPN software.
 <br><br>
Each BP node will have 1 or more full nodes that it establishes secure connection to. Those full nodes will be exposed on open Internet protocol and available for access for overall Blockchain network. BP node should not expose it’s non-VPN IP address to the open Internet access. 
Also for fault-tolerance BP node should establish several trusted connections to other nodes.
<ul><b>Layer 1 (Block Production Layer)</b>
<li> 2 Producers: 1x Producer node & 1x Stand-by node</li>
<li> Producer Control Switch: a machine to monitor and enable failover switching</li>
<li> Layer 1 nodes could be connected to other trusted producer or full nodes via VPN (WireGuard)</li>
<li> Nothing extra installed other than Producer API, whose access is restricted to the producer control switch</li>
​</ul>
<ul><b>Layer 2 (P2P Layer)</b>
<li> Full nodes to relay blocks</li>
<li> Connected to the Layer 1 nodes via direct tunnels (WireGuard)</li>
<li> Securely meshed to trusted BPs via P2P VPN (WireGuard)</li>
<li> Only uses History API and Chain API, restricted to the proxy servers on layer 3</li>
<li> BPs are encouraged to make public full nodes available for external access for example, exchanges, portals, new BPs…</li>
</ul>
<ul><b>Layer 3 (API Layer)</b>
<li> Web servers to support HTTP endpoints</li>
<li> Layer 3 nodes should be pure web firewalls and have no blockchain information</li>
<li> Connected to our Layer 2 Relay nodes via HTTP (wireguard)</li>
<li> Uses Patroneos to prevent against basic DDoS and application layer attacks</li>
 </ul>
<ul><b>Layer 4 (Public Layer)</b>
<li> Global BP Load Balancer (all traffic goes into this single point)</li>
<li> Volumetric Attacks gets handled at ISP level</li>
<li> Routes all HTTPS (SSL) traffic to our Layer 3 web servers</li>
<li> Configured to DNS (optional)</li>
<li> L4 can be as simple as DNS round robin with short TTL.</li>
</ul>
<br>
<h3>Conclusion</h3>
We are 100% committed to launching, and supporting, a stable and resilient EOS mainnet. Given the facts stated above, and insecure nature of eos-bios boot process, our community of BPs is strongly advocating against using at as standard launch procedure as it exposes a complete chain to an attack by anyone. 
<br><br>
We, as a community, consider it our duty to ensure that the EOS mainnet is secure and resilient. Using the eos-bios process will create unnecessary risks for the EOS Blockchain launch and ultimately all EOS token holders. Also, any negative press on insecurities in EOS Blockchain launch or failed attempt to launch the Blockchain will have a negative impact on EOS price and reputation. 
<br><br>
Therefore we believe it will be in all stakeholders interests to bring down any insecure and unstable network, using above methods we have highlighted, before any malicious third party takes advantage of such insecurity. We will simultaneously endeavour to introduce security improvements into launch and operational processes.
<br><br>
The security imperatives cannot be ignored and, given the stakes, must viewed as the paramount consideration.
<br><br>
<ul><b>BP Teams Involved:</b>
<li>Sw/eden</li>
<li>EOS Tribe</li>
<li>HKEOS</li>
<li>EOS Rio</li>
<li>Block Matrix</li>
<li>eosDAC</li>
<li>Eosmeso</li>
<li>AcroEOS</li>
</ul>
