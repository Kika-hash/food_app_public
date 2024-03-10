import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Admin from "./pages/Admin";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
children: [
    { index: true, element: <Home /> },
    {
     path: "admin",
       element: <Admin />,
     },
   ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
