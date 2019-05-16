import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "./pages/Archive";
import NewItems from "./pages/FrontPage";
import Navbar from "./components/Navbar/index.js";
import Jumbotron from "./components/Jumbotron";
import FullScreenDialog from "./components/Add-Item-Btn"; 


function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Jumbotron>
                 <h1>Merch Search</h1>
                 </Jumbotron>
               
                <Switch>
                    <Route exact path="/archive" component={Archive} />
                    <Route exact path="/" component={NewItems} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;