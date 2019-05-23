import React, { 
    // Component
} from "react";
import { withStyles } from '@material-ui/core/styles';
// import Jumbotron from "../components/Jumbotron/jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid/grid";
import Shirt from "../components/Shirt-module/shirt-module";

const styles = theme => ({
p: {
textAlign: "auto",
    },

h: {
    marginTop: 80,
    marginLeft: 30,
    fontSize: 50,
    },

})
class LoginPage extends React.Component {
    state = {
        items: [],
    };
    render() {
        const { classes } =this.props;

        return (
            <div>
                <h1>HELLO LOGIN</h1>
            </div>
        );
    }
};




export default withStyles(styles)(LoginPage);