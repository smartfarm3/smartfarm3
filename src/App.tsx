import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "../public/css/index.css";

import Home from "./pages/Page_Home"
import Sub from "./pages/Page_Sub";

const App = () => {
    return (
        <div className="flex justify-around items-top m-3 p-3">
        Template: React + TypeScript + Tailwind
        </div>
    );
}

export default App;