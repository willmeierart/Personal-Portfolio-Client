import React, {Component} from 'react'
import {GoMarkGithub} from 'react-icons/lib/go'

// const redux =require('../../styles/images/redux.png')
// const javascript =require('../../styles/images/javascript.png')
// const github =require('../../styles/images/github.png')
// const postgres =require('../../styles/images/postgres.png')
// const html =require('../../styles/images/html.png')
// const css =require('../../styles/images/css.png')
// const node =require('../../styles/images/node.png')
// const raspberrypi =require('../../styles/images/raspberrypi.png')
// const react = require('../../styles/images/react.png')
// const opengl = require('../../styles/images/opengl.png')
// const jade = require('../../styles/images/jade.png')


export default class IconSidebar extends Component {
  render() {
    return (
      <div className='side-icons'>
        {this.props.icons.map((icon, i)=>{
          return <img key={i} src={icon}/>})}
        <a target='_blank' href={this.props.github}> <GoMarkGithub/></a>
      </div>
    )
  }
}
