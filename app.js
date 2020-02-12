const cheerio = require('cheerio');
const axios = require('axios');

let url = `https://www.marathonbet.ru/su/popular/Football?page=0&pageAction=getPage&_=${new Date().getTime()}`;

function sendingReq(url) {
    console.log(`Requesting ${url}`);
    return axios.get(url)
        .then(response => console.log(response.data))
        .catch(err => { if(err) throw err; });
}

sendingReq(url);