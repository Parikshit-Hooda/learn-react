import React, { Component } from 'react'
import RefClass29 from "./RefClass29.js"

export class FocusRefClass29 extends Component {

    constructor(props) {
        super(props)

        this.compRef = React.createRef()
    }

    clickHandler = () => {
        this.compRef.current.focusElement()
    }


    render() {
        return ( <
            div >
            <
            RefClass29 ref = { this.compRef }
            /> <
            button onClick = { this.clickHandler } > Focus Element < /button> <
            /div>
        )
    }
}

export default FocusRefClass29