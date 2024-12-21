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

After installation, you can import Axios in your React components to make HTTP requests.

#### **GET Request Example**

```javascript
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
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
