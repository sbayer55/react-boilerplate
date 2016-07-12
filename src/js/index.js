import React, { Component } from 'react'
import { render } from 'react-dom'

const App = (props) => (
  <div id="app">
    {'Hello React, Gulp, Less, es6, and JSX!'}
  </div>
)

render(<App />, document.getElementById('react-mounting-point'))
