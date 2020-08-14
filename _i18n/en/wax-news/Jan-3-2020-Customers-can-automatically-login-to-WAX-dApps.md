![](https://i.imgur.com/tM0sTGz.png)

Jan 3, 2020


**NEW: Customers can automatically login to WAX dApps with this new WAX Developer Portal quickstart**
=================================================================================================


We’ve added a feature to WAX Cloud Wallet that **allows dApp customers
to automatically log in to their favorite WAX dApps, making it even
faster and easier to start using applications that run on the WAX
Blockchain.**

With the [WaxJS quickstart](https://developer.wax.io/waa/use-waxjs/),
developers can run a simple, secure check that will let customers
automatically sign into the dApp any time they access it.

Before you can start signing transactions from your dApp, a customer
must be logged in. WaxJS includes an isAutoLoginAvailable function that:

-   Securely checks for WAX Cloud Wallet credentials
-   Checks to see if your dApp is whitelisted

If both conditions are true, a customer’s userAccount and public keys
are set in your WaxJS object, and you don’t need to call the login()
function. You’ll also have access to wax.userAccount and wax.pubKeys.

Customers save clicks and time, so they can start using your dApp in
just seconds.

Want to see how it works? See the autologin feature in action
[here](https://developer.wax.io/waa/waxjs-demo/).

![](https://i.imgur.com/uyAyqUf.png)

---

*Visit the [WAX Developer Hive](https://developer.wax.io/) for all our
developer resources, and join our communities to stay up to date on WAX
developments:*

-   [*WAX Developer Telegram Channel*](https://t.me/waxdevelopers)
-   [*WAX Telegram Discussion Channel*](https://t.me/wax_io)
-   [*WAX Telegram Announcements
    Channel*](https://t.me/waxtokenannoucements)
-   *[WAX Twitter](https://twitter.com/wax_io)*