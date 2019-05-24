import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron/jumbotron"
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
        // const { classes } = this.props;
        return (
            <Container fluid>
                {/* <Jumbotron>
                    <h1>Merch Archive</h1>
                </Jumbotron> */}

                {/* <h1
                    className={classes.h}
                >Archive
                </h1> */}



                <ArchiveTable />
            </Container>
        );
    }
}
export default withStyles(styles)(Archive);
