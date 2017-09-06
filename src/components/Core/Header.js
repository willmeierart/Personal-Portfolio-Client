import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import Logo from './Logo'
import Tagline from './Tagline'
import ContactIcons from './Contact'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLink:'web',
      accentTag:''
    }
    this.accentLink=this.accentLink.bind(this)
  }
  accentLink(link){
    this.setState({accentTag:link})
  }

  render() {
    return (
      <div>
        <header>
          <div className="title">
            <Link to='/tech'>
              <Logo/>
            </Link>
            <h1>WILL MEIER</h1>
            <Tagline accentLink={this.accentLink}/>
          </div>
          <hr/>
          <NavBar activeLink={this.state.activeLink} accentTag={this.state.accentTag}/>
        </header>
      </div>

    )
  }
}
