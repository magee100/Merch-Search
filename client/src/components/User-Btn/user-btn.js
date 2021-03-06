import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import API from '../../utils/API';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./style.css"
// import API from "../../utils/API";
// import DialogContentText from '@material-ui/core/DialogContentText';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  dialogForm: {

    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 0,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginLeft: 150,
    marginRight: 150,
  },


})

class UserBtn extends Component {
  state = {
    open: false,
    loginEmail: "",
    loginPassword: "",
    signUpEmail: "",
    signUpPassword: ""
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleLoginSubmit = event => {
    API.signInUser({
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }).then(result => {
      window.location.reload();
    });
  }

  handleCreateSubmit = event => {
    API.signUpUser({
      email: this.state.signUpEmail,
      password: this.state.signUpPassword
    }).then(result => {
      window.location.reload();
    })
    ;
  }
// adding logout 
  handleLogoutSubmit = event => {
    API.logOutUser({

    }).then(result => {
      window.location.reload();
    })
  }


  render() {
    const { open } = this.state
    const { classes } = this.props;

    return <Fragment>
      <Button id="user-btn" variant="fab" onClick={this.handleToggle} mini >
    
        <AccountCircle />

      </Button>
      <Dialog
        id="user-dialog"
        open={open}
        onClose={this.handleToggle}
        aria-labelledby="form-dialog-title"
      >

<DialogTitle id="user-dialog-title1">
          Create An Account!
            </DialogTitle>
        <DialogTitle id="user-dialog-title2">User Login</DialogTitle>
        <DialogContent
          className={classes.dialogForm}
        >
          {/* <DialogContentText id="user-dialog-info">
            Fill out the form below and hit submit to add item to archive!
            </DialogContentText> */}
          <form
            onSubmit={this.handleLoginSubmit}
            className={classes.container}
            style={{ width: 505 }}
          >

            <Input
              placeholder="Email"
              className={classes.input}
              onChange={this.handleChange("loginEmail")}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Input
              type = "Password"
              placeholder="Password"
              className={classes.input}
              onChange={this.handleChange("loginPassword")}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>

          <Button
            id="login-btn"
            color="primary"
            onClick={this.handleLoginSubmit}
          >
            Log in
            </Button>
        </DialogActions>


        <p
          id="line-p"
        ><hr id="line" /></p>


        <DialogTitle id="user-dialog-title3">
          Create An Account!
            </DialogTitle>

        <DialogContent>


          <form
            onSubmit={this.handleCreateSubmit}
            className={classes.container}
            style={{ width: 505 }}
          >

            <Input
              placeholder="Email"
              className={classes.input}
              onChange={this.handleChange("signUpEmail")}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Input
              placeholder="Password"
              type="Password"
              className={classes.input}
              onChange={this.handleChange("signUpPassword")}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Input
              placeholder="First Name"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Input
              placeholder="Last Name"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />

          </form>
        </DialogContent>
        <DialogActions>

          <Button
            id="create-btn"
            color="primary"
            onClick={this.handleCreateSubmit}
          >
            Create Account
            </Button>
        </DialogActions>
      </Dialog>

    </Fragment>
  }
}

export default withStyles(styles)(UserBtn);