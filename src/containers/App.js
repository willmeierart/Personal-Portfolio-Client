import React, { Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import '../styles/animations.css'
import Header from '../components/Core/Header'
import Sidebar from '../components/Core/Sidebar'
import Splash from '../components/Core/Splash'
import Footer from '../components/Core/Footer'
import TechMain from '../components/Tech/TechMain'
import Writing from '../components/Writing'
import Art from '../components/Art'
import Bio from '../components/Bio'
import Process from '../components/Process'
import Resume from '../components/Resume'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {resumeOpen:true}
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter><div className='main-body'>
          <Header/>
          <Sidebar/>
          {this.state.resumeOpen && <Resume/>}
          <main>
            <Switch>
              <Route exact path="/" component={Splash}/>
              <Route path="/about" component={Bio}/>
              <Route path="/art" component={Art}/>
              <Route exact path="/tech" component={TechMain}/>
              <Route path="/writing" component={Writing}/>
              <Route path="/process" component={Process}/>

            </Switch>
          </main>
        </div></BrowserRouter>
        <Footer/>
      </div>
    )
  }
}

// const mapStateToProps=(state)=>{}
// const mapDispatchToProps=(dispatch)=>{}
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)
