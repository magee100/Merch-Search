import React, { Component} from "react";
import { withStyles } from '@material-ui/core/styles';
import Jumbotron from "../components/Jumbotron/jumbotron";
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
class NewItems extends React.Component {
    state = {
        items: [],
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getItems()
        .then(res => 
            this.setState({ items: res.data, })
            )
            .catch(err => console.log(err));
    };

    render() {
        const { classes } =this.props;

        return (
            <Container 
            
            >
            {/* <Jumbotron>
                 <h1>Welcome to Merch Search</h1>
                 <p
                 className={classes.p}
                 >
                 Get Started By Clicking Here And Creating An Account</p>

                 <p
                 className={classes.p}
                 >
                 Then Click Here To Add An Item To The Archive
                 </p>

                 <p
                 className={classes.p}
                 >Last item added: ( A  TIME )</p>
                 </Jumbotron> */}
            <h1
            className={classes.h}
            >Newest Items
            </h1>

            <Shirt />

            </Container>
        );
    }
};




export default withStyles(styles)(NewItems);