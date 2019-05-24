import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';

class Expand extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
                <IconButton
                    onClick={this.props.triggerParentUpdate}
                    className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
        )
    }
}

export default { Expand }