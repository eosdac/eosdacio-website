

**IBC Hub AMA: How to make blockchain realize multi-chain interaction **
===================================================================


*This article is translated from the original Chinese publication of the
same date transcribing an AMA with Simon.*

At 15:00 on April 8th, Beijing time, BOSCore developer Simon was a guest
of the BOSCore ecosystem and shared “How the BOS IBC Hub allows the
blockchain to achieve multi-chain interaction”.

![](https://i.imgur.com/RtOAWel.png)


**Introduction** 
================

on 8 April 2020, Katherine from BOSCore started an AMA session with an
announcement about the release of BOS IBC v4.0.0 and proceeded to
introduce Simon Wang to answer questions provided by BOSCore and EOSIO
community members from around the world.

> Today we invited BOSCore developer Simon to answer questions from the
> community and talk with us in detail about the BOS IBC Hub, and what
> the Hub brings to BOSCore and the wider EOSIO ecosystem.

**AMA Question and Answer session.**
====================================

***Q1: What is IBC Hub?***

The IBC Hub implements Token cross-chain switch and relay functions, the
Hub in this context functions as a central token exchange.

![](https://i.imgur.com/ly6CYoy.png)


A star-shaped cross-chain network is realized through the IBC Hub, the
middle chain becomes the Hub Chain, and all the chains are called
parallel chains.

After BOS implements the Hub, Tokens from other parallel chains
connected to BOS can be easily transferred between the connected chains,
such as the EOS mainnet and Telos mainnet. They have already achieved
cross-chain functionality with the BOS mainnet. With the deployment of
the Hub, you can transfer from EOS to any destination account on the
Telos mainnet without requiring a BOS account, as the hub acts
independently enabling seamless transaction throughput to the
destination account.

The IBC Hub protocol is very flexible, you can transfer any registered
Token, from one parallel chain to another parallel chain.

[](https://i.imgur.com/LTOs4RU.png)

***Q2: What is the cross-chain implementation? How to achieve
homogeneous cross-chain?***

In fact, we have answered this question many times, the core principle
is from the bitcoin white paper which mentions “ simple proof of payment
,” known as Simple Payment Verification (SPV).

[boscore/Documentation](https://github.com/boscore/Documentation/blob/master/IBC/EOSIO_IBC_Priciple_and_Design.md)

boscore/Documentation 
---------------------

### This paper introduces the technical principle of IBC, the contracts and ibc\_plugin developed by boscore team. In order… 

#### github.com

At present, Some protocols in the development stage can be said to be
homogeneous cross-chains, E.g, two cross-chain projects Cosmos and
polkadot. The so-called isomorphic interoperability means that the two
chains have the same or similar block header structure and logic, such
as EOSIO , BOSCore, and Telos are isomorphic chains. In fact, BOSCore
and other chains are already quite different in certain core data
structures, so they can achieve 3s LIB. For heterogeneous cross-chains,
special bridges are required, for example, to achieve cross-chain with
the Bitcoin network. In this regard, both Cosmos and polkadot are quite
involved. Heterogeneous cross-chains are generally implemented by
multiple witnesses.

![](https://i.imgur.com/LTOs4RU.png)


***Q3: Cosmos also launched Cosmos Hub some time ago. Is there any
similarity and difference with BOS Hub?***

From the user’s point of view, we have referred to chains connected to
BOS Hub as Parallel chains, Cosmos calls them Zone chains, BOS Hub and
Cosmos Hub both support bi-directional token transfers between connected
chains. Their implementation principles are also very closely based on
light client and SPV proof technology .

![](https://i.imgur.com/LTOs4RU.png)


***Q4: Do you think cross-chain will develop into a standardized
protocol in the future, just like TCP is to the Internet, instead of
relying on a specific chain?***

This is an important issue. At present, it seems that the world of
public chains is still far away. However, due to national guidance and
the participation of some standard-setting agencies in the field of
alliance chains, cross-chain standards may appear earlier.

Existing blockchains have their own data formats and consensus
algorithms, such as bitcoin, ethereum, EOSIO, etc., which are very
different. Therefore, the design of light clients in different chains is
very different. Only when many blockchains use similar protocols can
standards be formed when there are consensus and block data structure
considerations involved.

![](https://i.imgur.com/LTOs4RU.png)


***Q5: Can you introduce the development process of BOS IBC, did v1-v4
have different function iterations? What do you think is the biggest
challenge to achieve IBC V4?***

-   v1 implemented two-way cross-chain between the BOS main network and
    the EOS main network. At that time, the consensus of BOS and EOS was
    pipeline-bft.
-   v2 implements the batch-pbft consensus algorithm that supports BOS,
    which is BOS’s 3s LIB. Token cross-chain speed from BOS to EOS is
    faster.
-   v3 This is a small change. The code adds control to check the relay
    permissions. Because the underlying protocol is modified and it is
    not compatible with the previous version.
-   v4 is the realization of the Hub protocol, and the chain that
    deploys the Hub version contract can be used as a central
    cross-chain exchange, switching and relaying tokens, memo data, and
    so on.

The Hub protocol is based on the original IBC protocol. Because the IBC
protocol itself is designed to be sufficiently complete and flexible, it
is easier to implement the Hub protocol without too much difficulty.

![](https://i.imgur.com/LTOs4RU.png)


***Q6 : The IBC protocol only supports simple value transfer, that is,
sending tokens across chains. When will it support the transmission of
more information, such as cross-chain action interoperability?***

This needs to have enough demand to know how to abstract into a
standard. At present, there are few needs in this regard, so currently
cross-chain token and memo data is supported.

If you have a project that needs this, you can transfer the custom
parameter actions across the chains through the memo string of the
transfer action.

So in this sense, BOS IBC already supports the transmission of more
information and cross-chain action interoperability.

![](https://i.imgur.com/LTOs4RU.png)


***Q7: If someone wants to add their custom tokens to the IBC network,
is it currently feasible? How to set it up?***

Of course, it is very feasible, Tokens need to register to circulate on
each chain, (refer to the GitHub documentation and contact BOSCore) the
IBC team can audit registration and any token can be registered for IBC
circulation.

The audit is to check token parameters and see if there are any errors,
it adds convenience for token holders, and can also prevent the
counterfeiting of tokens. There are many parameters, and submitting
information to the IBC contract requires the permission of the ibc.token
contract, which requires multiple signatures to complete and is also
decentralized in itself.

Any project that would like to add a custom token can start the process
by reviewing the information on github and completing a form to notify
the IBC working group

[](https://github.com/boscore/ibc_contracts/blob/master/docs/Token_Registration_and_Management.md)

[Find the for here](https://docs.google.com/forms/d/e/1FAIpQLScXEupYaDOlSnW6sXW9hBm6285Y2B02UhU6Gh-qMGf9nfs_qQ/viewform?embedded=true)

boscore/ibc\_contracts 
----------------------

### The two blockchains connected by IBC channel are peer-to-peer chains, and IBC supports the transfer of assets from each… 

#### github.com

![](https://i.imgur.com/LTOs4RU.png)

***Q8: All cross-chain communication is completed through Hub as the
central agent. Will this violate the original intention of blockchain
decentralization?***

Good question, we provide a total of two protocols, they are layered:
one is the IBC protocol, and the other is the HUB protocol.

The HUB protocol is based on the IBC protocol, the purpose is to
facilitate the conversion of one token across two chains. The IBC
protocol is a completely decentralized peer-to-peer protocol that can
form an arbitrary mesh structure to form a truly decentralized
cross-chain network. And the HUB protocol is required to realize a token
transfer across any two chains, the concept is switching and routing at
the center of the chain network through to the destination. Cosmos and
polkadot are similar star structures, IBC contract accounts are
ultimately handed over to BP for multi-signature control, and
individuals cannot operate, So it does not violate the original
intention of decentralization.


![](https://i.imgur.com/LTOs4RU.png)


***Q9 : What happens to tokens transferred from one chain to another?
Will it burn on the chain that sends tokens?***

Depends on the specific transfer direction, IBC token contracts on
Parallel chains that issues the original token will not burn tokens
unless it was released back to the native chain from other chains where
it would burn.

For real cross-chains, these tokens do not really cross over in essence
but lock on the native chain, and then generate the same number of
Tokens with the same name on the destination chain. When these tokens
are transferred back to the original chain, they will burn, and then the
original chain will transfer the locked token to the specified account.

Through the IBC protocol , an anchor between tokens is realized, that is
to say, the amount of mobile coins is conserved during the cross-chain
process, just like the conservation of energy.


![](https://i.imgur.com/LTOs4RU.png)


***Q10 : Who charges the fee? Is the network operating the contract or
the block producers?***

Relay charges, because relays promote transactions. The more
straightforward point is that according to the spirit of PoW, the
service fee is only charged for the work. There are many transactions in
cross-chain protocols that require people to push the transactions. We
designed the system so that whoever pushes this transaction will pay the
transaction fee.

**Brainstorming** 
=================

***Q1 : Do the chains connected together need to use the same EOSIO
version?***

No, different chains have their own version numbers, and there may be a
lot of modifications, such as BOSCore.


![](https://i.imgur.com/LTOs4RU.png)


***Q2: Is direct transfer between EOS and Wax allowed?***

After Wax is connected to the BOS Hub direct transfers pass through the
hub completing the transfer of funds between any destination parallel
chain that is configured on the network to accept WAX transfers.

![](https://i.imgur.com/LTOs4RU.png)

***Q3: How long does it take to cross-chain from BOS to EOS? How long
will it take for the two chains to cross the chain after HUB goes
live?***

It is now less than 10 seconds, the Hub is online, and the calculation
method of cross-chain between parallel chains is 3.5 minutes + 10
seconds. 3.5 minutes is an approximate time, this is because other
chains still use pipeline bft; 10 seconds is because BOS has 3s LIB.\#

![](https://i.imgur.com/LTOs4RU.png)


***Q4.1: If BOS is the HUB and two EOSs are parallel chains, EOSA-\>
BOS-\> EOSB, then EOSA and EOSB run a relay node respectively, must BOS
run two relay nodes to connect with EOSA and EOSB ?***

Yes.

***Q4.2: Is it possible for BOS to only run one public relay node?***

No, because different parallel chains belong to different networks, and
the data structure may also be different, so it cannot be done.

![](https://i.imgur.com/LTOs4RU.png)

***Q5: At present, the memo field occupies more when cross-chaining. The
current business needs require the memo to bring business information
when sending a transaction. Is it possible to optimize this?***

The logic of the IBC plug-in is more complicated. You can refer to
net\_plugin. If net\_plugin is connected to multiple blockchain
networks, its complexity will increase exponentially. There is little
room for optimization at the protocol level. If you encounter a length
limitation, we can see how to extend the memo length.

Thank you for reading.

Follow BOSCore 
==============

[Website](https://www.boscore.io/)|
[Twitter](https://twitter.com/Boscore_BOS)|
[Telegram](https://t.me/boscorecommunity) |
[Facebook](https://www.facebook.com/BOSCore.io)|
[Github](https://github.com/boscore)



