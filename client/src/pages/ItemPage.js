import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import IndividualItems from "../components/Item-table/item-table"
import { 
    // Col, Row, 
    Container 
} from "../components/Grid/grid"

// import { Link } from "react-router-dom";
// import CardMedia from '@material-ui/core/CardMedia';
// import { Typography } from "@material-ui/core";
// import PropTypes from 'prop-types';
// import Jumbotron from "../components/Jumbotron/jumbotron";
// import API from "../utils/API";

const styles = theme => ({
    // media: {
    //     height: 300,
    //     width: 300,
    // },
    // artistHeader: {
    //     textAlign: "auto",
    //     fontSize: 40,
    //     margin: 0,
    // },

    
})
class SingleItemPage extends Component {
    render() {
        return (
            <Container >
                        <IndividualItems
                        id={this.props.id}
                        />
            </Container>
        );
    }
};

export default withStyles(styles)(SingleItemPage);