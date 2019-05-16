import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from "@material-ui/icons/Add";
import Select from '@material-ui/core/Select';
import "./style.css"



class AddItemDialog extends Component {
  state = {
    open: false,
    item: {
      artist: '',
      type: '',
      desc: '',
      color: '',
      brand: '',
      photo: '',

    },
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      item: {
        ...this.state.item,
        [name]: value
      }
    });

  };


  render() {
    const { open, item: { artist, type, desc, color, brand, photo } } = this.state

    return <Fragment>
      <Button id="add-item-btn" variant="fab" onClick={this.handleToggle} mini >

        <AddIcon />

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
        <DialogTitle id="form-dialog-title">Add An Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the form below and hit <br />submit to add item to archive!
            </DialogContentText>
          <form>
            <TextField
              label="Artist"
              // className={classes.textField}
              value={artist}
              onChange={this.handleChange('artist')}
              margin="normal"
            />
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Age</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <br/>
            <TextField
              label="Type"
              // className={classes.textField}
              value={type}
              onChange={this.handleChange('type')}
              margin="normal"
            />
            <br />
            <TextField
              label="Description"
              // className={classes.textField}
              value={desc}
              multiline
              rows="2"
              onChange={this.handleChange('desc')}
              margin="normal"
            />
            <br />
            <TextField
              label="Color"
              // className={classes.textField}
              value={color}
              onChange={this.handleChange('color')}
              margin="normal"
            />
            <br />
            <TextField
              label="Brand"
              // className={classes.textField}
              value={brand}
              onChange={this.handleChange('brand')}
              margin="normal"
            />
            <br />
            <TextField
              label="Photo Link"
              // className={classes.textField}
              value={photo}
              onChange={this.handleChange('photo')}
              margin="normal"
            />


          </form>
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

export default AddItemDialog;