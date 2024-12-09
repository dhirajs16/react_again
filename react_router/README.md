# **React Router Dom**

- **Lesson 1**: setup, different ways to create router.

<hr>

## **Installation**

```bash

npm install react-router-dom

```

## **Methods to declare routes with React Router Dom**

### **Method 1**

`main.jsx` file

```javascript

import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Router dom imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// lazy imports
const Home = lazy(() => import("./pages/Home.jsx"))
const Contact = lazy(() => import("./pages/Contact.jsx"))
const Loading = lazy(() => import("./components/Loading.jsx"))

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '',
      element: (
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      )
    },
    {
      path: '/contact',
      element: (
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      )
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)

```
- **lazy** is a function provided by React that allows you to load components lazily through dynamic imports. This means that instead of loading the entire component tree at once, you can load components only when they are needed.

- **Suspense** is a component that lets you handle the loading state of your lazy-loaded components. It acts as a fallback UI while the actual component is being loaded.


### **Method 2**

`main.jsx` file

```javascript
import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// React Router dom imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Auth = lazy(() => import("./pages/Auth.jsx"));
const Loading = lazy(() => import("./components/Loading.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
      <Route path="contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>} />
      <Route path="auth" element={<Suspense fallback={<Loading />}><Auth /></Suspense>} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

```

`App.jsx` file

```javascript
import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
```

- The `Outlet` component from `react-router-dom` is used to render the child routes of a parent route in a React application