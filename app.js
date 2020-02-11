const ut = require('./utilities');
const request = ut.promisify(require('request'));
const cheerio = require('cheerio');

let url = `https://www.marathonbet.ru/su/popular/Football?page=0&pageAction=getPage&_=${new Date().getTime()}`;

function sendingReq(url) {
    console.log(`Requesting ${url}`);
    return request(url)
        .then(response => JSON.parse(response.body))
        .then(body => { return body; })
        .catch(err => { if(err) throw err; });
}
