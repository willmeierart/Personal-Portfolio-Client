import React, {Component} from 'react'
import Logo from '../Core/Logo'

export default class Placeholder extends Component {
  render() {
    return (
      <div className='Placeholder'><br/>
        <div style={{width:'100%',textAlign:'center'}}>UNDER CONSTRUCTION... for now: <a href="http://willmeier.co/"><strong>my beautiful pre-developer wordpress art portfolio site</strong></a></div>
        <br/><Logo/>
      </div>
    )
  }
}
