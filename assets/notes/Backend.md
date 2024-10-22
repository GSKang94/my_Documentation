# Node.js

We use node to run our javascript outside our browser console. 

## npm

It is a package manager for node.js

## npm init

-* use this command before adding any package into your project.
-* This will add a package.json file to your project.

## npm install <package name>

-* To install a package.
-* Use **--save** flag to save your package into the package.json file. 

## require`("<package name>")`

-* To add a npm package into your js file.

-* Always save into a variable.

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

-* To make a get request.

-* It accepts two arguments(path and a function).

  ```js
  app.get("/", function (request, response) {
    	response.send("Hi there!");
  });
  ```

  This will display Hi there!  on screen when we go to the root of our app but first we need app.listen for this.

  ## app.listen( )

  -* To listen requests made by routes.

  -* We need to provide a port to listen on.

    ```js
    app.listen(3000);
    ```


## "\*" path

-* If our app recieves any request from undefined routes, then It'll follow this path.

-* We can show some error message by using this.
-* Always put this route at the end of other routes.

```js
app.get("*", function (req, res) {
    res.send("Wrong Address!!");
});
```

## Route Parameters

Also called Route Variables

```js
app.get("/:name", function (req, res) {
    var name = req.params.name;
    res.send("Hello " + name);
});
```

N.B :-- We can only use res.send one time so we can't use it in a loop.

## res.render( )

To render HTML  ejs file.

```js
app.get("/", function (req, res) {
  	res.render("home.ejs"); 
});
```

-* To remove .ejs , we need to tell our express app that ejs is our default file system.

  ```js
  app.set("view engine", "ejs");
  ```

# .ejs        

-* Embeded javascript with html. 

-* Make a **views** directory inside your project folder.

-* create ejs files in that directory.

-* We can make our page dynamic by this.


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

   -* Outputs the value into the template (HTML escaped)
   -* If we want our line or word of code to display inside our html file then we use this.

## misc

-* We can use css link tag inside ejs file.

-* Good practice is to put .css file into public folder.

-* Then in app.js

  ```js
  app.use(express.static("public"));
  ```

-* By doing this, express will serve the contents of .css file.

## Partials

-* We use these to make boilerplate templates to include them into our ejs pages.

-* This will save alot of time since we don't have to write them again and again.

-* mkdir views/partials

-* inside partials dir, touch 2 files header.ejs and footer.ejs

-* ```js
  <!DOCTYPE html>
  <html>
  	<head>
  		<title></title>
  	</head>
  <body>   //Add this to header file.
  ```

-* ```js
  </body>
  </html> //Add this to footer file.
  ```

-* To include this into your pages, 

  ```js
  add on the top
  <%include partials/header%>
  on the bottom
  <%include partials/footer%>
  ```

  # app.post( )

  -* We are using a post route when we want to add data to our database. For eg. _* sending signup info , _* creating new comment.

  -* ```js
    app.post("/addfriend", function (req, res) {
      	res.send("It's a post route");
    });
    ```

  -* In our ejs file, If we wanna post something using forms 

    ```js
    
    ```

  -* **We then need body-parser to extract the entire body portion of an incoming request stream and exposes it on req.body.**

    

    

    

    

    # API

    ## request

    ```js
    var request = require("'request"');
    request("'API_URL"', function (error, response, body) {
      	if (!error && response.statusCode == 200) {
        		console.log(body);
 
     	}
    });
    ```

    -

    * Most of api are in JSON format(long string) so we first need to convert them into javascript objects by using body parser.

      ```json
      JSON.parse(body);
      then save into a variable
      var parsedData = JSON.parse(body);
      ```

# Install

```bash
sudo apt install nodejs -y

# Check install
node -v
npm -v
```

# Import / Export

| CommonJS        | ES6    |
| --------------- | ------ |
| require         | import |
| modules.exports | export |

You can't selectively load only the pieces you need with require but with imports, you can selectively load only the pieces you need. That can save memory.

Loading is synchronous (step by step) for require on the other hand import can be asynchronous(without waiting for previous import) so it can perform a little better than require.

- **CommonJS (CJS) format**. Used in Node.js and uses `require` and `module.exports` to define dependencies and modules. _The npm ecosystem is built upon this format_. `exports = module.exports`

```javascript
// lib.js

// Export the function
function sayHello() {
  console.log("Hello");
}

// Do not export the function
function somePrivateFunction() {
  // ...
}

module.exports.sayHello = sayHello;
```

