// import required modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');
const Math = require('mathjs');
const PORT = process.env.PORT || 3000;
const QUOTESFILE = "./public/files/quotes.txt";

// random element from an array
function randomElementFromAnArray(arr){
	let randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex] ? arr[randomIndex] : "no quote for you";
}
// pick random line from a file
function pickRandomLineFromFile(file){
	let content = fs.readFileSync(`${file}`, 'UTF-8', function(err, content){
		if (err) throw err;
		return content;
	});
	return randomElementFromAnArray(content.split("\n"))
}

// create the server
http.createServer( (req, res) => {

	// main page
	if (req.url === '/'){
		fs.readFile('./public/index.html', 'UTF-8', function(err, html){
			res.writeHead(200, {"Content-Type": "text/html"});
			let quote = pickRandomLineFromFile(QUOTESFILE);
			let renderedHTML = Mustache.render(html, {'quote': quote});
			res.end(renderedHTML);
		});
	}else if(req.url.match("\.css$")){
		var cssPath= path.join(__dirname, 'public', req.url);
		var fileStream = fs.createReadStream(cssPath, "UTF-8");
		res.writeHead(200, {"Content-Type": "text/css"});
		fileStream.pipe(res);
	}else{
		fs.readFile('./public/404.html', 'UTF-8', function(err, html){
			res.writeHead(404, {"Content-Type": "text/html"});
			res.end(html);
		});
	}
}).listen(PORT, () => {
	console.log(`server is running on port: ${PORT}`);
});

