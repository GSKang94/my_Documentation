## Cheat-sheets

https://learn-the-web.algonquindesign.ca/topics/css-selectors-units-cheat-sheet/

https://adam-marsden.co.uk/css-cheat-sheet

## Tips

* Sticky hover state problem on touch screen 
```css
@media (hover: hover)  { 
 button:hover { 
  border:  3px solid green;  
	}  
}
```
* Hide white space on right side of page

  ```css
  body{
      overflow-x: hidden;
  }
  ```

* Remove bullet from ul

  ```css
  list-style-type: none;
  ```


* Increase size on hover

  ```css
  -webkit-transform: scale(1.2);
  ```
* Remove link color
```css
a{
   color:inherit;
}
```
* Hide placeholder on focus
```css
input:focus::placeholder {
	color: transparent;
}
```

## Add border gradient
 ```css
{
   background: linear-gradient(#900c3f, #900c3f),

   linear-gradient(to right, #900c3f, #fa7d09);

   background-origin: padding-box, border-box;

   background-repeat: no-repeat; /* this is important */

   border: 4px solid transparent;
}
```
## Dark mode
HTML
```html
<div class="dark-theme || light-theme">

   <button class="btn-toggle">Toggle Dark Mode</button>

</div>
```
CSS
```css
div.dark-theme {
   color: #eee;
   background: #121212;
}

div.dark-theme a {
   color: #809fff;
} 
```
JS
```js
 //Select the button
const btn = document.querySelector('.btn-toggle');

//Listen for a click on the button
btn.addEventListener('click', function () {
//Then toggle (add/remove) the .dark-theme class  to  the  body
   document.body.classList.toggle('dark-theme');
})
```
## Custom scrollbar
```css
::-webkit-scrollbar {
    height: 12px;
    width: 12px;
    background: #000;
}

::-webkit-scrollbar-thumb {
    background: #393812;
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}

::-webkit-scrollbar-corner {
    background: #000;
}
```
## Disable text selection
`user-select:none;`

## Disable input spinner
```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	 margin: 0;
}
```
## Disable autocomplete
`<form autocomplete="off">`

## prevent submit button page refreshing
`<form onsubmit="return  false">`

## inline style in  HTML

    <p style="color:red; font-size:20 px;">
## style Tag in HTML
- Must be placed inside the head element.


## Link element
- used to link HTML with CSS
- Must be placed inside head tag of HTML
    <link
    href="link to .css file"
    type="text/css"
    rel="stylesheet">


## px,em and rem

essential to learn responsive design.

- **px----** are the hard coded values of size.
- **em----** represents the size of the base font being used. For example, if the base font of a browser is 16 pixels (which is normally the default size of text in a browser), then 1 em is equal to 16 pixels. 2 ems would equal 32 pixels, and so on.
- **rem----** stands for *root em*. It acts similar to em, but instead of checking parent elements to size font, it checks the *root element*. The root element is the `<html>` tag.
    To change root font:
    html {
    font-size: 20px; (16 is default)
    }
- One advantage of using rems is that all elements are compared to the same font size value, making it easy to predict how large or small font will appear. If you are interested in sizing elements consistently across an entire website, the rem measurement is the best unit for the job. If you're interested in sizing elements in comparison to other elements nearby, then the em unit would be better suited for the job.


## Tag name
    p{
     }


## Class
    In HTML
    <p class="brand">sole shoe company</p>
    In CSS
    .brand{
          }
## ID

To select unique elements.


```css
In HTML
<p id="brand">sole shoe company</p>
In CSS
#brand{
 }
```


## !important 

king of all selectors but we need to avoid it.

## main > *

## { This means select everything inside the main class}

# **Specificity**
- Specificity is the order by which the browser decides which CSS styles will be displayed. A best practice in CSS is to style elements while using the lowest degree of specificity, so that if an element needs a new style, it is easy to override.
- To make styles easy to edit, it's best to style with a tag selector, if possible. If not, add a class selector. If that is not specific enough, then consider using an ID selector.
- **!important>inline>id>class>tag**
##                          **Chaining selectors**

