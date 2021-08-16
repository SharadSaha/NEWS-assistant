// Use this sample to create your own voice commands
intent('What can you do for me?','What doesn this app do?','What is your motive?',
      reply('I am your voice assistant! I can bring you news from all over the world!'));

// intent('Start a command',(p)=>{
//     p.play({command:'testcommand'});
// });


const API_KEY="dfbf9fc0a5c545a8b748627916029569";
const SERVICE_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

let final_articles=[];


//Details about a news from sources

question("(what is|Give me|Bring me) the news (from|from the|) $(sources* (.+))" ,(p) => {
    const request_url = `${SERVICE_URL}&sources=${p.sources.value.toLowerCase().split(" ").join("-")}`;
    api.request(request_url, (error, res, body) => {
        if (error || res && res.statusCode !== 200) {
            p.play(`Could not get information`);
            console.log(request_url);
        } else {
            const data=JSON.parse(body);
            if(data.articles.length===0){
                p.play('Try a different source!')
            }
            else
            p.play(`Here are the results!`);
            console.log(request_url);
            console.log(data.articles);
            final_articles=data.articles;
            p.play({command : 'news-sources',data: data.articles});
        }
     
    });
});


// News from different domains

const domains=['general','health','business','entertainment','sports','science','technology'];
const keyword=`${domains.map((domain)=>`${domain}~${domain}`).join(`|`)}`;

question(`Category news about $(C- ${keyword})` ,(p) => {
    const request_url = `${SERVICE_URL}&category=${p.C.value}`;
    api.request(request_url, (error, res, body) => {
        if (error || res && res.statusCode !== 200) {
            p.play(`Could not get information`);
            console.log(request_url);
        } else {
            const data=JSON.parse(body);
            if(data.articles.length===0){
                p.play('Try a different source!')
            }
            else
            p.play(`Here are the results!`);
            console.log(request_url);
            console.log(data.articles);
            final_articles=data.articles;
            p.play({command : 'news-sources',data: data.articles});
        }
     
    });
});


// Get news through search terms

question("My term for you is $(search_term* (.+))" ,(p) => {
    const request_url = `${SERVICE_URL}&q=${p.search_term.value}`;
    
    
    api.request(request_url, (error, res, body) => {
        if (error || res && res.statusCode !== 200) {
            p.play(`Could not get information`);
            console.log(request_url);
        } else {
            const data=JSON.parse(body);
            if(data.articles.length===0){
                p.play('Try a different search term!')
            }
            else
            p.play(`Here are the results!`);
            console.log(request_url);
            console.log(data.articles);
            final_articles=data.articles;
            p.play({command : 'news-sources',data: data.articles});
        }
     
    });
});


