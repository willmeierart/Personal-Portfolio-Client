import React, {Component} from 'react'
import NavBar from './HeaderNav'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>WILL MEIER</h1>
        <NavBar/>
      </div>
    )
  }
}
