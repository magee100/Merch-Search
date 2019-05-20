import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import Storage from "@material-ui/icons/Storage";
import { Link } from "react-router-dom";

import "./style.css"


class ArchiveBtn extends Component {
    state = {
      open: false
    }
  
    handleToggle = () => {
      this.setState({
        open: !this.state.open
      })
    }

    // toArchive = event => {
    //   src="/archive"
    // }
  
  
    render() {
      const { open } = this.state
  
      return <Fragment>
        <Link to="/archive">
        <Button id="add-item-btn" 
        variant="fab" 
        // onClick={this.toArchive} 
        // to={"/archive"}
        mini >
  
        <Storage/>

        
        
        

        </Button>
        </Link>
      </Fragment>
    }
  }
  
  export default ArchiveBtn;