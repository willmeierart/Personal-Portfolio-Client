import React, {Component} from 'react'
import Logo from './Core/Logo'
import Splash from './Core/Splash'

export default class Process extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  render() {
    return (
      <div className='process'>
        {/*<br/>*/}
        <div style={{width:'100%',textAlign:'center'}}>UNDER CONSTRUCTION...</div>
        {/*<br/>
        <Logo/>*/}
        <Splash/>
      </div>
    )
  }
}
