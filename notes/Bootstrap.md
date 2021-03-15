https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css


    /This has to be before javascript/
    <script src="https://code.jquery.com/jquery-2.2.4.js"></script>
    
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

If you want your bootstrap styled website to be responsive on mobile then be sure to add the following meta tag to your <head>  element, above the <title>  tag:

<meta name="viewport" content="width=device-width, initial-scale=1">


## Jumbotron
## btn-default

form-group
form-control


## Make navbar
    <nav class="navbar navbar-default">
        <div class="container">
             <div class="navbar-header">
                 <a href="#" class="navbar-brand">Mumbo</a>
             </div>
             <ul class="nav navbar-nav">
                 <li><a href="#">Contact</a></li>
                 <li><a href="#">Info.</a></li>
              </ul>
              <ul class=" nav navbar-nav navbar-right">
                  <li><a href="login.html">Login</a></li>
                  <li><a href="#">Register</a></li>
              </ul>
         </div>
    </nav>

Fix a navbar

    class="navbar-fixed-top/bottom"

invert navbar colors

    class="navbar-invert"
## Grid system

The entire page is divided into **12 equal columns.**

```html
MAKE A GRID
<div class="container">
  <div class="row">
    <div class= "col-lg-4">This is first column</div>
    <div class= "col-lg-4">This is second column</div>
    <div class= "col-lg-4">This is third column</div> 
  </div>
</div>
```

**To make a grid responsive**,

    <div class="container">
      <div class="row">
        <div class= "col-lg-4 col-md-4 col-sm-6">This is first column</div>
        <div class= "col-lg-4 col-md-4 col-sm-6">This is second column</div>
        <div class= "col-lg-4 col-md-4 col-sm-6">This is third column</div>
      </div>
    </div>
- **col-lg-4** means, the grid will take 25% of the container width on a large screen.
- similarly, **col-sm-6** means the grill will take 50% of the container width on small screens.
## Flexbox

This bug can be fixed by adding a class to the div with class of row, name it flex, then make a css rule like so:

      1. .flex {
      2.   display: flex;
      3.   flex-wrap: wrap;
      4. }

