import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import { NavbarB } from "./components/Navbar/Navbar";
import Home from "./pages/Home";

const Layout = () => {
  return (
    <div className="App">
      <Preloader />
      <NavbarB />
      <ScrollButton />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
