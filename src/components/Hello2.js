import React, { Component } from 'react'

class Hello2 extends Component {

    constructor() {
        super()
        this.state = { count: 1 }
    }

    plusHandler = () => {
        console.log("CLICK");
        this.setState( {count: ++ this.state.count} )
    }

    minusHandler = () => {
        this.setState({count: -- this.state.count})
    }



    render() {
        return (
            <div class='helloDiv'>
                <h2>{this.state.count}</h2>
                <button onClick={this.plusHandler}> + </button>
                <button onClick={this.minusHandler}> - </button>
            </div>
        )
    }
}

export default Hello2