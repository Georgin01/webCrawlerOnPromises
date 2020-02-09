const ut = require('./utilities');
const request = ut.promisify(require('request'));

let url = `https://www.marathonbet.ru/su/popular/Football?page=3&pageAction=getPage&_=${new Date().getTime()}`;

function download(url) {
    console.log(`Requesting ${url}`);
    return request(url)
        .then(response => response.body)
        .then(content => JSON.parse(content))
        .then(con => console.log(con[1].val))
        .catch(err => console.log(err));
}

download(url);