We require chaining when HTML element has two or more CSS selectors at the same time.

## Descendant selectors
```css
In HTML
<ul class='main-list'>
  <li> ... </li>
  <li> ... </li>
</ul>
In CSS
.main-list li {
color: blue;
}
```


## Attribute selector

This selector matches and style elements with a specific attribute value.

```css
input [type='radio'] {
  margin: 20px 0px 20px 0px;
}
another example
a[href="http//:www.google.com"]{
color: blue;
}
```


## Adjacent selector
```css
/* I want bold the p element that immidiately come after an image*/
img + p {
font-style: bold;
}
```


## nth of type
```css
/*If I want to select only the third list on the page*/
ul:nth-of-type(3){
background: blue;
}
  Another cool trick
ul:nth-of-type(even){
background: blue;
}
```



## style every other element
    li:nth-child(2n){
      background: black;
    }
## hover effect

change color on hovering on element.

```css
h1:hover{color:blue;}
```


## Change cursor

```css
cursor: copy/or any kind;
```



## focus effect

on input boxes

```css
input:focus{
  background:#fff;
}
```
## Fading effect(transition)
```css
transition: button 0.5s;
```

N.B--- Some browsers don’t support it yet.

```css
FIX
-webkit-transition: background 0.6s;
-moz-transition: background 0.6s;
```
## Transition

This enable us to transition between two states of an element.

## Interesting selector

****    This selector select the visited and un visited links.

a:link{color: red;}
a:visited{color: yellow;}

## Multiple selectors
- To avoid code repetition which will save time.

So instead of this:

```css
h1 {
  font-family: Georgia;
}
.menu {
  font-family: Georgia;
}
```

Write this:

```css
h1, 
.menu {
  font-family: Georgia;
}
```
----------
## CSS Declaration

Example:

    h1 {
      color: blue;
    }

In above declaration, Color is property and blue is value of declaration.

## Viewport
    The viewport is the area of your browser where actual content is displayed - in other words your web browser without its toolbars and buttons. The units are vw, vh, vmin and vmax. They all represent a percentage of the browser (viewport) dimensions and scale accordingly on window resize.
## Opacity (0-1)
    h1 {
      opacity: 0.5;
    }
## Background Image
```css
p {
  background-image: url("#"); or url(relative path);
}
N.B If the image is small, then it will tile across the page. To avoid this we can specify -- 
  background-repeat: no-repeat;
N.B If we want to streach the photo across the whole page, we can specify --
background-size: cover;
Common code-snippet for responsive design:
body {
  background-image: url('#');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```
