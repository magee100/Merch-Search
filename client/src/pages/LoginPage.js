import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
// import Jumbotron from "../components/Jumbotron/jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid/grid";
import Shirt from "../components/Shirt-module/shirt-module";
import classNames from 'classnames';


const styles = theme => ({
p: {
textAlign: "auto",
    },

h: {
    marginTop: 80,
    marginLeft: 30,
    fontSize: 50,
    },

loginInfo: {
    fontSize: 60,
    
},

loginInfo2: {
    fontSize: 30,
    // marginLeft: 100,
    lineHeight: 2,
    textAlign: 'center',
    
},

jumbotron: {
    marginTop: 100,
    margin: "0 auto",
    width: 800,
    height: 600,
},

})
 class LoginPage extends Component {

    render() {
        const { classes } =this.props;

        return (
            <div
            className={classes.jumbotron}
            >
                <h1
                className={classes.loginInfo}
                >Welcome to the 
                
                 Merch Search!</h1>
                 <div className={classes.loginInfo2}>
                <h2
                
                >Click on the user button 
                in <br/>the navbar and sign up 
                to see <br/>the archive and add items!</h2>
                </div>
                <p>


                </p>
            </div>
        );
    }
};

export default withStyles(styles)(LoginPage)