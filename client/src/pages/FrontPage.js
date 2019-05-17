import React, { Component} from "react";
import API from "../utils/API";
import { Container } from "../components/Grid/grid";
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

    // {item.artist} | {item.type} | {item.desc} | {item.color} | {item.brand} | <img width="150px" height="200px" src={item.photo}></img> | {item.date}

    render() {
        return (
            <Container fluid>
            <h1>Newest Items</h1>
            <Shirt />
            </Container>
        );
    }
};




export default NewItems;