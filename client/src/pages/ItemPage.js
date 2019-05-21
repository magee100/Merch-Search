import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Jumbotron from "../components/Jumbotron/jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/grid"
import { Link } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';


const styles = theme => ({
    media: {
        height: 400,
        width: 400,
    },
    artistHeader: {
        textAlign: "auto",
        fontSize: 40,
        margin: 0,
    }
})

class IndividualItems extends Component {

    state = {
        item: {}
    };

    componentDidMount() {
        API.getItem(this.props.match.params.id).then(({ data }) => this.setState({
            item: data
        }))
    }

    render() {
        const { classes } = this.props;
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                      
                        <Jumbotron>
                            
                            <h1>
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
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1>Info</h1>
                            <p>Release: {this.state.item.release}</p>
                            <p>Color: {this.state.item.color}</p>
                            <p>Brand: {this.state.item.brand}</p>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to="/">← head home</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default withStyles(styles)(IndividualItems);