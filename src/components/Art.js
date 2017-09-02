import React, {Component} from 'react'
import Logo from './Core/Logo'

export default class Art extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  render() {
    return (
      <div className='art-main'>
        <br/>
        <div style={{width:'100%',textAlign:'center'}}>UNDER CONSTRUCTION... for now: <a href="http://willmeier.co/"><strong>my beautiful pre-developer wordpress art portfolio site</strong></a></div>
        <br/>
        <Logo/>
      </div>
    )
  }
}
