# **Context API**

### **1. Creating the Context**

First, you need to create a context. You can do this using the `createContext` function from React.

```javascript
import React, { createContext } from 'react';

// Create a Context
const MyContext = createContext();
```

### **2. Providing the Context**

Next, you need to provide the context to your component tree. This is done using the `Provider` component that the context object provides. The `Provider` component accepts a `value` prop, which will be passed down to the consuming components.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Create a Context
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const someValue = "Hello, World!";

  return (
    <MyContext.Provider value={someValue}>
      {children}
    </MyContext.Provider>
  );
};

ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById('root')
);
```

### **3. Consuming the Context**

To access the context value in a component, you can use the `useContext` hook. This allows you to consume the context value easily.

```javascript
import React, { useContext } from 'react';
import MyContext from './MyContext'; // Import your context

const MyComponent = () => {
  const value = useContext(MyContext);

  return (
    <div>
      The value from context is: {value}
    </div>
  );
};

export default MyComponent;
```

### **4. Updating the Context**

If you need to update the context value, you can create a state in your provider component and pass the state and the updater function as the context value.

```javascript
import React, { createContext, useState } from 'react';

// Create a Context
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello, World!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
```

Now, in your consuming component, you can access and update the context value.

```javascript
import React, { useContext } from 'react';
import MyContext from './MyContext'; // Import your context

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <div>The value from context is: {value}</div>
      <button onClick={() => setValue("New Value!")}>Update Value</button>
    </div>
  );
};

export default MyComponent;
```

### **5. Using Context with Class Components**

If you're using class components, you can consume the context by using the `Context.Consumer` component.

```javascript
import React from 'react';
import MyContext from './MyContext'; // Import your context

class MyComponent extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {value => (
          <div>The value from context is: {value}</div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default MyComponent;
```

### **6. Combining Multiple Contexts**

If you have multiple contexts, you can nest providers to combine their values.

```javascript
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Create contexts
const ContextOne = createContext();
const ContextTwo = createContext();

const Provider = ({ children }) => {
  return (
    <ContextOne.Provider value="Value from Context One">
      <ContextTwo.Provider value="Value from Context Two">
        {children}
      </ContextTwo.Provider>
    </ContextOne.Provider>
  );
};

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Consuming multiple contexts
import React, { useContext } from 'react';

const MyComponent = () => {
  const valueOne = useContext(ContextOne);
  const valueTwo = useContext(ContextTwo);

  return (
    <div>
      <div>{valueOne}</div>
      <div>{valueTwo}</div>
    </div>
  );
};

export default MyComponent;
```

### **7. Best Practices**

- **Keep Context Light**: Avoid putting large objects or deeply nested data structures in context.
- **Separate Concerns**: Create different contexts for different concerns instead of having one giant context.
- **Minimize Re-renders**: Be mindful of how frequently context values change, as it can cause re-renders in consuming components.

