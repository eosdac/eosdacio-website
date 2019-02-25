const { Client } = require('dsteem');
const client = new Client('https://api.steemit.com');

if(!process.argv[2]) {
    console.error(process.argv[0], process.argv[1], 'PERMLINK [AUTHOR=eosdac]');
}

var permlink = process.argv[2]
var author = process.argv[3] || 'eosdac'

var query = {
    tag: '', // This tag is used to filter the results by a specific post tag.
    limit: 5, // This allows us to limit the total to 5 items.
    truncate_body: 1, // This will truncate the body of each post to 1 character, which is useful if you want to work with lighter array.
};

client.database.call('get_content', [author, permlink]).then(result => {
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
