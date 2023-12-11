import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./components/styles/App.css";
import Header from "./components/header/header";
import Description from "./components/desription/description";
import Footer from "./components/footer/footer";
import Main from "./components/main/Main";
import Contacts from "./components/contacts/contacts";
import Delivery from "./components/ delivery/ delivery";
import Care from "./components/care/care";
import Catalog from "./components/catalog/catalog";

const router = createBrowserRouter([
    {
        path: "/",
        element:( <div className="App">
            <Header/>
            <Main/>
            <Description/>
            <Footer/>
        </div>),
    },
    {
        path: "/main",
        element:( <div className="App">
            <Header/>
            <Main/>
            <Description/>
            <Footer/>
        </div>),
    },
    {
        path: "/contacts",
        element: (
            <>
                <Header/>
                <Contacts/>
                <Footer/>
            </>
        ),
    },
    {
        path: "/advices",
        element: (
            <>
                <Header/>
                <Care/>
                <Footer/>
            </>
        ),
    },
    {
        path: "/catalog",
        element: (
            <>
                <Header/>
                <Catalog/>
                <Footer/>
            </>
        ),
    },
    {
        path: "/delivery",
        element: (
            <>
                <Header/>
                <Delivery/>
                <Footer/>
            </>
        ),
    },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;