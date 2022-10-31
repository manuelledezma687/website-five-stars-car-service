import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Home } from './pages/Home';
import { Privacy } from "./pages/Privacy";
import { Faqs } from "./pages/Faqs";
import { NotFound } from "./pages/NotFound";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/faqs" element={<Faqs/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
);