import React, { Component } from "react";
import { Container } from '../Grid/grid';
import  "./footer.css"

class Footer extends Component {
    render() {
        return (
            <div>
            <Container>
                <div
                id="footerBox"
                >
Merch Search © 2019
                </div>
            </Container>
        </div>
        )
    }
}

export default Footer;