import React, {Component} from 'react'
import Logo from './Core/Logo'


export default class Writing extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  render() {
    return (
      <div className='writing-main'>
        <br/>
        <div style={{width:'100%',textAlign:'center'}}>UNDER CONSTRUCTION... for now: <a href="https://medium.com/@willmeierart"><strong>you can read all my recent published writing on Medium</strong></a></div>
        <br/>
        <Logo/>
      </div>
    )
  }
}
