import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from'react-router-dom';


import { Home } from '../pages/Home';
import { Privacy } from "../pages/Privacy";
import {FaqPage} from "../pages/FaqPage";
import {Success} from "../pages/Success";
import { NotFound } from "../pages/NotFound";
import { Admin } from "../pages/Admin";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/'element={<Home/>} />
            <Route exact path="/privacy" element={<Privacy/>}/>
            <Route exact path="/faqs" element={<FaqPage/>}/>
            <Route exact path="/success" element={<Success/>}/>
            <Route exact path="*" element={<NotFound/>}/>
            <Route exact path="/admin-backo" element={<Admin/>}/>
        </Routes>
    </BrowserRouter>
);