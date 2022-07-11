import { Component } from 'react';
import GDSEButton from '../../components/common/Button';
import not_found from '../../assets/404.jpg';
import withStyles from "@mui/material/styles/withStyles";
import Link from "@mui/material/Link";

const styleSheet = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img__container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '10px'
    }
})


class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.img__container}>
                    <img src={not_found} alt="" />
                </div>
                <Link to="/">
                    <GDSEButton
                        variant="contained"
                        label="Back to home page"
                    />
                </Link>
            </div >
        )
    }
}
export default withStyles(styleSheet)(NotFound)