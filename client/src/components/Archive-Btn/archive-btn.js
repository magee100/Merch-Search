import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Storage from "@material-ui/icons/Storage";
import { Link } from "react-router-dom";
import "./style.css"

class ArchiveBtn extends React.Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return <Fragment>
      <Link to="/archive">
        <Button id="archive-btn"
          variant="fab"
          mini >
          <Storage />
        </Button>
      </Link>
    </Fragment>
  }
}

export default ArchiveBtn;