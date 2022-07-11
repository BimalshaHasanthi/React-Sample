import React from "react";
import HomePage from "../pages/Home";
import NotFound from "../pages/Session/NotFound";
import {Routes, Route} from "react-router-dom";


function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='404' element={<NotFound/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
