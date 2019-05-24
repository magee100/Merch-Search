import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Archive from "./pages/Archive";
import NewItems from "./pages/FrontPage";
import Navbar from "./components/Navbar/navbar";
import SingleItemPage from "./pages/ItemPage";
import API from "./utils/API"
import Footer from "./components/Footer/footer";
import LoginPage from "./pages/LoginPage";
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
                            isLoggedIn ? <NewItems/> : <LoginPage/>)} />
                        <Route exact path = "/userSignIn" render = {props => (
                            isLoggedIn ? <NewItems/> : <LoginPage/>)}/>
                        <Route exact path="/archive" render={props => (
                            isLoggedIn ? <Archive/> : <LoginPage/>)} />
                        <Route exact path="/" render={props => (
                            isLoggedIn ? <NewItems/> : <LoginPage/>)} />
                        <Route exact path="/items/:id" render={props => (
                            isLoggedIn ? <SingleItemPage id={props.match.params.id}/> : <LoginPage/>)} />
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;