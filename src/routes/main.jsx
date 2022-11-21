import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from'react-router-dom';


import { Home } from '../pages/Home';
import { Privacy } from "../pages/Privacy";
import { Faqs } from "../pages/Faqs";
import { NotFound } from "../pages/NotFound";
import { Admin } from "../pages/Admin";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/'element={<Home/>} />
            <Route exact path="/privacy" element={<Privacy/>}/>
            <Route exact path="/faqs" element={<Faqs/>}/>
            <Route exact path="*" element={<NotFound/>}/>
            <Route exact path="/admin-backo" element={<Admin/>}/>
        </Routes>
    </BrowserRouter>
);