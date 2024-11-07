# **NOTES**

### **What is a Slice?**

A slice in RTK is a way to organize the state and reducers for a specific part of your application. It bundles together:

1. Name: A unique name for the slice. (string)

2. Initial State: The initial state of the slice. (object)

3. Reducers: Functions that handle how the state should change based on actions. (object)

```javascript

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

```
<hr>

## **Reducers Key in RTK Slice**

The reducers key in an RTK slice is an object where you define these reducer functions. Each key in this object(reducers) represents an action type(increment, decrement & reset), and the value is the reducer function that handles that action.


### **Reducer Function**

Reducers are functions that determine how the state changes in response to an action. They take the `state` and an `action` as arguments and return the new state.

The `state` argument denotes the current state and,

### **The `action` Argument:**
The `action` argument is an object that describes what happened and includes the information (payload) needed to update the state.

### **Components of an Action:**
1. **`type`**: A string that describes the type of action being performed. 
2. **`payload`**: (Optional) Any additional data that the action needs to carry to update the state. This can be any data type: a number, string, object, etc.

### **Example Action Object:**
Here’s a simple example of what an action might look like:
```javascript
{
    type: 'INCREMENT',
    payload: 1
}
```
In this example:
- `type`: 'INCREMENT' indicates the kind of action to be performed.
- `payload`: 1 is the data that might be needed to perform this action.

### **Example in a Reducer:**

```javascript
const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1; // No payload needed here
        },
        decrement: (state) => {
            state.count -= 1; // No payload needed here
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload; // Uses payload to increment by a specific amount
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### **Explanation:**
- **increment**: This action doesn’t need any payload, so it simply increments the `count` by 1.
- **decrement**: This action also doesn’t need any payload, so it decrements the `count` by 1.
- **incrementByAmount**: This action uses `action.payload` to determine by how much to increment the `count`. The payload carries the data needed for this operation.

### **How It Works:**
- **State**: The current state of the part of the state tree managed by this reducer.
- **Action**: The object that describes what happened and contains any necessary data to update the state.

### **Putting It All Together:**
When you dispatch an action like this:
```javascript
dispatch(incrementByAmount(5));
```
The `incrementByAmount` reducer receives the current state and the action object:
```javascript
{
    type: 'counter/incrementByAmount',
    payload: 5
}
```
The reducer then updates the state based on the `payload` and `type`.

<hr>

## **React Event and RTK Action**

### **Events in React:**
- **Events** like `onClick` or `onSubmit` are browser events triggered by user interactions.
- For example, when a user clicks a button, the `onClick` event handler function is executed.

### **Actions in Redux:**
- **Actions** in Redux are plain JavaScript objects that represent an intention to change the state. An action must have a `type` property that describes the kind of action being performed, and it can also carry some data (payload).

### **How They Work Together:**
In a React application using Redux, events and actions work together to manage state changes. Here’s a step-by-step breakdown:

1. **User Interaction**: A user interacts with a UI element, triggering a React event (e.g., `onClick` or `onSubmit`).
2. **Dispatch Action**: The event handler function dispatches a Redux action.
3. **Reducer Handling**: The Redux reducer function processes the action and updates the state accordingly.
4. **State Update**: The updated state is provided to React components, causing them to re-render and display the new state.

### **Example:**
Here's an example combining React events and Redux actions in a button click scenario:

#### **1. Define the Slice:**
```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        }
    }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
```

#### **2. Set Up the React Component:**
```javascript
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(increment()); // Dispatch the increment action on button click
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleButtonClick}>Increment</button>
        </div>
    );
}

export default Counter;
```

### **Explanation:**
- **Event Handling (onClick)**: When the button is clicked, the `onClick` event triggers the `handleButtonClick` function.
- **Dispatch Action**: Inside the `handleButtonClick` function, the `increment` action is dispatched.
- **Reducer**: The `increment` action is handled by the reducer, updating the state.
- **State Update**: The component re-renders with the new state, displaying the updated count.

<hr>

## **useSelect and useDispatch hooks**

### **useSelector**
  - `useSelector` is a function. It's used to retrieve or "select" state from the Redux store. It allows your React component to access specific pieces of state managed by Redux.
  - Example:
    ```javascript
    const count = useSelector((state) => state.counter.count);
    ```
    Here, `count` is retrieved from the Redux store.

- **useDispatch**:
  - `useDispatch` is also a function. It returns the dispatch function, which you can use to dispatch actions to the Redux store.
  - Dispatching an action sends a signal to the store to update the state based on the action type and any payload (data) it carries.
  - Example:
    ```javascript
    const dispatch = useDispatch();
    dispatch(increment());
    ```
    Here, `increment()` is an action creator, and `dispatch(increment())` sends this action to the Redux store, which the reducer then uses to update the state.
