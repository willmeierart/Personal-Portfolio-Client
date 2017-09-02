import React, {Component} from 'react'
import Logo from './Core/Logo'

export default class Bio extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className='process'>
          <br/>
          <div style={{width:'100%',textAlign:'center'}}>UNDER CONSTRUCTION...</div>
          <br/>
          <Logo/>
        </div>
      </div>
    )
  }
}
