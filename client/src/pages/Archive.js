import React, { Component } from "react";
import { Container } from "../components/Grid/grid";
import ArchiveTable from "../components/Archive-table/archive-table"
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

    h: {
        marginTop: 80,
        marginLeft: 30,
        fontSize: 50,
    },

})


class Archive extends Component {
    render() {
        return (
            <Container fluid>
                <ArchiveTable />
            </Container>
        );
    }
}
export default withStyles(styles)(Archive);
