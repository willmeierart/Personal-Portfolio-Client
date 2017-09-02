import React, {Component} from 'react'
import Spinner from './Spinner'

export default class Splash extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  render() {
    return (
      <div className='splash'>
        <Spinner className='spinner-L'/>
        <div className='splash-initials'> WM </div>
        <Spinner className='spinner-R'/>
      </div>
    )
  }
}
