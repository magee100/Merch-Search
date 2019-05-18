import React, { Component } from "react";
import { Container } from "../components/Grid/grid";
import ArchiveTable from "../components/Archive-table/archive-table"

class Archive extends Component {
    render() {
        return (
            <Container fluid>
                <h1>Merch Archive</h1>
                <ArchiveTable />
            </Container>
        );
    }
}

export default Archive;