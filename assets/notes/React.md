## Cheat-sheet

- https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/react.js

- http://www.developer-cheatsheets.com/react

React is a library that only takes care of rendering the view while making sure it's in sync with the state.

# Create React App

Zero-configuration setup.

```bash
sudo npm i -g create-react-app
create-react-app app-name
```

It will install:

- Lightweight development server
- Webpack (bundler)
- Babel (transpiler)

It also enables hot module reloading, which means we don't have to re-build and refresh after each change.

### Errors

You appear to be offline. Falling back to the local Yarn cache.

```bash
sudo apt-get remove yarn && sudo apt-get purge yarn

npm config set registry "https://registry.npmjs.org"
```

### Eject

This will permanently add all the abstracted dependencies in `package.json` and the config files will appear. This allows detailed configurations.

```bash
npm run eject
```

# Hello World

```javascript
// React object from module.
import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>; // JSX expression

ReactDOM.render(element, document.getElementById("app"));
```

# JSX

It's syntactic sugar for creating HTML elements with javascript, instead of using templating engines. It's not a string, but an expression.

```jsx
const element = <h1>Hello World</h1>;
```

Babel transpiles it into...

```javascript
var element = React.createElement("h1", null, "Hello World");
```

Since the compiled JSX makes a call to `React.createElement`, we need to import `React`, even if we don't use the object directly.

This returns an `Object`, a React element, which is part of the virtual-DOM.

The call to the function is the reason why we need one parent element, as Babel gets confused with multiple.

# Virtual-DOM

Lightweight in-memory representation of the UI. Instead of re-building the DOM on each change, the virtual DOM sees the changes and it just updates the changed parts in the real DOM.

Whenever the state of the React element object changes...

- React gets a new React element.
- Compares it to the previous one to see the changes.
- Update just the changed parts in the real DOM.

The DOM updating is done by the `render()` method in the `react-dom` module. It takes the object returned from JSX and renders the HTML inside the referenced div.

# Components

A piece of UI. A javascript class that has some state to be displayed and a render method.

**counter.jsx**

```javascript
import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div>Counter</div>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

**index.js**

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/counter";

ReactDOM.render(<Counter />, document.getElementById("root"));
```

# State

* **To remember things, components use state.**

* `setState` is used for updating the state AND re-rendering the view i.e. syncing the DOM with the virtual DOM.
* The method takes an object, and merges or overwrites the state object with it.
* If we update the state directly, React is unaware of the change, and nothing is rendered.

# Events

The event naming convention is to prefix the function with `handle`.

```javascript
class Foo extends Component {
  handleSomething() {
    console.log("Something handled");
  }

  render() {
    return <button onClick={this.handleSomething}>Do something</button>;
  }
}
```

## Binding this

`onClick={this.handleSomething}` results in `undefined`, because `this` references the global object and React runs in `strict mode`.

### Arrow function

```javascript
class Foo extends Component {
  state = {
    bar: "bar",
  };

  handleSomething = () => {
    console.log(this.state.bar);
  };

  render() {
    return <button onClick={this.handleSomething}>Do something</button>;
  }
}
```

### bind()

Since we cannot use `onClick={this.handleSomething("value")}`, we need to use an arrow function.

```javascript
class Foo extends Component {
  state = {
    bar: "bar",
  };

  handleSomething() {
    console.log(this.state.bar);
  }

  render() {
    return (
      <button onClick={this.handleSomething.bind(this)}>Do something</button>
    );
  }
}
```

## Event arguments

```javascript
class Foo extends Component {
  state = {
    bar: "bar",
  };

  handleSomething = (argument) => {
    console.log(argument);
  };

  render() {
    return (
      <button onClick={() => this.handleSomething("baz")}>Do something</button>
    );
  }
}
```

# CSS

```javascript
class Foo extends Component {
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    return <div style={this.style}>Some text</div>;
  }
}
```

```javascript
class Foo extends Component {
  render() {
    return <div style={{ fontSize: 30, fontWeight: "bold" }}>Some text</div>;
  }
}
```

## JSX

```jsx
const element = <h1>Hello, world!</h1>;
```

- JSX produces React "elements".

## Elements

- Elements are the smallest building blocks of React apps.

- An element describes what you want to see on the screen

  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

## Default props

- Write it inside your component before render( )

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

```jsx
class  extends React.Component{
    render(){
        return(
        	<div>

            </div>
        )
    }
}
```

```jsx
ReactDOM.render(App, document.getElementById("root"));
```

## React script for CRA

```javascript
npm install react-scnpm install react-scripts@latestripts@latest
```

## propTypes

Type-checking features to verify that components receive props of the correct type.

```jsx
MyComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
//  PropTypes.func part checks that handleClick is a function.
//  isRequired tells React that handleClick is a required property for that component.
```

---

## TIL

- **I can write any Javascript directly between render ( ) and return ( ) method.**
- Write methods before render ( ).
- There is _unidirectional data flow_. State flows in one direction down the tree of your application's components, from the stateful parent component to child components.
- Principle of separating state logic from UI logic is one of React's key principles.

---

## .setstate ( )

- Never modify a React state directly but instead use this method.
- We write methods between constructor & render.

```js
this.setState({
  username: "Gagan",
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

- Sometimes I might need to know the previous state when updating the state.
- But React may batch multiple **setState( )** calls into a single update.
- I can't rely on the previous value of `this.state` or `this.props` when calculating the next value.
- I should pass **setState** a function that allows you to access state and props.
- It guarantees that I am working with the most current values of state and props.

```jsx
//Wrong code
this.setState({
  counter: this.state.counter + this.props.increment,
});
//Do it right
this.setState((state, props) => ({
  counter: state.counter + props.increment,
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

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4MDgxMDk3MTQsLTEwNzkxNTE4NzhdfQ
==
-->