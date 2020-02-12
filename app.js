const cheerio = require('cheerio');
const axios = require('axios');

const url = `https://www.marathonbet.ru/su/popular/Football`;

function loadBetPage(pageNum = 0, acc = [], action = true) {
    if (!action){
        return Promise.resolve();
    }

    return axios.get(url, {
        params: {page: pageNum, pageAction: 'getPage', _: new Date().getTime()},
        headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
        .then(({data}) => {
            if(data){
                const [pageContent, ...properties] = data;
                const hasNextPage = properties[0].val;
                action = hasNextPage;

                if (pageContent){
                    acc.push({pageNum, pageContent: pageContent.content});
                }
                if(hasNextPage){
                    return loadBetPage(pageNum++, acc);
                }
            }
        })
        .catch(err => {
            console.error(err);
            return acc;
        });
}

console.log(loadBetPage());
