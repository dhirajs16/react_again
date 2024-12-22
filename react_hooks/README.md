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

<hr>

## **useEffect**

## React Component Lifecycle and the `useEffect` Hook

### Introduction to React Component Lifecycle

React components go through several lifecycle stages:

1. **Mounting**: When a component is first rendered (first appear on screen or created).
2. **Updating**: When a component's state or props change.
3. **Unmounting**: When a component is removed from the DOM (removed from the screen).

### Introduction to `useEffect` Hook

- The `useEffect` hook is a powerful tool in React for handling **side effects** and **lifecycle events in function-based components**. 
- It allows you to perform actions after rendering a component, such as fetching data, setting up event listeners, or manipulating the DOM.

### Syntax and Usage of `useEffect`

The `useEffect` hook takes two arguments:

1. **Callback Function**: This is where you place your side-effect logic.
2. **Dependencies Array**: An optional array that specifies which variables the effect depends on. If any of these variables change, the effect will re-run.

```jsx
useEffect(() => {
  // Side effect logic: executes after the first render (after mounting).
  return () => {
    // Cleanup logic: excutes after the removable of component (after unmounting).
  };
}, [dependencies]); //updation logic: re-renders when dependent state is updated.
```

### Common Use Cases for `useEffect`

1. **Fetching Data**:
   ```jsx
   useEffect(() => {
    try {
     const fetchData = async () => {
       const response = await axios.get('https://api.example.com/data');
       setData(response.data);
     };
    } catch(err) {
        console.log("Error:", err)
    }
     fetchData();
   }, []);
   ```

2. **Subscribing to Events**:
   ```jsx
   useEffect(() => {
     const handleResize = () => {
       // Handle window resize event
     };
     window.addEventListener('resize', handleResize);
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);
   ```

3. **Clean-up Tasks**:
   ```jsx
   useEffect(() => {
     const timer = setTimeout(() => {
       // Do something after a delay
     }, 1000);
     return () => {
       clearTimeout(timer);
     };
   }, []);
   ```

### Effect Dependencies

You can control when the effect should re-run by providing a dependencies array. If any of the variables in this array change, the effect will re-run.

### Lifecycle Method Equivalents

- **`componentDidMount` Equivalent**: Use an empty dependencies array to run the effect only once when the component mounts.
  ```jsx
  useEffect(() => {
    // Code to run on mount
  }, []);
  ```

- **`componentDidUpdate` Equivalent**: Include variables in the dependencies array to run the effect whenever those variables change.
  ```jsx
  useEffect(() => {
    // Code to run on update
  }, [var1, var2]);
  ```

- **`componentWillUnmount` Equivalent**: Return a cleanup function from the effect to run when the component unmounts.
  ```jsx
  useEffect(() => {
    return () => {
      // Cleanup code
    };
  }, []);
  ```

## **useEffect with and without empty dependencies array**

When using the `useEffect` hook in React, the difference between providing an empty dependency array (`[]`) and not using any dependency array at all is significant in terms of how the effect is executed.

### Using an Empty Dependency Array (`[]`)

- **Execution**: The effect will run **only once** after the initial render of the component. This is similar to the `componentDidMount` lifecycle method in class components.
- **Purpose**: It is used when you want to perform a side effect that only needs to run once, such as fetching data, setting up a subscription, or manually changing the DOM.
- **Behavior**: Since there are no dependencies, the effect will not re-run on subsequent renders unless the component is remounted.

### Not Using Any Dependency Array

- **Execution**: The effect will run **after every render** of the component. This means it will execute on the initial render and on every subsequent update to the component.
- **Purpose**: This is typically not recommended unless you intentionally want the effect to run on every render. It can lead to unnecessary side effects and performance issues.
- **Behavior**: Without a dependency array, React assumes that the effect depends on all variables in the component's scope. Therefore, it will re-run the effect on every render to ensure it always has access to the latest values.

### Conclusion

- Using an empty dependency array (`[]`) ensures that the effect runs only once, while not using any dependency array causes the effect to run on every render of that specific component. 
- Always specify dependencies to control when the effect should re-run, unless you intentionally want it to run on every render.
- When re-render occurs due to state update of the dependencies array, first the cleanup code is
executed followed by side effect code.
