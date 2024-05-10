import("preline");
// import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import Nav from './Component/Nav.jsx';
import Footer from "./Component/Footer.jsx";
import Side_bar from "./Component/Side_bar.jsx";
import Home from "./page/home.jsx";
import Error from "./page/Error.jsx";
import Login from "./page/login.jsx";
import Singnup from "./page/singnup.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import  Plp from "./page/dynamicpage/plp.jsx";
import Add_prod from "./page/add_prod.jsx";
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const login= true;

const AppLayout = () => {
  console.log(router.routes[0].children);
  let cond =  router.state.location.pathname =='/add' || router.state.location.pathname =='/plp'
  return (  
   <PersistGate persistor={persistor}>
    <Provider store={store}>
    { cond  && <Nav/>}
       <Outlet />
    </Provider>
    </PersistGate>
  );
};

function ErrorAll() {
  return (
    <>
    <Nav/>
    <Error/>
    <Footer />
    </>
  )
  }

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout  />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:'/login',
        element:<Login/>
      }
      ,{
        path:'/sign-up',
        element:<Singnup/>
      },
      {
        path:'/plp',
        element:  <Plp/>,
      },
      {
        path:'/add',
        element:<Add_prod/>

      }
    ],
  },


]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
