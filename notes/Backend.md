# Node.js

We use node to run our javascript outside our browser console. 

## npm

It is a package manager for node.js

## npm init

* use this command before adding any package into your project.
* This will add a package.json file to your project.

## npm install <package name>

* To install a package.
* Use **--save** flag to save your package into the package.json file. 

## require("<package name>")

* To add a npm package into your js file.

* Always save into a variable.

  ```js
  var express = require("express");
  ```

  Also save this function into a varible to initiate it later.

  ```js
  var app = express();
  ```

# Express

Its a js backend framework.

## <=Routes =>

## app.get( )

* To make a get request.

* It accepts two arguments(path and a function).

  ```js
  app.get("/", function (request, response) {
  	response.send("Hi there!");
  })
  ```

  This will display Hi there!  on screen when we go to the root of our app but first we need app.listen for this.

  ## app.listen( )

  * To listen requests made by routes.

  * We need to provide a port to listen on.

    ```js
    app.listen(3000);
    ```


## "*" path

* If our app recieves any request from undefined routes, then It'll follow this path.

* We can show some error message by using this.
* Always put this route at the end of other routes.

```js
app.get("*", function(req, res) {
    res.send("Wrong Address!!")
})
```

## Route Parameters

Also called Route Variables

```js
app.get("/:name", function(req, res) {
    var name = req.params.name;
    res.send("Hello " + name)
})
```

N.B :-- We can only use res.send one time so we can't use it in a loop.

## res.render( )

To render HTML  ejs file.

```js
app.get("/", function(req, res) {
	res.render("home.ejs"); 
})
```

* To remove .ejs , we need to tell our express app that ejs is our default file system.

  ```js
  app.set("view engine", "ejs");
  ```

# .ejs        

* Embeded javascript with html. 

* Make a **views** directory inside your project folder.

* create ejs files in that directory.

* We can make our page dynamic by this.


## ejs tags

1. <%       %>

   It'll just run the code, for control flow and logic.

   ```js
   <% if(girlName === 'B') { %>
   	<h1>Good choice</h1>
   <% } else { %>
   	<h1>Bad choice</h1>
   <% } %>
   ```

   

2. <%=      %>

   * Outputs the value into the template (HTML escaped)
   * If we want our line or word of code to display inside our html file then we use this.

## misc

* We can use css link tag inside ejs file.

* Good practice is to put .css file into public folder.

* Then in app.js

  ```js
  app.use(express.static("public"));
  ```

* By doing this, express will serve the contents of .css file.

## Partials

* We use these to make boilerplate templates to include them into our ejs pages.

* This will save alot of time since we don't have to write them again and again.

* mkdir views/partials

* inside partials dir, touch 2 files header.ejs and footer.ejs

* ```js
  <!DOCTYPE html>
  <html>
  	<head>
  		<title></title>
  	</head>
  <body>   //Add this to header file.
  ```

* ```js
  </body>
  </html> //Add this to footer file.
  ```

* To include this into your pages, 

  ```js
  add on the top
  <%include partials/header%>
  on the bottom
  <%include partials/footer%>
  ```

  # app.post( )

  * We are using a post route when we want to add data to our database. For eg. * sending signup info , * creating new comment.

  * ```js
    app.post("/addfriend", function(req, res){
    	res.send("It's a post route")
    })
    ```

  * In our ejs file, If we wanna post something using forms 

    ```js
    
    ```

  * **We then need body-parser to extract the entire body portion of an incoming request stream and exposes it on req.body.**

    

    

    

    

    # API

    ## request

    ```js
    var request = require('request');
    request('API_URL', function (error, response, body) {
    	if(!error && response.statusCode == 200) {
    		console.log(body)
    	}
    })
    ```

    

    * Most of api are in JSON format(long string) so we first need to convert them into javascript objects by using body parser.

      ```json
      JSON.parse(body);
      then save into a variable
      var parsedData = JSON.parse(body);
      ```

      