import React, { Component } from 'react'

export default class States extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"ashok"
        }
        
    }
    render() {
        setTimeout(() =>{
            this.setState({name:"golla"})

        })
        return (
            <div>
                <h1>
                     {this.state.name}
                </h1>
            </div>
        )
    }
}

