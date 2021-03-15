## Cheat-sheet

* https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/react.js

* http://www.developer-cheatsheets.com/react

## JSX

```jsx
const element = <h1>Hello, world!</h1>;
```

* JSX produces React "elements".

## Elements

* Elements are the smallest building blocks of React apps.

* An element describes what you want to see on the screen

  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

## Default props

* Write it inside your component before render( )

```jsx
static defaultProps = {
    <prop_name> :<prop_value>,
    <prop_name> :<prop_value>
}  
  Or anywhere after the component
Component.defaultProps = {
    <prop_name> :<prop_value> 
}
```

## Simple component

```react
class  extends React.Component{
    render(){
        return(
        	<div>
            	
            </div>
        )
    }
}
```

```react
ReactDOM.render(App,document.getElementById('root'));
```

## React script for CRA

```javascript
npm install react-scnpm install react-scripts@latestripts@latest
```

## propTypes

 Type-checking features to verify that components receive props of the correct type.

```react
MyComponent.propTypes = { 
    handleClick: PropTypes.func.isRequired 
}
//  PropTypes.func part checks that handleClick is a function.
//  isRequired tells React that handleClick is a required property for that component.
```

---

## TIL

* **I can write any Javascript directly between render ( ) and return ( ) method.**
* Write methods before render ( ).
*  There is *unidirectional data flow*. State flows in one direction down the tree of your application's components, from the stateful parent component to child components.
* Principle of separating state logic from UI logic is one of React's key principles.

---

## .setstate ( )

* Never modify a React state directly but instead use this method.
* We write methods between constructor & render.

```js
this.setState({
  username: 'Gagan'
});
```

## .bind (this)

A class method typically needs to use the **this** keyword so it can access properties on the class (such as `state` and `props`) inside the scope of the method. 

```jsx
//inside constructor
this.handleClick=this.handleClick.bind(this);
//between constructor & render
handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
//inside render()
<button onClick = {this.handleClick}>Click Me</button>
```

## Better `setState ( )`

* Sometimes I might need to know the previous state when updating the state. 
* But React may batch multiple **setState( )** calls into a single update.
* I can't rely on the previous value of `this.state` or `this.props` when calculating the next value.
* I should pass **setState** a function that allows you to access state and props.
* It guarantees that I am working with the most current values of state and props.

```jsx
//Wrong code
this.setState({
  counter: this.state.counter + this.props.increment
});
//Do it right
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

## Input value

**Scenario:** There is a **input** field on my app and I want to change state by using the **value** of input. Finally, I can render that value on my app.

```jsx
//empty input 
this.state = {
      input: ''
};
//getting input value
handleChange(event) {
    this.setState({
      input: event.target.value
    })
};
//input field
<input value={this.state.input} onChange={this.handleChange}> </input>
//render
<p>{this.state.input}</p>
```

