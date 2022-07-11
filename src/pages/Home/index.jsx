import React, { Component, Fragment } from "react";
import Title from "../../components/home/Title";


class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Title name="React"/>
            </Fragment>

        )
    }
}

export default HomePage