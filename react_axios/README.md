# React + Axios
[Installation](https://www.npmjs.com/package/axios) | [Docs](https://axios-http.com/docs/intro) |

<hr>

## Using Axios in a React Project

Axios is a popular HTTP client library used in React applications for making requests to APIs.

### **1. Installation**

```bash
npm install axios
```

### **2. Basic Usage**

It's a better practice to use `axios` with `async` and `await`. However for simple promises one can use `axios.get(url).then(...).catch(...)` code.

#### **GET Request Example**

```javascript
import React, { useState } from "react";
import axios from "axios";

const App: React.FC = () => {
  const [id, setId] = useState<number>();

  // Get all the data
  const getAllData = () => {
    const url: string = "https://fakestoreapi.com/products/";
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error:", err));
  };

  // Add new Data
  const addNewData = () => {
    const url: string = "https://fakestoreapi.com/products/";
    axios
      .post(url, {
        title: "abc",
        price: 99,
        description: "lorem ipsum set",
        image: "abc",
        category: "abc",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error:", err));
  };

  // update data
  const updateData = () => {
    const url: string = `https://fakestoreapi.com/products/${id}`;
    axios
      .put(url, {
        title: "abc",
        price: 99,
        description: "lorem ipsum set",
        image: "abc",
        category: "abc",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log("Error:", err));
  };

  // delete by id
  const deleteData = () => {
    const url: string = `https://fakestoreapi.com/products/${id}`;
    axios
      .delete(url)
      .then((res) => console.log(res))
      .then((err) => console.log("Error:", err));
  };

  return (
    <>
      <h1 className="text-center text-8xl text-red-600">App</h1>
      <div className="flex flex-col items-center justify-center gap-5 mt-10">
        {/* Get all data: get operation */}
        <button
          className="px-5 py-2 bg-cyan-500 rounded-lg"
          onClick={getAllData}
        >
          Get All Data
        </button>

        {/* Create new data: post operation */}
        <button
          className="px-5 py-2 bg-emerald-500 rounded-lg"
          onClick={addNewData}
        >
          Add New Data
        </button>

        {/* Update data: put operation */}
        <div className="flex gap-3">
          <input
            onChange={(e) => setId(Number(e.target.value))}
            type="number"
            className="px-5 py-2 rounded-lg outline-none"
            placeholder="Enter data id"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-yellow-500 rounded-lg"
            onClick={updateData}
          >
            Update Data
          </button>
        </div>

        {/* delete data: delete operation */}
        <div className="flex gap-3">
          <input
            onChange={(e) => setId(Number(e.target.value))}
            type="number"
            className="px-5 py-2 rounded-lg outline-none"
            placeholder="Enter data id"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-red-500 rounded-lg"
            onClick={deleteData}
          >
            Delete Data
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

```

### **3. Using Async/Await Syntax**

You can also use async/await syntax for more readable code:

```javascript
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default MyComponent;
```

### **4. Creating a Custom Hook for Data Fetching**

To make your code more reusable, you can create a custom hook for data fetching:

```javascript
import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetchData;
```

### **5. Handling Errors**

Always handle potential errors that might occur during the request:

```javascript
axios.get('https://example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

### **6. Lifecycle Hooks**

In class components, you can use lifecycle hooks like `componentDidMount` to fetch data when the component mounts:

```javascript
import React, { Component } from 'react';
import axios from 'axios';

class MyComponent extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get('https://example.com/data')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
  }
}
```

### **7. Headers and Params**

```javascript
axios.get('https://example.com/data', {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Custom-Header': 'Custom Value',
    'Content-Type': 'application/json'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```
### **8. Best Practices**

- **Use Arrow Functions**: In class components, use arrow functions in `then` and `catch` blocks to ensure `this` refers to the component context.
- **State Management**: Store fetched data in state using `setState` to trigger re-renders.
- **Error Handling**: Always handle potential errors to prevent unhandled rejections.
