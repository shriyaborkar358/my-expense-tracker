import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import "./index.css"

import Home from "./views/Home/Home"
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"
import AddTransaction from './views/AddTransaction/AddTransaction';
import Frontpage from "./views/Frontpage/Frontpage"
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/home",
    element: <Frontpage/>
  }, 
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/add-transaction",
    element: <AddTransaction/>
  },
  {
    path: "/footer",
    element: <Footer/>
  },
  {
    path: "*",
    element: <h1>404 not found</h1>
  }
])

root.render(<RouterProvider router={router}/>);
