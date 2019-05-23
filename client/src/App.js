import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "./pages/Archive";
import NewItems from "./pages/FrontPage";
import Navbar from "./components/Navbar/navbar";
import SingleItemPage from "./pages/ItemPage";
import Footer from "./components/Footer/footer";


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
                <Footer/>
            </div>
        </Router>
    )
}

export default App;