![](https://d2mxuefqeaa7sj.cloudfront.net/s_30BA4BBBED604306AB4FA41680B21155654D0DAD6F3CC668E98E1E1FCA03C7A4_1533789591058_Screenshot+from+2018-08-08+23-39-15.png)

## percentage%

When percentages are used to size width and height, child elements will be sized relative to the dimensions of their parent.
 **N.B**-- remember that parent dimensions must first be set.

## Scaling images and Videos

To make them more resposive.

    The common code snippet widely used is:
    .container {
      width: 50%;
      height: 200px;
      overflow: hidden;
    }
    .container img {
      max-width: 100%;
      height: auto;
      display: block;
    }
## Height and Width of content
    p {
      height: 80px;
      width: 240px;
    }
## Border
- **Width**---thin,medium and thick.
- **Style**----10 styles eg. none,dotted and solid.
- **color**----140 color keywords.
    p {
      border: 3px solid coral;
    }
## Border-radius
- It modify the corners of element’s border box.

- 100% is a circle.

    ```css
    div.container {
      border: 3px solid rgb(22, 77, 100);
      border-radius: 5px;
    }
    ```
## Padding

**Padding is the space that’s inside the element between the element and the border.**

```css
padding-top
padding-right
padding-bottom
padding-left
padding: 6px 10px 4px 9px; top,right,bottom and left.
padding: 20px 30px; top and bottom.
```
## Margin

Similar to padding just need to understand the concept of margin.
**Margin is the space between the border and next element.**

```css
* In order to center the content in its containing element,
div {
  margin: 0 auto;
}
* We also need to specify the width of the element.
width: 400px;
* Use margin auto with block elements only.
* To center an inline element we can always use text-align:center
```
## Margin Collapse

Horizontal margins (left and right), like padding, are always displayed and added together.
vertical margins do not add. Instead, the larger of the two vertical margins sets the distance between adjacent elements.

## Minimum and Maximum Height and Width
```css
p {
  min-width: 300px;
  max-width: 600px;
  min-height: 150px;
  max-height: 300px;
}
```
## Overflow

property controls what happens to content that spills, or overflows, outside its box.

- **Hidden**-Any overflow content will be hidden.
- **scroll-**A scrollbar will be added to the overflow content.
- **Visible**-It is default and overflow content will be display outside containing element.
    p {
      overflow: scroll; 
    }
## Resetting defaults / Normalize

It should be my first CSS rule.
It’ll give me a clean slate to work on.

```css
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
   box-sizing: border-box;
   scroll-behavior:smooth;
}
```
## Visibility
```css
.future {
  visibility: hidden; or visible;
}
```
## The New Box-Model
- In the default box model, box dimensions are affected by border thickness and padding.
    ```css
    {
    box-sizing: border-box; (content-box is default)
    }
    ```
----------
## Position

```css
To fix nav-bar at top:
position: sticky;
top: 0;
```



```css
Value: Static(default)    
            Relative                            top: 50px;
            Absolute                            left: 20px;
            Absolute            In the above code, the element will move               Fixed                       down 50px and move right 20px
            inherit
```



* **Relative**: (The element will move relative to its default position.)
  * It limits the scope of absolutely positioned child elements. Any element that is a child of the relatively positioned element can be absolutely positioned within that block. 
  * [CSS Tricks](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/#relative)

* **Absolute**: locks the element in place relative to its parent container.
              Parent position :relative;

  ​         [CSS Tricks](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/#relative)

* **Fixed**: locks an element relative to the browser window and the element  wont move while scrolling.

  

## Z-index

-  property specifies the **stack order** of an element.
-  An element with greater stack order is always in front of an element with a lower stack order.
    z-index only works on positioned elements 
    z-index accepts integer value.


## Box-shadow
****
**This property applies one or more shadow to an element.**

```css
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```
## Inline and block-level 

```<u>, <em>,<strong>``` are inline elements.They take little space.

 div   is a block-level element. They take width of their container.


    display: block; (This will force inline elements to display as block)
## Inline-block elements

We can specify the height and width of these elements.

## Float
- If we want to move the element far left or right in the page.

- It will remove any margin between elements.

- Works on static and relative position.

- We must specify the width of the element.

- We can use this to wrap text around an image.
  
    ```css
    float: right or left or none
    ```
    
    ## clear

When we use the clear property, often elements bump into each other, so  we use this.
Clear: left or right or both or none;

----------
## Color
```css
h1 {
  color: red;
  background-color: blue;
}
```
## Hex colors
```css
color: #000; (for black)
```
## RGB colors
```css
color: rgb(139, 69, 19);
```
## HSL Colors
```css
color: hsl(240, 100%, 80%);
```
## Opacity or Alpha
```css
opacity: 0.8;
color: rgba(139, 69, 19, 0.6);
background-color: hsla((240, 100%, 80%, 0.1);
```
----------
# Variables

```css
## Declaring a variable

element {
  --main-bg-color: brown;
}
                       <=OR=>
:root {
  --main-bg-color: brown;
}

## Using the variable

element {
  background-color: var(--main-bg-color);
}
```



# Typography

The art of arranging text on a page.

## Font-family
- Default is Times New Roman.
- Limit the number of typeface used on a web page to 2 or 3, this helps the page load faster and is a good design decision.
- When a typeface name consists of more than one word, enclose them in quotes.
    h1 {
      font-family: "Courier New";
    }
## Fallback Font (Plan B)
    h1 {
      font-family: "Garamond", "Times", serif;
    }
## Linking Fonts
- Link fonts to the online available source.
- Google fonts.
- Put link in the <head> element.
    <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700" rel="stylesheet">


## @Font Face
- Enter the above link in the URL bar of browser and copy the rules labeled under “latin”.
- Paste these rules on the top of CSS.
## @Font Face II

Local fonts can be added to a document with the `@font-face` property and the path to the font's source.

## Font-size
    p {
      font-size: 18px;
    }


## em
    em is a unit of size and it is relative to its parent element.
## Font-weight I
    p {
      font-weight: bold or normal(default);
    }
## Font-weight II
    font-weight: 100 to 900; (only multiples of 100.)
    400 is default value.
    700 is bold.
    300 is light.


## Text-Shadow
    text-shadow: 1px(offset-x) 1px(offset-y) 1px(blur-radius) black(color);
## Font Style
    font-style: italic or normal;


## Style only first letter
    p:first-letter{
    font-size:50px;
    }
## Word Spacing
    word-spacing: 0.25em(default)     Unit is "em"                        0 to 1em;
## Letter Spacing (Kerning)
    letter-spacing: 0.3em;


## Line Height
```css
line-height: 1.2 is the absolute value and line spacing                   will adjust according to font-size.
It can be any value in %, px, rems or ems.
```


## Text Transformation
```css
text-transformation: uppercase or lowercase or capitalize;
```
## Text-align
```css
h1 {
  text-align: justify/right/center/left;
}
```


## Text-decoration
```css
text-decoration: line-through;
                 underline;
				  and many more.
```
## Transform

* We can scale an element with this.

* This property also lets us rotate,scale,skew or translate an element.

```css
transform: rotate(0.5turn);
//This will rotate an element upside down.
```

# Grid

Resource=> https://learncssgrid.com/

To set up a grid, we need both **grid container** and **grid items** 
In HTML

```css
 <div class="grid">
    <div class="box a">Grid Item A</div>
    <div class="box b">Grid Item B</div>
 </div>
```

in CSS file. Then set

```css
.grid {
  display: grid; or inline-grid;
  border: 2px blue solid;
  width: 400px;
  height: 500px; 
}
```
## Grid Template columns
```css
grid-template-columns: 20% 50px
Above code says make 2 columns with width of 20% and 50px.
We can do mix n match
```


## Grid Template Rows
```css
grid-template-rows: 20% 50px
Above code says make 2rows with height of 20% and 50px.
```


## Grid Template
```css
grid-template: 200px 300px / 20% 10% 70%;
                (row)          (column)
```


## Fraction(fr)
- This property is used to prevent overflowing and make it easy to divide.
    grid-template: 1fr 1fr 1fr / 3fr 50% 1fr;
                  (1/3)(1/3)(1/3)


## Repeat
```css
Instead of writing this:
grid-template-columns: 100px 100px 100px;
We can do this:
grid-template-columns: repeat(3, 100px);
And also
grid-template-columns: repeat(5, 1fr)
```


## Minmax

It adjusts our column elements when we resize the browser.

```css
grid-template-columns: 100px minmax(100px,200px) 100px;
```


## Grid Gap

Property to put blank space between rows and columns. 

```css
grid-gap: 20px 10px;
```
## Grid-row-start/end (To span)

**N.B**-- always count lines not actual columns.
**N.B**—Its value can be negative.

```css
grid-row: 5 / 7;
```
## Grid-column-start/end
```css
grid-column: 2 / 4;
    or       2 / span 2;
```
## Grid-area
```css
grid-area: 5 / 2 / 7 / 4
       (grs)(gcs)(gre)(gce)
```

# Flexbox

[FreecodeCamp cheatsheet](https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/)

![img](https://cdn-images-1.medium.com/max/1250/1*UJ54WLMke5RQ4gZcFDxTvQ.png)

Complete guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/


```css
 <div class="container">
    <div class="box a">box Item A</div>
    <div class="box b">box Item B</div>
 </div>
 
 .container {
 display: flex; | inline-flex(je appa sirf content de around box nu wrap krna tan ja kehlo ki khali space nu remove krn vaste.)
 height: 100vh;(ehde nal flexbox poore page te fail jauga)
}
```


## Flex-direction
```css
flex-direction: column; | row (default) | column-reverse | row-reverse
```


## Flex-wrap

By default, flex items will all try to fit onto one line. So to change this behavior, we use this property.

```css
flex-wrap: nowrap | wrap | wrap-reverse;

* nowrap (default): all flex items will be on one line
* wrap: flex items will wrap onto multiple lines, from top to bottom.
* wrap-reverse: flex items will wrap onto multiple lines from bottom to top.
```


## flex-flow

short-hand for f-direction and f-wrap

```css
flex-flow: row-reverse wrap;
```
## Order 
```css
order : <integer>; /* default is 0 */
```

By default, flex items are laid out in the source order. However, the `order` property controls the order in which they appear in the flex container.

## Justify-content

Element alignment along the **main axis.**

## Align-items

Element alignment along the **Cross axis.**

## Align-content

This aligns a flex container's lines within when there is extra space in the **cross-axis**, similar to how `justify-content` aligns individual items within the main-axis.
**N.B--** Only  work with the multiple lines of code.
It determines the spacing between lines, while `**align-items**` determines how the items as a whole are aligned within the container. When there is only one line, `**align-content**` has no effect.

## Align-self

This allows the default alignment to be overridden for **individual** flex items.

    align-self: auto | flex-start | flex-end | center | baseline | stretch;


## flex-basis

To set the width of individual item.
This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. 


## flex-grow

decide how to deal with the extra space available. 

## flex-shrink

if item 1 has a value of 5 and item 2 has a value of 1 , it means upon decreasing size of the box, first item is gonna shrink 5 times more than the later one.

## flex

To divide the space with flex items.
It is also the short-hand of above 3.

```css
flex: 1 1 auto;(default); or just 1
flex: 1 2 300px;
```


# Media Queries

With media queries, CSS can detect the size of the current screen and apply different CSS styles depending on the width of the screen.

```css
@media only screen and (max-width : 480px) {
  body {
  font-size: 12px;
  }
}
This means, when the device is screen, and the max screen width is 480px, only then change the font-size of body element.
```

```css
                                 CHEATSHEET
@media only screen and (min-width: 320px) and (max-width: 479px) {
    code
  }

@media only screen and (min-width: 479px) and (max-width: 979px) {
   code
}
```



## range

```css
@media only screen and (min-width: 320px) and (max-width: 480px) {
    /* rule set for 320px - 480px */
}
```


## operators
- and ---> code applies when all conditions after ‘and’ operator are met.
- ,------- it is an ‘OR’ operator opposite to and.


    @media only screen and (min-width: 480px), (orientation: landscape) {
    
    }


## Orientation

The `orientation` media feature detects if the page has more width than height. If a page is wider, it's considered `landscape`, and if a page is taller, it's considered `portrait`.


## Breakpoints
## element: first-of-type
```css
to select the first element among many.
div:first-of-type {
}
```

# Animation

[Full Lession](https://thoughtbot.com/blog/css-animation-for-beginners)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA0NDYzOTkzMywtMTM3NDI3Njg3NCwtND
MyMTY4NTY1LDEwNTExODA5MjksLTc4MDg5MTE1OSwtNzgwODkx
MTU5LC0yMDMzODQzMTc2LDE2MzE1MzQxNTAsLTM3MzA1ODMyNC
wtMTAxNzcxODAxNSwtMTYzNDI4NzMyNCwtMTY1NTMwMDMwMSwx
MDMzMTU2NDMsLTEyOTg5MTA2Nl19
-->