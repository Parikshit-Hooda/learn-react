import React, { Component } from 'react'

class ErrorBoundary32 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(e) {

        return {
            hasError: true
        }
    }


    render() {
        if (this.state.hasError)
            return ( < div > something is wrong. < /div>)
                return this.props.children
            }
    }

    export default ErrorBoundary32