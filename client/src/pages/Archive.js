import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/Lists";

class Archive extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getArchive()
            .then(res =>
                this.setState({ items: res.data, })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <h1>Merch Archive</h1>

                {this.state.items.length ? (
                    <List>
                        {this.state.items.map(item => (
                            <ListItem key={item._id}>
                                {item.artist} | {item.type} | {item.desc} | {item.color} | {item.brand} | <img width="150px" height="200px" src={item.photo}></img> | {item.date}
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h1>Failed to Execute</h1>
                    )}
            </Container>
        );
    }
}

export default Archive;