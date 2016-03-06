
import React, { Component } from 'react'

import Thumbnail from './Thumbnail'
import Overlay from './Overlay'

import '../styles/Tile.scss'

class Tile extends Component {

  state = {
    overlay: false
  }

  showOverlay = () => !this.state.showOverlay && this.setState({ overlay: true })
  hideOverlay = () => this.setState({ overlay: false })

  render () {

    const { template } = this.props

    return (
      <div className='template' onMouseOver={this.showOverlay} onMouseLeave={this.hideOverlay}>
        <Overlay template={template} visible={this.state.overlay}/>
        <div className='template-wrapper'>
          <Thumbnail template={template} />
        </div>
        <span className='template-info'>
          {template.get('name')}
        </span>
      </div>
    )
  }
}

export default Tile
