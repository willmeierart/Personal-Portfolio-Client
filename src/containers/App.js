import React, { Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {RouteTransition} from 'react-router-transition'
import {spring} from 'react-motion'
import '../styles/animations.css'
import Header from '../components/Core/Header'
import Sidebar from '../components/Core/Sidebar'
import Splash from '../components/Core/Splash'
import Footer from '../components/Core/Footer'
import TechMain from '../components/Tech/TechMain'
import Writing from '../components/Writing'
import Art from '../components/Art/ArtMain'
import Bio from '../components/Bio'
import Process from '../components/Process'
import Resume from '../components/Resume'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {resumeOpen:true}
  }
  componentDidMount(){
    console.log('under construction 🤓✨');
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter><Route render={({location})=>{return(
        <div className='main-body'>
          {location.pathname.length>2 &&
            <div><Header/><Sidebar/></div>}
          {this.state.resumeOpen && <Resume/>}
          <main>
            <RouteTransition
                pathname={location.pathname}
                atEnter={{ opacity: 0}}
                atLeave={{ opacity: spring(0,{stiffness:300,damping:40})}}
                atActive={{ opacity: spring(1,{stiffness:300,damping:40})}}
                mapStyles={styles=>({opacity:styles.opacity})}>
              <Switch key={location.key} location={location}>
                <Route exact path="/" component={Splash}/>
                <Route path="/about" component={Bio}/>
                <Route path="/art" component={Art}/>
                <Route exact path="/tech" component={TechMain}/>
                <Route path="/writing" component={Writing}/>
                <Route path="/process" component={Process}/>
              </Switch>
            </RouteTransition>
          </main>
        </div>)}}/>
        </BrowserRouter>
        <Footer/>
      </div>
    )
  }
}

// const mapStateToProps=(state)=>{}
// const mapDispatchToProps=(dispatch)=>{}
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)
