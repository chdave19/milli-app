import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       errorFromApp: false
    }

    this.style = {height: '100vh', display: 'flex', justifyContent: 'center',alignItems: 'center', fontSize: '4rem', backgroundColor:'#fff'};
  }

  static getDerivedStateFromError(error){
    console.log(error)
    return {errorFromApp: true}
  }
    
  render() {
    return this.state.errorFromApp?(
      <div style={this.style}>
        <h1 style={{textAlign: 'center'}}>Something went wrong</h1>
      </div>
    ): this.props.children;
  }
}
