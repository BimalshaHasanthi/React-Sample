import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Customer from "../pages/Customer";
import Item from "../pages/Item";


function App() {
    return (
        <Routes>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route exact path='/' element={<Dashboard/>}/>
            <Route path='/home' element={<Dashboard/>}/>
            <Route path='/404' element={<NotFoundPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Customer" element={<Customer/>}/>
            <Route path="/Item" element={<Item/>}/>
        </Routes>
    );
}

export default App;
