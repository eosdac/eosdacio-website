# Fetch-Steem (Script)

This is a little helper script, which fetches a public (eosDAC) post from the STEEM blockchain and transforms it into a Jekyll post for this static website.

## How to install?
Use the [Yarn](https://yarnpkg.com) package manager, to install the dependencies:

`yarn install`

## How to use?
Use [NodeJS](https://nodejs.org/) to run the script:
```bash
node index.js PERMLINK [AUTHOR=eosdac] > ../../_i18n/en/_posts/yyyy-mm-dd-PERMLINK
```

Example:

```bash
node index.js @eosdac/on-timelines-and-crypto-projects > ../../_i18n/en/_posts/2018-11-10-on-timelines-and-crypto-projects.md
```
