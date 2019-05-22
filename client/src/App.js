import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "./pages/Archive";
import NewItems from "./pages/FrontPage";
import Navbar from "./components/Navbar/navbar";
import IndividualItems from "./pages/ItemPage";
import userSignUp from "./components/Sign-Up-Btn/sign-up-btn"
import userSignIn from "./components/Sign-In-Btn/sign-in-btn"
function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                
                <Switch>
                    <Route exact path ="/userSignUp" component= {userSignUp} />
                    <Route exact path = "/userSignIn" component = {userSignUp}/>
                    <Route exact path="/archive" component={Archive} />
                    <Route exact path="/" component={NewItems} />
                    <Route exact path="/items/:id" component={IndividualItems} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;