import React, {Component} from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.renderIcons=this.renderIcons.bind(this)
  }
  renderIcons(){
    return [1,2,3,4,5,6].map((x,i)=>{
      return (<div key={i} className='icon'></div>)
    })
  }
  render() {
    return (
      <footer>
        {this.renderIcons()}
      </footer>
    )
  }
}
