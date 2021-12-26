import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppBar from "./components/AppBar";
import IndexRouter from "./utils/IndexRouter";

const App = () => {
    return (
        <Router>
            <AppBar />

            <IndexRouter />
        </Router>
    );
};

export default App;
