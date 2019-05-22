import React, { 
    // Component 
} from "react";
import { withStyles } from '@material-ui/core/styles';
import Jumbotron from "../Jumbotron/jumbotron";
import API from "../../utils/API"
import {
    //  Col, Row, 
     Container } from "../Grid/grid"
import { Link } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from "@material-ui/core";
// import PropTypes from 'prop-types';



const styles = theme => ({
    media: {
        height: 300,
        width: 300,
    },
    artistHeader: {
        textAlign: "auto",
        fontSize: 40,
        margin: 0,
    },

    
})

class IndividualItems extends React.Component {

    state = {
        item: {},
       
    };

    componentDidMount() {
        this.loadItem();
    }

    loadItem = () => {
        API.getItem(this.props.id).then(({ data }) => this.setState({
            item: data
        }))
    };



    render() {
        const { classes } = this.props;
        return (
            <Container >
                
                      
                        <Jumbotron>
                            
                            <h1
                            className={classes.itemDesc}
                            >
                                {this.state.item.desc} 
                            </h1>
                            <h2
                            className={classes.artistHeader}
                            >
                                {this.state.item.artist}
                            </h2>
                            <CardMedia
                                className={classes.media}
                                image={this.state.item.photo}
                                title="item-Image"
                            />
                        </Jumbotron>
                    
                        <Jumbotron> <h1>Info</h1>
                            <p>Release: {this.state.item.release}</p>
                            <p>Color: {this.state.item.color}</p>
                            <p>Brand: {this.state.item.brand}</p></Jumbotron>
                    
                        <Typography>
                           
                        </Typography>
                   
                
                
                    
                        <Link to="/">← head home</Link>
                    
                
                     
            </Container>
        );
    }
};

export default withStyles(styles)(IndividualItems);