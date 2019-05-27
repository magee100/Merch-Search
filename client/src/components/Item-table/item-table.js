import React from "react";
import { withStyles } from '@material-ui/core/styles'
import API from "../../utils/API"
import { Container } from "../Grid/grid"
import CardMedia from '@material-ui/core/CardMedia';
import Lightbox from "../Lightbox/card-lightbox";
import Grid from '@material-ui/core/Grid';
import "./item-table.css"
const styles = theme => ({
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
            <Container>
                <div
                    id="item-container">

                    <Grid container spacing={24}>
                        <Grid item xs={3}>
                            <CardMedia
                                id="itemMedia"
                                className={classes.media}>
                                <Lightbox
                                    id="lightbox"
                                    images={this.state.item.photo} />
                            </CardMedia>
                        </Grid>
                        <Grid item xs={8}>
                            <div
                                id="infoDiv">
                                <div
                                    id="itemHead">
                                    <h1
                                        id="itemArtist">
                                        {this.state.item.artist}
                                    </h1>
                                    <h3
                                        id="itemDesc">
                                        {this.state.item.desc}
                                    </h3>
                                </div>
                                <div
                                    id="infoBox">
                                    <p>
                                        Release Info: &nbsp;
                                    {this.state.item.release}
                                    </p>

                                    <p>
                                        Color: &nbsp;
                                    {this.state.item.color}
                                    </p>

                                    <p>
                                        Brand: &nbsp;
                                    {this.state.item.brand}
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        );
    }
};

export default withStyles(styles)(IndividualItems);