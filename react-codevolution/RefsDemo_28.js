import React, { Component } from 'react'

class RefsDemo extends Component {


    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.inputRef);

        this.inputRef.current.focus()
    }


    render() {
        return ( <
            div >
            <
            label > name < /label> <
            input type = "text"
            ref = { this.inputRef }
            /> <
            /div>
        )
    }
}

export default RefsDemo


// import React, { Component } from 'react'

// class RefsDemo extends Component {

//   constructor(props) {
//     super(props)

//     this.inputRef = React.createRef()

//   }

//     componentDidMount(){
//       this.inputRef.current.focus();
//       console.log(this.inputRef);
//   }




//   render() {
//     return (
//       <div>
//         <label>Text input</label>
//         <input type="text" ref={this.inputRef}/>
//       </div>
//     )
//   }
// }

// export default RefsDemo