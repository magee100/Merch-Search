import React, { Component} from "react";
import API from "../utils/API";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid/grid";
=======
// import { Link } from "react-router-dom"
import { 
    // Col, Row, 
    Container } from "../components/Grid";
>>>>>>> 335574348e7eac09f7851068126e608a66296207
import { List, ListItem } from "../components/Lists/lists";
import Shirt from "../components/Shirt-module/shirt-module";


class NewItems extends Component {
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
        return (
            <Container fluid>
            <h1>Newest Items</h1>
            <Shirt />

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
};




export default NewItems;