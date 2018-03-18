import React, {Component} from 'react'
import ScrollLock from 'react-scrolllock'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import art from '../../data/art'
import Placeholder from '../Core/Placeholder'
import Thumbnail from './Thumbnail'
import CloudNavWrapper from './CloudNavWrapper'

export default class Art extends Component {
  constructor(props) {
    super(props)
    this.state={carouselMode:false, chosenSet:''}
    const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    binder(['renderThumbs','openCarousel'])
  }
  openCarousel(){
    this.setState({carouselMode: true})
  }
  renderThumbs(){
    return art.map((cat,i)=>{
      const rand = Math.floor(Math.random()*cat.length)
      return(
        <Thumbnail key={`${cat[rand].url}`}
          portrait={cat[rand].portrait}
          src={cat[rand].url}
          openCarousel={this.openCarousel}/>
    )})
  }
  render() {
    return (
      <div className='art-main'>
        {/*<Placeholder/>*/}
        {/*<ScrollLock/>*/}
          <CloudNavWrapper />
          {/* <ReactCSSTransitionGroup
            component='div'
            className='thumbs-container'
            transitionName="quick-fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {this.renderThumbs()}
          </ReactCSSTransitionGroup> */}
      </div>
    )
  }
}
