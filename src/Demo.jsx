import React, { Component } from 'react'

class Demo extends Component {
    
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    increment(){
       this.setState({
           count: this.state.count+1
       },()=>{console.log('Callback value',this.state.count)})
       console.log(this.state.count)
    }

    render(){
        return (
            <>
              <h1>Counter - {this.state.count}</h1>
              <button onClick={()=>this.increment()}>increment</button>
            </>
        )
    }
}

export default Demo