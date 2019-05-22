import React, { Fragment, 
  // Component
 } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from "@material-ui/icons/Add";
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import API from "../../utils/API";
import { types } from '../../utils/extraData';
import "./style.css";

const inputProps = {
  fontSize: 10
}

const styles = theme => ({
  // inputProps: {
  //   fontSize: 10
  // },

  ArtistControl: {
  },

  TypeControl: {
    width: 200,
    marginLeft: 25,
  },

  DescControl: {
    width: 505,
  },

  ColorControl: {
    width: 200,
    marginRight: 25,
  },

  BrandControl: {
    width: 225,
    // marginLeft: 55,
  },
  
  ReleaseControl: {
    width: 200,
    // marginLeft: 25,
  },

  PhotoControl: {
    width: 260,
    marginLeft: 25,
    
  },

  dialogForm: {
   
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 0,
  },

})

class AddItemDialog extends React.Component {
  state = {
    open: false,
    item: {
      artist: '',
      type: '',
      desc: '',
      color: '',
      brand: '',
      release: '',
      photo: [''],

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
    window.location.reload()

    this.state.item.photo = this.state.item.photo.split('\n');
    
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
    const { open, item: { artist, type, desc, color, brand, photo, release } } = this.state
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
        <DialogContent
        className={classes.dialogForm}
        >
          <DialogContentText>
            Fill out the form below and hit submit to add item to archive!
            </DialogContentText>
          <form className={classes.container}
          style = {{width: 520}}
          >

            <TextField
              label="Artist"
              value={artist}
              onChange={this.handleChange('artist')}
              margin="normal"
              classNames={classes.ArtistControl}
              variant="filled"
              style = {{width: 280}}
            />

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
                  value={type}>{type}</MenuItem>
                )}
            </TextField>

         <TextField
              label="Description"
              value={desc}
              variant="filled"
              onChange={this.handleChange('desc')}
              margin="normal"
              className={classes.DescControl}
            />

            <TextField
              label="Color"
              value={color}
              onChange={this.handleChange('color')}
              margin="normal"
              variant="filled"
              className={classes.ColorControl}
            />
            
            <TextField
              label="Release Info"
              value={release}
              onChange={this.handleChange('release')}
              margin="normal"
              variant="filled"
              multiline
              helperText="*Year Released, tour/fest, limited quantity"
             
              classNames={classes.ReleaseControl}
              style = {{width: 280}}
            />

            <TextField
              label="Brand"
              value={brand}
              onChange={this.handleChange('brand')}
              margin="normal"
              helperText="* Gildan, Alstyle, Fruit of the Loom"
              variant="filled"
              className={classes.BrandControl}
            />

            

            
        
            <TextField
              label="Photo Link"
              placeholder="https://i.imgur.com/3sVR2eG.jpg"
              value={photo}
              onChange={this.handleChange('photo')}
              margin="normal"
              multiline
              variant="filled"
              helperText=
              "* Indent to Add Mutiple Photo Links"
              inputProps={inputProps}
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
          >
            Submit Item
            </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  }
}

export default withStyles(styles)(AddItemDialog);