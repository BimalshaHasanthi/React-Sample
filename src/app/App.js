import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";


function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/404' element={<NotFoundPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
    );
}

export default App;
