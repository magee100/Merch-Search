import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "./pages/Archive";
import FrontPage from "./pages/FrontPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar/navbar";
import userSignUp from "./components/Sign-Up-Btn/sign-up-btn"
import userSignIn from "./components/Sign-In-Btn/sign-in-btn"
import SingleItemPage from "./pages/ItemPage";
import Footer from "./components/Footer/footer";
import API from "./utils/API"

class App extends Component {
    state = {
        isLoggedIn: false,
        username: "",
    }

    componentDidMount() {
        API.checkIfLoggedIn()
            .then((user) => {
                if (user.data.email) {
                    this.setState({
                        isLoggedIn: true,
                        username: user.data.email
                    })
                }
            })
    }
    // i want to be able to redirect to a new page onto a login/create User
    // passing those functions down --> change the state of user
    // handleLoginSubmit = event => {
    //     event.preventDefault();
    //     console.log(this.state.loginEmail, this.state.loginPassword);
    //     API.signInUser({
    //       email: this.state.loginEmail,
    //       password: this.state.loginPassword
    //     });
    // }

    // handleCreateSubmit = event => {
    //     event.preventDefault();
    //     console.log(this.state.signUpEmail, this.state.signUpPassword);
    //     API.signUpUser({
    //       email: this.state.signUpEmail,
    //       password: this.state.signUpPassword
    //     });
    // }

    render() {
        const { isLoggedIn } = this.state
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/userSignUp" render={props => (
                            isLoggedIn ? <FrontPage /> : <userSignUp />)} />
                        <Route exact path="/userSignIn" render={props => (
                            isLoggedIn ? <FrontPage /> : <userSignIn />)} />
                        <Route exact path="/archive" render={props => (
                            isLoggedIn ? <Archive /> : <userSignIn />)} />
                        <Route exact path="/" render={props => (
                            isLoggedIn ? <FrontPage /> : <LoginPage />)} />
                        <Route exact path="/items/:id" render={props => (
                            isLoggedIn ? <SingleItemPage id={props.match.params.id} /> : <userSignIn />)} />
                    </Switch>
                </div>
            </Router>
        )
    }

}

export default App;