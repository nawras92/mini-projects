const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const MainHTML = './public/index.html';

http.createServer((req, res) => {

	if(req.url === '/'){
		fs.readFile(MainHTML, 'UTF-8', function(err, html){
			if (err) throw err;
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(html);
		});
	}else if(req.url.match("\.css$")){
		let cssPath = path.join(__dirname, 'public', req.url);
		let fileStream = fs.createReadStream(cssPath, "UTF-8");
		res.writeHead(200, {"Content-Type": "text/css"});
		fileStream.pipe(res);
	}else if(req.url.match("\.js")){
		let jsPath = path.join(__dirname, 'public', req.url);
		let fileStream = fs.createReadStream(jsPath, "UTF-8");
		res.writeHead(200, {"Content-Type": "text/javascript"});
		fileStream.pipe(res);
	}else{
		res.writeHead(301, {'Location': 'http://localhost:3000'});
		res.end();
	}

}).listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
