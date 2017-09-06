import React, {Component} from 'react'

export default class Thumbnail extends Component {
  render() {
    return (
      <div className='thumbnail' onClick={this.props.openCarousel}>
        <img ref='img' style={{objectFit:'cover', objectPosition:'center', [this.props.portrait ? 'width' : 'height']:'100%'}} src={this.props.src}/>
      </div>
    )
  }
}
