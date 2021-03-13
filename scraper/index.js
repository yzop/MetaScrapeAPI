var express = require('express');
var app = express();
const linkPreviewGenerator = require("./plg");

function addhttps(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "https://" + url;
    }
    return url;
}
app.get('/', async function(request, response)
{
    console.log(request.query.url);
    var url = addhttps(request.query.url);
    response.setHeader('Content-Type', 'application/json');
    if(request.query.url)
    {
        try{
    	var pupargs = ['--no-sandbox', '--disable-setuid-sandbox']
    	const previewData = await linkPreviewGenerator(url,pupargs)
        response.send(previewData);
    }
    catch(error){
        console.log(error)
        response.send(JSON.stringify({
            title:'Shit'}));
    }
    }
    else
    {
        response.send(JSON.stringify({
            title:'Give a URL MF'
        }));
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('Server Started on ' + PORT ));
