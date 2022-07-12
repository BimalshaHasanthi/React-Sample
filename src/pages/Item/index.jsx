import { Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import { styleSheet } from './style';
import {Link} from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title__container}>
                    <Tabs  centered onChange={onchange}>
                        <Tab label="Dashboard"  href="/dashboard" style={{color:'#ffd100',top:'5px'}}/>

                        <Tab label="Customer"  href="/customer" style={{color:'#ffd100',top:'5px'}}/>

                        <Tab label="Item" href="/item" style={{color:'#ffd100',top:'5px'}}/>
                    </Tabs>
                </div>
                <div className={classes.form__container}>
                    <div>
                        <Typography variant="h4" style={{padding:'40px'}} >
                            Manage Item
                        </Typography>
                        <Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} style={{padding:'15px'}} >
                                <TextField placeHolder="itemCode" label="Item Code" variant="outlined" size="small"
                                           style={{width: '100%'}} />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} style={{padding:'15px'}}>
                                <TextField placeHolder="name" label="Item Name" variant="outlined" size="small"
                                           style={{width: '100%'}} />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} style={{padding:'15px'}}>
                                <TextField placeHolder="unitPrice" label="Unit price" variant="outlined" size="small"
                                           style={{width: '100%'}} />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} style={{padding:'15px'}}>
                                <TextField placeHolder="qty" label="Qty On Hand" variant="outlined" size="small"
                                           style={{width: '100%'}} />
                            </Grid>
                        </Grid>
                    </div>

                </div>
                <div className={classes.bottom__container}>
                    <p style={{color: 'white' , bottom:'7px'}}>Copyright © 2022-2029 WebCreation.com. All Right Reverved. </p>
                </div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(Item)

