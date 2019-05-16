import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "./pages/Archive";
import NewItems from "./pages/FrontPage";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";
import FullScreenDialog from "./components/Add-Item-Btn/add-item-btn"; 


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