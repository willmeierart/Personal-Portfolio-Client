import React, {Component} from 'react'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactCSSTransitionReplace from 'react-css-transition-replace'


export default class Tagline extends Component {
  constructor(props) {
    super(props)
    this.state = {currentTag:'who'}
    const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
   binder(['tagSwitcher', 'sendUpTag'])
  }
  componentWillMount(){
    let current = ''
    this.tagSwitcher()
  }
  sendUpTag(tag){
    switch(tag){
      case 'developer':
        tag = 'web'
        break;
      case 'designer':
        tag = 'etc'
        break;
      case 'artist':
        tag = 'art'
        break;
      case 'writer':
        tag = 'txt'
        break;
      default:
        tag = 'who'
        break;
    }
    this.props.accentLink(tag)
  }
  tagSwitcher(){
    const options = ['developer', 'artist', 'writer', 'designer']
    let i=0
    return setInterval(()=>{
      this.setState({currentTag:options[i]})
      this.sendUpTag(options[i])
      ++i
      if(i===options.length){i=0}
    },1500)
  }
  render() {
    return (
      <div className="tagline">
        <ReactCSSTransitionReplace
          transitionName="cross-fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <div key={this.state.currentTag}>{this.state.currentTag}</div>
        </ReactCSSTransitionReplace>
      </div>
    )
  }
}
