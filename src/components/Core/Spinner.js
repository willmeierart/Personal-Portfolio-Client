import React, {Component} from 'react'
import {AnimationGroup, Animatable} from 'react-web-animation'

export default class Spinner extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  render() {
    return (
      <div className='spinner-wrapper'>
        <div className={`spinner ${this.props.className}`}/>
        <div className={`spinner-line-mask ${this.props.className}`}>
          <div className={`spinner-line ${this.props.className}`}/>
        </div>
      </div>

    )
  }
}
