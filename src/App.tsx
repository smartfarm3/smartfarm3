import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "../public/css/index.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Taglist from "./pages/Taglist";

// import Home from "./pages/Page_Home";
// import Sub from "./pages/Page_Sub";
// import Footer from "./pages/Footer";

const App = () => {
    return (
        <div className="grid place-items-center">
            <Header />
            <Taglist />

            <Footer />

            
        </div> 
    );
};

export default App;