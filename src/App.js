import React from "react";
import {
    BrowserRouter as Router, // Import BrowserRouter with an alias
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

// Use BrowserRouter here
const BrowserRouter = createBrowserRouter({
    routes: [
        {
            path: "/",
            element: (
                <div className="App">
                    <Header />
                    <Main />
                    <Description />
                    <Footer />
                </div>
            ),
        },
        {
            path: "/main",
            element: (
                <div className="App">
                    <Header />
                    <Main />
                    <Description />
                    <Footer />
                </div>
            ),
        },
        {
            path: "/contacts",
            element: (
                <>
                    <Header />
                    <Contacts />
                    <Footer />
                </>
            ),
        },
        {
            path: "/advices",
            element: (
                <>
                    <Header />
                    <Care />
                    <Footer />
                </>
            ),
        },
        {
            path: "/catalog",
            element: (
                <>
                    <Header />
                    <Catalog />
                    <Footer />
                </>
            ),
        },
        {
            path: "/delivery",
            element: (
                <>
                    <Header />
                    <Delivery />
                    <Footer />
                </>
            ),
        },
    ],
});

function App() {
    return (
        <Router>
            <RouterProvider router={BrowserRouter} />
        </Router>
    );
}

export default App;
