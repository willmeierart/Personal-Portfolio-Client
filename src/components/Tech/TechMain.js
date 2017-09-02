import React, {Component} from 'react'
import techprojects from '../../data/techprojects'
import TechProject from './TechProject'

export default class TechMain extends Component {
  constructor(props) {
    super(props)
    // this.state={}
    // const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder([''])
  }
  render() {
    const projects = techprojects.map((project,i)=>(
      <div key={i}><TechProject data={project}/><hr/></div>))
    return (
      <div className='tech-main'>
        <h1>Tech Projects</h1>
        {projects}
      </div>
    )
  }
}
