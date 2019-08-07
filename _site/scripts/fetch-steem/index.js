const { Client } = require('dsteem');
const client = new Client('https://api.steemit.com');


if(!process.argv[2]) {
    console.error(process.argv[0], process.argv[1], 'PERMLINK [AUTHOR=eosdac]');
    return;
}

let [author, permlink] = process.argv[2].split('/');

client.database.call('get_content', [author.replace("@", ""), permlink]).then(result => {
    console.log('---');
    console.log('layout: post');
    console.log('title:  "'+result.title+'"');
    console.log('date:   '+result.created); //last_updated/active?
    console.log('external_link: https://steemit.com'+result.url);
    console.log('---');
    console.log(result.body);
}).catch(err => {
    console.error('ERROR:', err);
});