```javascript
let sayHello = require("./lib").sayHello;

sayHello();
// => Hello
```

- **ES Module (ESM) format**. As of ES6 (ES2015), JavaScript supports a native module format. It uses an `export` keyword to export a module’s public API and an `import` keyword to import it.

```javascript
// lib.js

// Export the function
export function sayHello() {
  console.log("Hello");
}

// Do not export the function
function somePrivateFunction() {
  // ...
}
```

```javascript
import { sayHello } from "./lib";
// import * as lib from './lib';

sayHello();
// => Hello
```

# Modules

Instead of writing all the code in one giant file, we can split the code into multiple files called `modules`. Only things that are highly related should go in a module.

This increases maintainability, code reuse and abstraction (blackbox).

**CommonJS** (old) - Synchronous

```javascript
// foo.js module
function foo() {
  return "bar";
}
module.exports.foo = foo;

// index.js use
const { foo } = require("foo");
```

**ES6** - Must use Babel, can be asynchronous

```javascript
// foo.js module
export function foo() {
  return "bar";
}

// index.js use
import { foo } from "foo";
```

Every file in Node is considered a module. Everything declared inside is scoped to the file i.e. they are private.

Node does not give access to the global scope. In order to use the content of a module, we need to export it i.e. make it public.

```javascript
var message = "hello";
console.log(global.message); // undefined
```

## ES6 Modules

A proper format, unlike the CommonJS convention.

```javascript
// add.js
export function add(a, b) {
  return a + b;
}

// index.js
import { add } from "./add";
```

Modules are exported with `export` and imported with `import`. We can export one or more objects from a module.

There are `default` and `named` exports. We use a default export if there is a single object we want to export.

**module**

```javascript
import { Person } from "./person";

// Named export
export function promote() {}

// Default export
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
```

**import**

```javascript
import Teacher, { promote } from "./teacher";

// Default -> import ... from "";
// Named -> import { ... } from "";

const teacher = new Teacher("John", "MSc");
teacher.teach();
```

### Browsers

Must include the `.js` file extension during import.

**circle.js**

```javascript
// Implementation detail, not exported
const _radius = new WeakMap(); // private property

// Public interface i.e. exported part
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius" + _radius.get(this));
  }
}
```

**index.js**

```javascript
import { Circle } from "./circle.js"; // Must include the .js file extension

const c = new Circle(10);
c.draw(); // Circle with radius 10
```

**index.html**

We need to add the module type in order to avoid the `Uncaught SyntaxError: Unexpected token {` error, caused by the `import` curly brace.

```html
<script type="module" src="index.js"></script>
```

## Old formats

Conventions/syntax for defining modules. ES6 natively supports them.

- **CommonJS** - Loads files synchronously.

Since ES5 doesn't support modules, developers came up with different syntaxes to define them. These are only used in legacy applications.

- **AMD** (Browser) - Asynchronous Module Definition.
- **UMD** (Browser / Node)- Universal Module Definition.

### CommonJS (Node)

Two problems:

1. Browsers cannot load files synchronously. This is solved via bundling a huge file including everything, even unused things.
2. JS engine cannot tell what a module exports until it runs it.

```javascript
// add.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// index.js
const add = require("./add"); // Loads synchronously
add(2, 3); // 5
```

CommonJS defines the:

- `module.exports` for exporting modules. It represents the object that is exported from a module.
  - `module` refers to the current module (file).
  - `exports` is an object and property of `module`.
- `require("./module")` for importing modules.

#### Single class export

When we import the `foo.js` module, we directly get the `Foo` class.

```javascript
class Foo {}

module.exports = Foo;
```

#### Multiple class exports

We can import the `exports` objects and access its properties.

```javascript
class Foo {}
class Bar {}

module.exports.Foo = Foo;
module.exports.Bar = Bar;
```

#### Example

**circle.js**

```javascript
// Implementation detail, not exported
const _radius = new WeakMap(); // private property

// Public interface i.e. exported part
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius" + _radius.get(this));
  }
}

module.exports = Circle;
```

**index.js**

```javascript
const Circle = require("./circle");

const c = new Circle(10);
c.draw(); // Circle with radius 10
```      
<!--stackedit_data:
eyJoaXN0b3J5IjpbODIxOTE5MTQ0XX0=
-->