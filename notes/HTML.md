## Cheat sheet                                                                          

http://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf


- **HTML** provides structure to the content.

**Boiler-plate** 

```html
<!DOCTYPE html>
<html>
  <head>
     <title> <!-- Metadata--> </title>
  </head>
  <body>
  <!--content-->
     <p></p>
  </body>
</html>               
```
## Tips

* Disable chrome autocomplete
`<input autocomplete="off">`

## `<small>` tag

The  **HTML  `<small>`**  **element** represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from  `small`  to  `x-small`.

---
- ALL **METADATA** ELEMENTS GOES INSIDE HEAD ELEMENT.

     Metadata is information about the page that isn't displayed directly on the web page. 
     
----------
## Attribute
```html
<p lang="en-us"></p>
```

Every attribute has a name (lang) and a value (en-us).

## insert image

<img> is a **self closing** tag.

```html
<img src="url or source" alt= "name of the image"/>
```
## Insert Video

Unlike img tag, it has both opening and closing tag.

```html
<video 
src="url or source"
width="value"
height="value"
controls> <!--To give play/pause/stop controls-->
Video not supported <!-- in case browser fail to play the video-->
</video>
```

**SRC** means source code

# Links
## anchor external link 
```html
<a href=”hyperlink or file path” target=”value”>name of link</a>
```

* **href** means Hyperlink Reference.
* target values=_blank(new window or tab>
*  **N.B** Always add rel=”noopener noreferrer”
                          _self( open in same frame)
                         _parent( open in parent frame)
                         _top( open in full body of windows)


## anchoring to relative page

Link relative web-pages within a same website.

```html
<a href="../contact.html">Contact</a>
```


## anchor internal link (within site)

To anchor an internal link, you need to create an “id” first.


```html
For eg.<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h>
```


## Email Links
```html
<a href="mailto:gagankang420@gmail.com">Email Kang<a/>
```
## Turn image to link
```html
<a href="hyperlink"><img src="image hyperlink" alt="image discription"></a>
```
## Nest links 

**within other text elements**
For eg.


```html
<p>Click here to view more <a href="http://freecatphotoapp.com" target="_blank">cat photos</a>.</p>
```

Result:Click here to view more [cat photos](http://freecatphotoapp.com/).


## Dead links

simply change the href or src value to “#”

----------


## Comments
    <!--some data-->

Or **ctrl+/**

## Ordered and un-ordered list
    <ol or ul>
         <li>text</li>
    </ol or /ul>


## Definition Lists <dl>
    <dl>
      <dt>This is definition title </dt>
      <dd> This is definition </dd>
    </dl>
----------
# HTML forms 
- It is a container where we put our inputs.
    ```html
    <form>
     </form>
    ```
    ## Stop page reloading on submit button
    `<form  onsubmit="return  false">`
    

## **Form attributes**
## action 

(submit your input form data to the servers)


```html
<form action="/url-" method="POST">
</form>
```
- action —where you want to submit form-data (Hyperlink)
## method
- method — what HTTP method (GET/POST).
## Input type

About 30 type of inputs we can give.
Example: radio, text, password, color etc.

## Text field 

self closing (like img)

```html
<input type =”text”>
```


## Placeholder 

(text inside the field)

```html
<input type="text" placeholder="theis placeholder text">
```


## Label tag
- Add label to the input boxes.

- Make a small container.

- Better accessibility.
  
    ```html
    <label>
      username:
      <input type="text" placeholder="username">
    </label>
    ```
## ADD accessibility

it is considered as best practice to set a  for attribute on the label element. Also an id attribute should be set inside input element. value of for = id. This practice is must for assistive technologies.

```html
<label for="username">Username:</label>
<input id="username"> type="text" placeholder="username"> 
```


## Form Validation
* make text fields require to fill before submitting the form.
    ```<input type="text" required>```
* We can also change the data type.
    ```<input type="email">```
    
## submit button
```html
<button type="submit">name of the button</button>
                 or
 <input type="submit">                
```
----------
## **Radio buttons**
- enable users to choose one answer out of multiple options.
- They are type of input.
- Each button is nested inside its own Label element.
- All buttons should have same name attribute to make them interrelated.

Example

```html
<label for="indoor">Indoor</label>
  <input id="indoor" type="radio" name="gamePrefer" value="indoor">
```


​     
```html
<label for="outdoor">Outdoor</label>
  <input id="outdoor" type="radio" name="gamePrefer" value="outdoor">
```


The above example would create two radio buttons named as 

- indoor
- outdoor


## Textarea tag
```html
<textarea>rows="10" columns="10"</textarea>
```
## Checkboxes
- Type of input

- It is similar to Radio buttons.

- There is no need to make relation in name attribute.
  
    ```html
    <label for="love">
      <input id="love" type="checkbox" name="personality"/>
      Loving
    </label>
    ```
## Check by default

just put “checked” inside input element.

```html
<input type="radio" name="test-name" checked>
```
## Select tag
```html
<select name="">
  <option></option>
</select>
```
----------
## <div> tag

The <div> tag defines a division or a section in an HTML document. It is **block-level element.**

## <span> tag

Similar to div tag as it divide text into small pieces. It is an **inline element.**

----------
## <em> <strong> and <blockquote> tags
```html
<!--The reason for using these sementic elements is that other programs,such as screen readers or search engines, can use this extra information. For example, the voice of a screen reader may add emphasis to the words inside the <em> element, or a search engine might register that your page features a quote if you use the <blockquote> element.-->
```

<em> for *italics.*
<strong> for **Bold.**

## <br>tag

Line break
only <br> element without closing tag.
(horizontal-rules) element  insert a horizontal line and used to sectionize a text page.

## <hr> tag
## <b> (Bold tag)
## <i>  (Italics tag)
## <q> (Quote tag)


## Script tags
    E=MC<sup>2</sup>    <sup> is known as superscript.
                    and
    CO<sub>2</sub>      <sub> is known as subscript.


## <ins> and <del> tags
    <p>It was the <del>worst</del> <ins>best</ins> idea
    she had ever had.</p>
    Result: It was the worst best idea she had ever had.
# Create a Table
    <table>
    
    </table>
## Table row
    <table>
      <tr>
      </tr>
    </table>
## Table data
    <table>
      <tr>
        <td></td>
      </tr>
    </table>
## Table Heading
    <table>
      <tr>
         <th scope="col/row">Heading_name</th> 
      </tr>
    <table>
## Span columns         

lets you specify how many columns wide the cell should be, with the default being 1.


    <td colspan="integer-value">name</td>
## Span rows

We use this to indicate they should span more than one table row.

    <td rowspan="value">name</td>
## Table body
    <tbody></tbody>
## Table head
    <thead></thead>
## Table Footer
```html
<tfoot></tfoot>
```

## Table attributes

* border
* bgcolor
* width
* cellpadding
* cellspacing

## Canvas API

Provides a means for drawing graphics via Javascript.

```html
<canvas id="canvas"></canvas>
```

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgxOTc5ODY4MCwtMTAzNzgzNTU1MiwtND
c1NTMzODY2LDIwNzI4Njg2NTksNDUyMTI3NDgzLDIwNjg1ODc4
ODksODA2OTU3ODE5LC0xNzk2NTQ4MDkwLDM3ODM5Nzk2Nl19
-->