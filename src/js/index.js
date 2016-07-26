import React, { Component } from 'react'
import { render } from 'react-dom'

let list = []

for (let n = 0; n < 10; n++) {
  list.push('N = ' + n)
}
console.log('List = ', list)


class BoldText extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <span style={{fontWeight: '900'}}>{this.props.text}</span>
  }
}


class Item extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>- {this.props.children}</div>
  }
}
// <span style="display: block">


class App extends Component {

  // How to make an App
  constructor(props) {
    super(props)

    this.state = { mutableList: props.immutableList }
    this.append = this.append.bind(this)
  }

  append() {
    let newMutableList = this.state.mutableList
    newMutableList.push('Appended string!')
    this.setState({mutableList: newMutableList})
  }

  // How to draw this Component (App)
  render() {
    return <div>
      <BoldText text={this.props.name} /><br />
      <button onClick={this.append}>Add Item</button>
      <br />
      I have {this.state.mutableList.length} items!
      {this.state.mutableList.map(string => (<Item>{string}</Item>))}
    </div>
  }
}

render(<App immutableList={list} name="React App" />, document.getElementById('react-mounting-point'))
