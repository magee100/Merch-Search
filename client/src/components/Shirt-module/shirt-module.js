import React, { Component } from 'react';
import moment from 'moment';
//card----------------------------------------------------
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//card----------------------------------------------------
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';


import { List, ListItem } from "../Lists/lists";
import { Container } from "../Grid/grid";
import API from "../../utils/API";

const styles = theme => ({
    card: {
        maxWidth: 400,
        
    },

    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        //   width: 1100,
          marginLeft: 50,
          marginRight: 50,
        },
      },
      cardGrid: {
        // padding: `${theme.spacing.unit * 8}px 0`,
      },

    media: {
        height: 200,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class Shirt extends Component {
    state = {
        expanded: false,
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

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <Container
            //  fluid
             >

            <div className={classNames(classes.layout, classes.cardGrid)}>
                {this.state.items.length ? (
                
                    <Grid 
                    container 
                    justify="space-around"
                    spacing={40}
                    >
                        {this.state.items.map(item => (
                          
                                <Grid item sm={6} md={4} lg={4}>

                                <Card className={classes.card} key={item.id}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="Item" className={classes.avatar}>
                                                Item
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton>
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={item.artist} 
                                        subheader={item.type}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={item.photo}
                                        title="item-Image"
                                    />
                                    <CardContent>
                                        <Typography component="p">
                                            Added on: {moment(item.date).format('MM/DD/YY hh:mm A')}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.actions} disableActionSpacing>
                                        {/* <IconButton aria-label="Add to favorites">
                                            <FavoriteIcon />
                                        </IconButton> */}
                                        <IconButton
                                            className={classnames(classes.expand, {
                                                [classes.expandOpen]: this.state.expanded,
                                            })}
                                            onClick={this.handleExpandClick}
                                            aria-expanded={this.state.expanded}
                                            aria-label="Show more"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </CardActions>
                                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography paragraph>
                                                {item.desc}
                                                <p>Brand: {item.brand}</p>
                                                <p>Color: {item.color}</p>
                                            </Typography>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                                
                                </Grid>
                            
                        ))}
                        </Grid>
                    
                ) : (
                        <h1>Failed to execute</h1>
                    )}
                    </div>

            </Container>
        );
    }
}

Shirt.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shirt);