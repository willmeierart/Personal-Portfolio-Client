import React, { Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BrowserRouter>

        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{}
const mapDispatchToProps=(dispatch)=>{}

export default connect(mapStateToProps, mapDispatchToProps)(App)
