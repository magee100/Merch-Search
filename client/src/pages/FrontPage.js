import React from "react";
import { withStyles } from '@material-ui/core/styles';
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
            <Container>
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