import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// React Router dom imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Home = lazy(() => import("./pages/Home.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Auth = lazy(() => import("./pages/Auth.tsx"));
const Loading = lazy(() => import("./components/Loading.tsx"));

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
