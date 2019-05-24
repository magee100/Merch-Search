import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "./pages/Archive";
import NewItems from "./pages/FrontPage";
import Navbar from "./components/Navbar/navbar";
import IndividualItems from "./pages/ItemPage";
import userSignUp from "./components/Sign-Up-Btn/sign-up-btn"
import userSignIn from "./components/Sign-In-Btn/sign-in-btn"
import SingleItemPage from "./pages/ItemPage";
import API from "./utils/API"
import Footer from "./components/Footer/footer";

class App extends Component {
    state = {
        isLoggedIn: false,
        username: "",
    }

    componentDidMount() {
        API.checkIfLoggedIn() 
            .then((user)=>{
            if (user.data.email){
                this.setState({
                    isLoggedIn: true,
                    username: user.data.email
                })
            }
            })
    };

    render(){
        const {isLoggedIn} = this.state
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path ="/userSignUp" render= {props => (
                            isLoggedIn ? <NewItems/> : <userSignUp/>)} />
                        <Route exact path = "/userSignIn" render = {props => (
                            isLoggedIn ? <NewItems/> : <userSignIn/>)}/>
                        <Route exact path="/archive" render={props => (
                            isLoggedIn ? <Archive/> : <userSignIn/>)} />
                        <Route exact path="/" render={props => (
                            isLoggedIn ? <NewItems/> : <userSignIn/>)} />
                        <Route exact path="/items/:id" render={props => (
                            isLoggedIn ? <SingleItemPage id={props.match.params.id}/> : <userSignIn/>)} />
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }

}

export default App;