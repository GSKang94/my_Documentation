## Documentation

https://api.jquery.com/

## Selecting Elements

### $(“”)
- It is very similar to querySelectorAll in vanilla.

    ```js
    $("img") //to select all img tags.
    $(".sale") //to select elements with class sale.
    $("#bonus") //to select elements with id bonus.
    $("li a") //to select all anchor tags inside li element.
    ```


## .CSS(property,value)
```js
$("#special").css("border", "2px solid red");
```


## .CSS(object)

We can pass an object with styles into .css

```javascript
var styles = {
  backgroundColor : "pink",
  fontWeight : "bold"
}
$("#special").css(styles);
         or
$("#special").css({
  backgroundColor : "pink",
  fontWeight : "bold"
});     
```


## Select first or last element
```js
$("img:first-of-type")
$("img").last()
```


## nth-of-type
```js
$("img:nth-of-type(2)").attr('src', 'new-source')
this will select the second image.
```
# Methods
## .text()
- Similar to textContent in vanilla js.
- It  selects and update the text of elements.
    $("h1").text("enter a new text")


## .html()
- Similar to innerHTML of vanilla.
- It selects and manipulate the HTML content of elements.
    $("ul").html("<li>new list element</li>")


## .attr()
- Used to manipulate or to get the value of an attribute.
- similar to getAttribute(“”) and setAttribute(“”) in vanilla js.
    $("img").attr("src", "www.google.com")


## .val()
- Used to retrieve or set the value of any kind of inputs or dropdown menus.

    ```js
    $("input").val("Bruktawit")
    $("input").val 
    //"Bruktawit"
    ```


## .addClass, .removeClass, .toggleClass
- Works same as classList.add/remove/toggle.
    To use this, First make a class in css file.
    Then use these methods to use that class in js.
    $("h1").addClass("Big")


# Events
## .click()
- Similar to onclick

    ```js
    $(button).click(function(){
      $(this).css("background", "pink")
    })
    ```
## .on()
- similar to addEventListener in vanilla.

    ```js
    $(button).on("mouseenter", function(){
      console.log("Mouse Enter!!!")
    })
    ```

**N.B--** 

- **click() only add listeners to the existing elements.**
- **on() will add listeners to all the potential future elements.**


## .keypress
```js
$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    alert("You hit enter")
  }
})
```
## .stopPropagation()
- Stops the events from bubbling up.

- That means when we click on an element inside a container, we don’t want the container to listen to that click.

    ```js
    $("span").click(function(e){
        e.stopPropagation();   
    })
    ```
## .parent()
- To get the parent of an element.

    ```js
    $("span").click(function(e){
        $(this).parent().remove();
    })
    ```
## .append()
- To insert content, to the end of each element in the set of matched elements.

    ```javascript
    $("input[type='text']").keypress(function(e){
        if(e.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $("ul").append("<li>" + todoText + "</li>")
        }
    })
    ```
# Effects
## fadeIn, fadeOut, .remove()
```js
$("button").on("click", function(){
  $("div").fadeOut(slow/1000, function(){
    $(this).remove();
  });
});
```

N.B—fadeOut will not remove but it’ll set the display of an element to none.

## fadeToggle
```js
$("button").on("click", function(){
  $("div").fadeToggle(500);
});
```


# **Event listeners on dynamically created elements**

Full Article → https://elliotekj.com/2016/11/05/jquery-to-pure-js-event-listeners-on-dynamically-created-elements/


```js
$(staticParent).on(eventName, dynamicChildSelector, eventHandler)
```


