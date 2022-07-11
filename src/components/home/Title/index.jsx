import { Component } from "react";
import Typography from '@mui/material/Typography';
import { styleSheet } from "./style";
import {withStyles} from "@mui/styles";

class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            // style={{backgroundColor: 'red'}}
            <div className={classes.container}>
                <div>
                    <Typography variant="h3" gutterBottom component="div">
                        Hello {this.props.name}
                    </Typography>
                </div>
                <div>
                </div>
            </div>
        )
    }

}

export default withStyles(styleSheet)(Title)