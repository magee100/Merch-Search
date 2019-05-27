import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import IndividualItems from "../components/Item-table/item-table"
import { Container } from "../components/Grid/grid"
const styles = theme => ({
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