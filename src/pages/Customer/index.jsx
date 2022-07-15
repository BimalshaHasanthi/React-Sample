import { Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import { styleSheet } from './style';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from '@mui/material/TableBody';
import Paper from "@mui/material/Paper";


class Customer extends Component {
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
                        Manage Customer
                    </Typography>
                        <Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} style={{padding:'15px'}}>
                                <TextField placeHolder="id" label="Customer Id" variant="outlined" size="small"
                                           style={{width: '100%'}} />
                            </Grid>
                        </Grid>
                    <Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{padding:'15px'}} >
                            <TextField placeHolder="Name" label="Customer Name" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{padding:'15px'}}>
                            <TextField placeHolder="address" label="Customer Address" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{padding:'15px'}}>
                            <TextField placeHolder="salary" label="Customer Salary" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </Grid>
                    </Grid>

                    </div>

                </div>
                <div>
                    <div>

                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align="right">Calories</StyledTableCell>
                        <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                        </Table>
                        </TableContainer>
                        );
                    }

                    </div>
                </div>
                <div className={classes.bottom__container}>
                    <p style={{color: 'white' , bottom:'7px'}}>Copyright © 2022-2029 WebCreation.com. All Right Reverved. </p>
                </div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(Customer)

