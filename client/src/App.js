import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "./pages/Archive";

function App() {
    return (
        <Router>
            <div>
                <h1>Heads UP</h1>
                {/* <Nav /> */}
                <Switch>

                    <Route exact path="/archive" component={Archive} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;