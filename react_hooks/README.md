# **React Hooks**

## **useRef**

`useRef()` hook in React, is used to take reference of a dom element or value (like in vanilla javascript `getElementById`) to manipulate that element but unlike `useState()` hook it doesn't re-renders that particular element.

### **Initialization**

The useRef hook can be initialized with a value, like so:

```javascript

const myRef = useRef(initialValue);  //myRef.current = initialValue

```
- `useRef()` can be initialized with a value. It returns an object with a `.current` property that can be initially set to any value.
- Unlike `useState()`, it doesn't re-render that component.
- We can use `useRef()` to store values, but it is not a good practice and that not something, it is created for.