// import required modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const loremIpsum = require("lorem-ipsum").loremIpsum;
const Mustache = require('mustache');
const PORT = process.env.PORT || 3000;

// create the server
http.createServer((req, res)=>{
	
	//main url
	if(req.url === '/'){
		fs.readFile('./public/index.html', 'UTF-8', function(err, html){
			res.writeHead(200, {"Content-Type": "text/html"});
			let defaultText = loremIpsum({count: 50, units: "words"});
			let renderedHTML = Mustache.render(html, {'defaultText': defaultText});
			res.end(renderedHTML);
		});
	}else if(req.url.match("\.css$")){
		let cssPath = path.join(__dirname, 'public', req.url);
		let fileStream = fs.createReadStream(cssPath, "UTF-8");
		res.writeHead(200, {"Content-Type": "text/css"});
		fileStream.pipe(res);
	}else if(req.url.match("\.js$")){
		let jsPath = path.join(__dirname, 'public', req.url);
		let fileStream = fs.createReadStream(jsPath, "UTF-8");
		res.writeHead(200, {"Content-Type": "text/javascript"});
		fileStream.pipe(res);
	}else if(req.url.match("/lorem-([0-9]{1,3})$")){
		fs.readFile('./public/index.html', 'UTF-8', function(err, html){
			res.writeHead(200, {"Content-Type": "text/html"});
			let wordsCount = parseInt(req.url.split("-")[1]);
			let defaultText = loremIpsum({count: wordsCount, units: "words"});
			let renderedHTML = Mustache.render(html, {'defaultText': defaultText});
			res.end(renderedHTML);
		});
	}else if(req.url === '/ajax'){
		let body = '';
		req.setEncoding('UTF-8');
		req.on('data', (data) => {
			body += data;
		});
		req.on('end', () => {
			try{
				const data = JSON.parse(body);
				let text = loremIpsum({count: data.count, units: "words"});
				res.write(JSON.stringify({'text': text}));
				res.end();
			}catch(err){
				res.statusCode = 400;
				return res.end(`error: ${err.message}`);
			}
		});
	}else{
		res.writeHead(301, {'Location': 'http://localhost:3000'});
		res.end();
	}

}).listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
})

