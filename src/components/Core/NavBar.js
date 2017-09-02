import React, {Component} from 'react'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import categories from '../../data/categories'



export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state={strong:'',selected:'',hovered:''}
    const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    binder(['renderLinks','showTaglines', 'hideTaglines'])
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.accentTag!==this.state.strong){
      this.setState({strong:nextProps.accentTag})
    }
  }

  showTaglines(tagline){this.setState({hovered:tagline})}
  hideTaglines(){this.setState({hovered:''})}

  renderLinks(){
    return _.map(categories, (category)=>{
      let stylin = {}
      let k = 'a'
      if (this.props.activeLink==category.title){
        stylin.fontWeight=700
      }
      if(this.state.strong!=category.title){
        stylin.opacity=.5
        k='b'
      }
      return(
        <ReactCSSTransitionReplace
            key={category.title}
            transitionName="cross-fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
          <div key={category.title+k}>
            <Link style={stylin}
              to={category.href}
              className="navbar-item"
              onMouseEnter={()=>this.showTaglines(category.title)}
              onMouseLeave={this.hideTaglines}>
                {/*{this.state.hovered==category.title ? category.tagline : category.title}*/}
                {category.title}
            </Link>
          </div>
        </ReactCSSTransitionReplace>
    )})
  }
  render() {
    return (
      <div className='navbar'>
        {this.renderLinks()}
      </div>
    )
  }
}
