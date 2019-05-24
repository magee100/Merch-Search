import React, {
    // Component 
} from "react";
import { withStyles } from '@material-ui/core/styles';
import Jumbotron from "../Jumbotron/jumbotron";
import API from "../../utils/API"
import {
    //  Col, Row, 
    Container
} from "../Grid/grid"

import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from "@material-ui/core";
import Lightbox from "../Lightbox/card-lightbox";
import Grid from '@material-ui/core/Grid';
import "./item-table.css"

import { Link } from "react-router-dom";
import classNames from 'classnames';

// import PropTypes from 'prop-types';

const styles = theme => ({

    artistHeader: {
        textAlign: "auto",
        fontSize: 40,
        margin: 0,
    },

    ItemContain: {

    }


})

class IndividualItems extends React.Component {

    state = {
        item: {},

    };

    componentDidMount() {
        this.loadItem();
        console.log(this.props.id);
    }

    loadItem = () => {
        API.getItem(this.props.id).then(({ data }) => this.setState({
            item: data
        }))
    };

    render() {
        const { classes } = this.props;
        return (
            <Container

            >
                <div
                    id="item-container">




                    <h1
                        id="itemDesc"
                    >
                        {this.state.item.desc}
                    </h1>
                    {/* <h2
                        className={classes.artistHeader}
                        id="itemArtist"
                    >

                    </h2> */}

                    <Grid container spacing={24}>
                        <Grid item xs={2}>
                            <CardMedia
                                id="itemMedia"
                                className={classes.media}>
                                <Lightbox images={this.state.item.photo} />
                            </CardMedia>
                        </Grid>
                        <Grid item xs={8}>
                            <div
                                id="infoBox"
                            > <h1>{this.state.item.artist}</h1>
                                <p>
                                    Release Info: {this.state.item.release}</p>
                                <p>
                                    Color:
                        {this.state.item.color}</p>
                                <p>
                                    Brand:
                        {this.state.item.brand}</p>
                            </div>

                        </Grid>
                    </Grid>



                </div>

            </Container>
        );
    }
};

export default withStyles(styles)(IndividualItems);