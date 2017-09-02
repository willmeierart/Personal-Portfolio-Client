import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {FaBars, FaChevronRight} from 'react-icons/lib/fa'
import SocialIcons from './SocialIcons'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state={sidebarOpen:false}
    const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    binder(['openSidebar'])
  }
  openSidebar(){
    this.setState({sidebarOpen:this.state.sidebarOpen?false:true})
  }
  render() {
    return (
      <div>
        <div className='sidebar'>
          {/*<div className='menu-btn' onClick={this.openSidebar}>
            {this.state.sidebarOpen ? <FaChevronRight/> : <FaBars/>}
          </div>
          <div className='sideways-wrapper'>
            <div className='sideways-nav'> this | location | plus | path | history </div>
          </div>*/}
          <SocialIcons/>
          <ReactCSSTransitionGroup
              component='div'
              transitionName="sidebar-open"
              transitionEnterTimeout={600}
              transitionLeaveTimeout={600}>
            {this.state.sidebarOpen &&
            <div key='sidebar' className='menu'></div>}
          </ReactCSSTransitionGroup>
        </div>

      </div>

    )
  }
}
