import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "./pages/Archive";
import NewItems from "./pages/FrontPage";
import Navbar from "./components/Navbar/navbar";
import SingleItemPage from "./pages/ItemPage";


function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/archive" component={Archive} />
                    <Route exact path="/" component={NewItems} />
                    <Route exact path="/items/:id" component={SingleItemPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;