import React, { Component } from 'react'

export class ClassComponents extends Component {

  constructor (){
    console.log("constructor function called!")
    super()
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    console.log("Component did mount function called!")
  }

  componentDidUpdate(){
    console.log("Component did update function calledd!")
  }

  render() {
    console.log("Render Function called")
    return (
      <>
      <div>ClassComponents { this.state.count  }</div>
      {this.state.count < 3 ? <ClassComponentsa /> : null}
      <button onClick={()=>this.setState({count:this.state.count+1})} >Update Count</button>
      </>
    )
  }
}

export default ClassComponents

class ClassComponentsa extends Component {

  componentWillUnmount(){
    console.log("component will unmount!")
  }

  render () {
    return (
      <>
      <h1>ClassComponentsA</h1>
      </>
    )
  }
}