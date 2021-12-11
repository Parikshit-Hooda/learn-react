import React, { Component } from "react";
import Memo27 from "./Memo_27.js";

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Parikshit"
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Rahul"
            });
            // console.log(`loggin name: ${this.state.name}`);
        }, 2000);
    }

    render() {
        return ( <
            div >
            Hi from Parent Comp <
            Memo27 / > {
                /* <PureComp name = "Parik" />
                                <RegComp name = "Parik" /> */
            } <
            /div>
        );
    }
}

export default ParentComp;