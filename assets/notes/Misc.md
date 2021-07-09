# Snippets
### Fetching a api
```js
let api = 'https://jsonplaceholder.typicode.com/users';
async function getInfo() {
  let response = await fetch(api);
  const people = await response.json();
  return people[8].name
}

// fetch(api)
//   .then((response) => response.json())
// .then((data)=>appendData(data))

// function appendData(data) {
//   console.log(data)
// } 
```

### Hamburger menu
```css
<div id="ham-burger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
</div>

#ham-burger {
  display: none;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;

  .line {
    background-color: @secondary-clr;
    height: 3px;
    width: 30px;
    margin: 4px 1px;
  }
}

```

## Nginx
* To test errors in config
 `sudo nginx -t`
 
 * Restart server
 `sudo service nginx restart`
 
 * If failed to start nginx service
  ```
    sudo fuser -k 80/tcp
    sudo fuser -k 443/tcp
 ```
 
* To get ssl certificate

```
1.sudo nano /etc/nginx/sites-available/default  
server_name [example.com](http://example.com/) www.example.com;  
2. sudo apt install python-certbot-nginx -y  
3. sudo certbot --nginx -d [example.com](http://example.com/) -d [www.example.com](http://www.example.com/)
```

* Ports to forward:  
```js
80 for http  
443 for https (Lets encrypt)  
51820 for pivpn (wireguard)
```

* Client-side caching
```js
# after location block
location ~* \.(jpg|jpeg|png|gif|ico)$ {
       expires 30d;
    }
    location ~* \.(css|js)$ {
       expires 7d;
    }
```
* Enable gzip compression

```
gzip on;
   gzip_types application/javascript image/* text/css;
   gunzip on;
```

* Enable http2
```js
    listen [::]:443 http2 
    listen 443 http2
```

## Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server in node.js

```js
npm install -g nodemon
```

To kill all node processes

```js
killall node
```

## Body parser

```json
npm install body-parser --save
```

* To handle `HTTP POST` request in **Express.js** we need to install middleware module called `body-parser`.

* body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.

* Add body parse to our app(require)
* Then write this line:

```js
app.use(bodyParser.urlencoded({entended: true})) 
```

## Curl

To make HTTP request from command line.

## Request

Simplified HTTP request client for node.js

```js
var request = require('request');
request('http://www.google.com', function (error, response, body) {
	if(!error && response.statusCode == 200) {
		console.log(body)
	}
})
```

## Locus

Locus is a debugging module which allows you to execute commands at runtime via a REPL.

## webpack.config.js
```js
const path  =  require('path');
module.exports  =  {
	mode:'production',entry:  './src/index.js',
	output:  {
	filename:  'main.js',
	path: path.resolve(__dirname,  'dist'),
	},
};
```
## Webpack

### Build and watch 
```js
"scripts":  {
	"build":  "webpack",
	"watch":  "npm-watch"
},
"watch":  {
	"build":  {
		"patterns":  [
		"src"
		],
		"extensions":  "js,jsx"
	}
},
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM2MDM2ODA2OCwtNzk2MzQ0OTAwLDgyOD
MyNjY5Nyw2MDMyNDk2NTAsMTYyNzIxNzIzOCwxMzU3NTI0MDU0
LC0xMTA1NDQ4MTYzLC02Njk3OTc3NTksMjA3NDMyMzc2OCwxMD
MwMDM5MzE1LDIwNzA2NzcyMjQsNDg5NjAwNjI0XX0=
-->