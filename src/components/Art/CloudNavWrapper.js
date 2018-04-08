import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setActiveItems } from '../../actions'
import CloudNav from './CloudNavD3'



class CloudNavWrapper extends Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {

  }

  render() {
    return (
      <div className='cloud-nav-wrapper'>
        <CloudNav {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeItems: state.art.activeItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetActiveItems: item => dispatch(setActiveItems(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CloudNavWrapper)
// export default CloudNav