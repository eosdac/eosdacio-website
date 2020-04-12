EOSIO TOOLS - Mar 25, 2020

EOSIO Release Recap
===================


![EOSIO Software Release
Recap](https://eos.io/wp-content/uploads/2020/03/EOSIO-Software-Release-Recap-1024x585.jpg)

In the interest of community support we continue to patch earlier builds
with various bug fixes and stability updates in parallel with the
releases of our latest builds. 

This article contains a summary of the latest updates for EOSIO, EOSJS,
eosio.contracts, and other developer resources.

EOSIO
-----

### EOSIO v2.0.3

On February 14, 2020 we released EOSIO v2.0.3. Updates introduced in
this version of EOSIO focused on security, stability, and other fixes.

#### Security:

-   [Added](https://github.com/EOSIO/eos/pull/8643) deadline to base58
    encoding

#### Stability:

-   As with EOSIO v1.8.12,
    [initialized](https://github.com/EOSIO/eos/pull/8617) all
    net\_plugin class member variables

#### Other changes:

-   As with EOSIO v1.8.12,
    [introduced](https://github.com/EOSIO/eos/pull/8606) method to skip
    sync from genesis and resume from state tests
-   As with EOSIO v1.8.12,
    [replaced](https://github.com/EOSIO/eos/pull/8612) Travis with
    Github Actions to triple the amount of concurrent jobs
-   As with EOSIO v1.8.12,
    [removed](https://github.com/EOSIO/eos/pull/8633) an unnecessary
    install 
-   [Bumped](https://github.com/EOSIO/eos/pull/8636) script’s macOS
    version check to 10.14 as EOSIO will no longer build on older
    versions

### EOSIO v1.8.12

On February 14, 2020 we also released EOSIO v1.8.12. Updates introduced
in this version focused on stability and other changes.

#### Stability:

-   [Initialized](https://github.com/EOSIO/eos/pull/8616) all
    net\_plugin class member variables

#### Other changes:

-   [Introduced](https://github.com/EOSIO/eos/pull/8605) method to skip
    sync from genesis and resume from state tests
-   [Repl](https://github.com/EOSIO/eos/pull/8611)[a](https://github.com/EOSIO/eos/pull/8611)[ced](https://github.com/EOSIO/eos/pull/8611)
    Travis with Github Actions to triple the amount of concurrent jobs
-   [Removed](https://github.com/EOSIO/eos/pull/8634) an unnecessary
    install

### EOSIO v2.0.2

On February 7, 2020, we released EOSIO v2.0.2. This update focuses on
consolidated security patches, stability fixes, and other changes.

#### Security:

-   [Restricted](https://github.com/EOSIO/eos/pull/8595) allowed block
    signature types

#### Stability:

-   [Modified](https://github.com/EOSIO/eos/pull/8526) internal state to
    reset handshake when a socket is closed prior to asynchronous
    callback to alleviate net\_plugin of any confusion
-   [Now](https://github.com/EOSIO/eos/pull/8546) using post instead of
    dispatch to avoid reentrant calls in strand
-   [Changed](https://github.com/EOSIO/eos/pull/8552) definition of max
    consecutive rejected blocks from 3 to 13, accounting for the drop
    late blocks feature
-   [Fixed](https://github.com/EOSIO/eos/pull/8560) guards for read-only
    modes
-   [Introduced](https://github.com/EOSIO/eos/pull/8561) possible fix
    for occasional [node
    stall](https://github.com/EOSIO/eos/issues/8542)
-   [Reverted](https://github.com/EOSIO/eos/pull/8564) consensus module
    that provided incorrect calculation for delayed starting time on
    production of initial block

#### Other changes:

-   As with EOSIO v1.8.11, introduced
    [two](https://github.com/EOSIO/eos/pull/8571)
    [mechanisms](https://github.com/EOSIO/eos/pull/8578),
    cpu-effort-percent and last-block-cpu-effort-percent, to limit the
    window in which blocks may be produced
-   Reduced data limits on signatures, and introduced recommendation to
    utilize [eosjs v20](https://github.com/EOSIO/eosjs) to generate
    proper signatures as other libraries may be
    [rejected](https://github.com/EOSIO/eos/issues/8534) by nodes
-   As with EOSIO v1.8.11,
    [removed](https://github.com/EOSIO/eos/pull/8555) unneeded check to
    see if a node is building a block
-   As with EOSIO v1.8.11,
    [introduced](https://github.com/EOSIO/eos/pull/8557) a simplified
    on\_incoming\_block check to read-only mode
-   As with EOSIO v1.8.11,
    [expanded](https://github.com/EOSIO/eos/pull/8568) watermark to
    prevent any delegate from ever producing the same slot or earlier
-   [Introduced](https://github.com/EOSIO/eos/pull/8577) the following
    documentation changes:
    -   Removed of \$ from shell codeblocks
    -   Added backticks on proper names
    -   Fixed typos, syntax errors
    -   Removed outdated javascript example and protocol document from
        state history plugin pending further updates
    -   Added [Official Testnet URL](https://testnet.eos.io/) as needed
-   [Modified](https://github.com/EOSIO/eos/pull/8583) read only state
    to allow incoming transactions, facilitating interaction among peer
    to peer relay nodes between block producers and added warning log
    message
-   [Removed](https://github.com/EOSIO/eos/pull/8589) a duplicate log
    message

### EOSIO v1.8.11

On February 7, 2020 we also released EOSIO v1.8.11. This update
introduced patches to promote additional stability and other fixes.

#### Stability:

-   [Changed](https://github.com/EOSIO/eos/pull/8547) process priority
    from low to high for async\_write to reduce latency under heavy
    strain, and scheduled sending sync blocks at low priority to prevent
    peer sync from overloading a node
-   [Introduced](https://github.com/EOSIO/eos/pull/8566) fixes for
    ro/immutable modes
-   [Added](https://github.com/EOSIO/eos/pull/8572) logic for handling
    unlinkable blocks resulting from 1.8.x syncing from 2.0.x peers

#### Other changes:

-   Introduced [two](https://github.com/EOSIO/eos/pull/8507)
    [mechanisms](https://github.com/EOSIO/eos/pull/8574),
    cpu-effort-percent and last-block-cpu-effort-percent, to limit the
    window in which blocks may be produced
-   [Removed](https://github.com/EOSIO/eos/pull/8554) unneeded check to
    see if a node is building a block
-   [Introduced](https://github.com/EOSIO/eos/pull/8554) a simplified
    on\_incoming\_block check to read-only mode
-   [Expanded](https://github.com/EOSIO/eos/pull/8569) watermark to
    prevent any delegate from ever producing the same slot or earlier

### EOSIO v2.0.1

On January 28, 2020 we released the latest build of EOSIO to v2.0.1.
This update focused on security, stability, and other improvements.

#### [Security](https://github.com/EOSIO/eos/pull/8514):

-   As with EOSIO v1.8.10, enhanced security with earlier block
    validation
-   As with EOSIO v1.8.10, improved handling of deferred transactions
    during block confirmation
-   As with EOSIO v1.8.10, reduced the net plugin logging handshake size
    limits

#### Stability:

-   [Removed](https://github.com/EOSIO/eos/pull/8471) block id notify
    feature that caused issues with large numbers of connections
-   [Changed](https://github.com/EOSIO/eos/pull/8472) reports to
    indicate when a validation block produces a different block id
-   As with EOSIO v1.8.10, introduced changes to the handling of [late
    blocks](https://github.com/EOSIO/eos/pull/8496) that makes them more
    likely to be dropped, improving production stability overall
-   As with EOSIO v1.8.10,
    [resolved](https://github.com/EOSIO/eos/pull/8510) a crash on exit
    [error](https://github.com/EOSIO/eos/issues/8450)

#### Other changes:

-   As with EOSIO v1.8.10, updated the [FC
    repository](https://github.com/EOSIO/eos/pull/8430) to eliminate a
    crash in logging
-   [Updated](https://github.com/EOSIO/eos/pull/8435) README.md to fix
    broken documentation links
-   [Identified](https://github.com/EOSIO/eos/pull/8452) an issue with
    Boost installation
-   [Reverted](https://github.com/EOSIO/eos/pull/8457) FC to its proper
    place following a [mistaken
    commit](https://github.com/EOSIO/eos/pull/8452)
-   [Added](https://github.com/EOSIO/eos/pull/8458) a pipeline file for
    testing build script
-   As with EOSIO v1.8.10,
    [forked](https://github.com/EOSIO/eos/pull/8467) to the
    EOSIO/anka-buildkite-plugin repo to reduce attack surfaces
-   As with EOSIO v1.8.10,
    [added](https://github.com/EOSIO/eos/pull/8515) logic to prevent LRT
    pipelines from self triggering

### EOSIO v1.8.10

On January 28, 2020 we also released EOSIO v1.8.10. This update focused
on security, stability, and other changes.

#### [Security](https://github.com/EOSIO/eos/pull/8516) Improvements:

-   Enhanced security with earlier block validation
-   Improved handling of deferred transactions during block confirmation
-   Reduced the net plugin logging handshake size limits

#### Stability Improvements:

-   Updated the [FC repository](https://github.com/EOSIO/eos/pull/8429)
    to eliminate a crash in logging
-   Introduced changes to the handling of [late
    blocks](https://github.com/EOSIO/eos/pull/8495) that makes them more
    likely to be dropped, improving production stability overall
-   [Resolved](https://github.com/EOSIO/eos/pull/8509) a crash on exit
    [error](https://github.com/EOSIO/eos/issues/8450)

#### Other changes:

-   [Fixed](https://github.com/EOSIO/eos/pull/8426) discovery of openssl
    in tester cmake when OPENSSL\_ROOT\_DIR is not set
-   [Added](https://github.com/EOSIO/eos/pull/8454) better sleep
    pre-execute for Anka commands + boost fix
-   [Forked](https://github.com/EOSIO/eos/pull/8469) to the
    EOSIO/anka-buildkite-plugin repo to reduce attack surfaces
-   [Allowed](https://github.com/EOSIO/eos/releases/tag/v1.8.10) for
    aliases of variants in ABI
-   [Added](https://github.com/EOSIO/eos/pull/8520) logic to prevent LRT
    pipelines from self triggering

Contracts
---------

### eosio.contracts v1.9.1

On February 3, 2020 we released eosio.contracts v1.9.1. With this
update, a number of bugfixes and changes were introduced.

#### System Contract:

-   We [identified](https://github.com/EOSIO/eosio.contracts/pull/446)
    and patched a bug in the producer scheduling logic in
    [v1.9.0](https://github.com/EOSIO/eosio.contracts/releases/tag/v1.9.0)
    of the system contract that, when triggered, include a pause in
    payments to block producers, block producer changes, and the closing
    of name auction. A simple update to v1.9.1 resolves this issue.

#### Other changes:

-   [Introduced](https://github.com/EOSIO/eosio.contracts/pull/431)
    logic to retry downloading the CDT binary, updated built/test
    commands to support the new logic, and improved logging output
-   [Switched](https://github.com/EOSIO/eosio.contracts/pull/443) out
    TravisCI in favor of Github Actions
-   [Cleaned](https://github.com/EOSIO/eosio.contracts/pull/436) details
    in annotations to be compatible with mdjavadoc generator

#### Dependencies:

-   It is important to note that, In this update, the eosio.system and
    eosio.bios contracts contained within can only be deployed on an
    EOSIO blockchain following the activation of the
    WTMSIG\_BLOCK\_SIGNATURES consensus upgrade. If starting a fresh
    blockchain, older versions of the eosio.bios contract (v1.7.x or
    v1.8.x) may be used to activate this protocol feature.

EOSJS
-----

### EOSJS v21.0.0-rc2

Another February 7, 2020 release is the [EOS JS
v21.0.0](https://github.com/EOSIO/eosjs/releases/tag/v21.0.0-rc2)
release candidate. This release candidate focuses on enhancing the
elliptic library, introduces new commands as well as the use of minified
files for production environments, and other changes.

#### Elliptic library:

-   Introduced helper functions to perform actions that sign, verify,
    and recovery key signatures

#### Commands:

-   Deprecated table\_key parameter and replaced with index\_position
-   Added yarn build-web command that creates both debug and minified
    files in dist\_web

#### Minified files:

-   Introduced recommendation to use minified files as opposed to debug
    files in production environments to reduce load times on end user

#### Other changes:

-   [Merged](https://github.com/EOSIO/eosjs/pull/649) pull request \#649
    from EOSIO/develop-version-bump to lock versions
-   [Added](https://github.com/EOSIO/eosjs/pull/653) functions from
    eosjs-ecc to PrivateKey/PublicKey/Signature classes to handle format
    conversions and call elliptical functions
-   [Removed](https://github.com/EOSIO/eosjs/pull/656) the Travis CI
    configuration pending future updates
-   [Introduced](https://github.com/EOSIO/eosjs/pull/664) zero padding
    to r and s signatures so they will generate signatures with the
    proper amount of bytes
-   [Fixed](https://github.com/EOSIO/eosjs/pull/666) an issue with an
    invalid symbol
-   [Removed](https://github.com/EOSIO/eosjs/pull/670) certain warnings
    and related documentation
-   [Added](https://github.com/EOSIO/eosjs/pull/672) IMPORTANT.md and
    changed related section in the README.md document
-   [Adjusted](https://github.com/EOSIO/eosjs/pull/676) minified and
    debug files created by yarn build-web to follow new minified file
    convention
-   [Removed](https://github.com/EOSIO/eosjs/pull/675) usages of the now
    deprecated table\_key command
-   [Updated](https://github.com/EOSIO/eosjs/pull/671) documentation to
    properly reference the new doc version

Other Updates
-------------

### Elemental Battles

In addition, on February 7, 2020 we updated the repository for Elemental
Battles, an educational tutorial and card game, to [eosio-card-game-repo
v1.1.10](https://github.com/EOSIO/eosio-card-game-repo/releases).

### Tropical Stay App v1.1.0

We continue to explore innovative approaches to improve account security
on EOSIO. On January 18, 2020, we released [Tropical Stay App to
v1.1.0](https://github.com/EOSIO/tropical-example-web-app/releases/tag/v1.1.0).
The Tropical Stay Example Application provides a guideline for
developers on how to integrate multi factor authentication powered by
WebAuthn with EOSIO web applications. WebAuthn allows applications to
authenticate user credentials by way of hardware devices. This most
recent version of Tropical Stay provides examples on how to set up a
hardware authenticator, such as aYubiKey or an iOS device with TouchID
or FaceID, with WebAuthn to validate account signatures.

Stay Connected
--------------

We are committed to the ongoing improvement of EOSIO software, tools,
and resources. If you would like to offer feedback and work more closely
with our team to improve EOSIO for developers, you can send our
developer relations team an email at
[developers@block.one](mailto:%20developers@block.one).

To keep up-to-date with future announcements, you can also subscribe to
our mailing list on the [EOSIO
website](https://eos.io/#newsletter-signup). We are excited to be
regularly improving the usability of the software for EOSIO developers
as we continue to lay a foundation for the mass adoption of blockchain
technology.

. . .

**Important Note**: All material is provided subject to [this important
notice](https://eos.io/important-notice/) and you must familiarize
yourself with its terms. The [notice](https://eos.io/important-notice/)
contains important information, limitations and restrictions relating to
our software, publications, trademarks, third-party resources and
forward-looking statements. By accessing any of our material, you accept
and agree to the terms of the
[notice](https://eos.io/important-notice/).

