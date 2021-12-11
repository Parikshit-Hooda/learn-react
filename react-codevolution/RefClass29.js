import React, { Component } from "react";

export class RefClass29 extends Component {
    constructor(props) {
        super(props);

        this.classCompRef = React.createRef();
    }

    focusElement = () => {
        this.classCompRef.current.focus();
    };

    render() {
        return ( <
            div >
            <
            input type = "text"
            ref = { this.classCompRef }
            /> <
            /div>
        );
    }
}

export default RefClass29;