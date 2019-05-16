import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./style.css"


class UserBtn extends Component {
    state = {
      open: false
    }
  
    handleToggle = () => {
      this.setState({
        open: !this.state.open
      })
    }
  
  
    render() {
      const { open } = this.state
  
      return <Fragment>
        <Button id="add-item-btn" variant="fab" onClick={this.handleToggle} mini >
  
        <AccountCircle />
  
        </Button>
  
        <Dialog
          id="item-dialog"
          contentStyle={{
            fullWidth: true,
            maxWidth: 'md'
          }}
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add an Item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Stuff  that i keep typing to see how the box will handle all of thistext wiill it get bigger or whider or longer idk but i cant seemto spell for  shit regardless
              </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggle} color="primary">
              Cancel
              </Button>
            <Button color="primary">
              Subscribe
              </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    }
  }
  
  export default UserBtn;