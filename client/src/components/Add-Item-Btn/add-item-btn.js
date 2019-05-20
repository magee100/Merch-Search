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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import API from "../../utils/API";
import { types } from '../../utils/extraData';
import "./style.css";

const styles = theme => ({
  ArtistControl: {
    width: 250,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,

    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
  },

  TypeControl: {
    width: 150,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

  DescControl: {
    width: 500,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

  ColorControl: {
    width: 125,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

  BrandControl: {
    width: 200,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

  PhotoControl: {
    width: 300,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

  // container: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

})

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

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.saveItem(
      this.state.item
    )
      
      .then(this.loadItems())
      .then(this.setState({
        open: !this.state.open
      }))
      
      .catch(err => console.log(err));

  };

  render() {
    const { open, item: { artist, type, desc, color, brand, photo } } = this.state
    const { classes } = this.props;

    return <Fragment>
      <Button id="add-item-btn" variant="fab" onClick={this.handleToggle} mini >

        <AddIcon />

      </Button>

      <Dialog
        id="item-dialog"

        open={open}
        onClose={this.handleToggle}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add An Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the form below and hit submit to add item to archive!
            </DialogContentText>
          <form className={classes.container}>
            <TextField
              label="Artist"
              value={artist}
              onChange={this.handleChange('artist')}
              margin="normal"
              classNames={classes.ArtistControl}
              variant="filled"
            />
            {/* <br />
            <FormControl>
              <InputLabel 
              
              htmlFor="type">Item Type</InputLabel>
              <Select
                className={classes.TypeControl}
                value={type}
                variant="filled"
                onChange={this.handleChange('type')}
              >
                {types.map(type =>
                  <MenuItem key={type.value} value={type}>{type}</MenuItem>
                )}

              </Select>
            </FormControl> */}

            <TextField
            label="Item Type"
            select
            className={classes.TypeControl}
            onChange={this.handleChange('type')}
            variant="filled"
            margin="normal"
            value={type}
            >
            {types.map(type =>
                  <MenuItem 
                  // key={type.value} 
                  value={type}>{type}</MenuItem>
                )}
            </TextField>
         
            <TextField
              label="Description"
              value={desc}
              variant="filled"
              // multiline
              // rows="2"
              onChange={this.handleChange('desc')}
              margin="normal"
              className={classes.DescControl}
            />
          
            <TextField
              label="Color"
              // className={classes.textField}
              value={color}
              onChange={this.handleChange('color')}
              margin="normal"
              variant="filled"
              className={classes.ColorControl}
            />
            
            <TextField
              label="Brand"
              // className={classes.textField}
              value={brand}
              onChange={this.handleChange('brand')}
              margin="normal"
              variant="filled"
              className={classes.BrandControl}
            />
        
            <TextField
              label="Photo Link"
              // className={classes.textField}
              value={photo}
              onChange={this.handleChange('photo')}
              margin="normal"
              variant="filled"
              className={classes.PhotoControl}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleToggle} color="primary">
            Cancel
            </Button>
          <Button color="primary"
            onClick={this.handleFormSubmit}
          // onClick={this.handleToggle} 
          >
            Submit Item
            </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  }
}

export default withStyles(styles)(AddItemDialog);