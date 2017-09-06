import React, {Component} from 'react'
import Logo from './Core/Logo'
import headshot from '../styles/images/bio_headshot.jpg'

export default class Bio extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className='bio'>
          <br/>
          {/*<div style={{width:'100%',textAlign:'center'}}>UNDER CONSTRUCTION...</div>
          <br/>
          <Logo/>*/}

          <div className='bio-text'>
            <div className='backsplash'/>
            As a design-minded-artist-slash-writer-turned-developer with a background in museum work, creativity has always been…important. I was a Lego kid who grew up playing with the PCs my Texas Instruments engineer dad brought home all the time.
            I studied painting, made conceptual light art, got obsessed with philosophy, and was awarded a yearlong writing residency. I started building dinosaurs, then installing art professionally. Several years down this road found me building world-class exhibits at Denver Art Museum, writing about art for the Denver Post’s lead critic, and deciding it was finally time to make The Leap I had been thinking and talking about for so long.
            I’ll go light on the theory, but for a long time, I’ve viewed technology as the most important creative practice of our time. The traditional role of art — if you think that consists of a sort of magical practice that has the ability to affect people’s perceptions and appreciations of the world even after the interactions cease — that’s tech now. Uniquely situated in a position to affect people who don’t even mean to be affected. Very much unlike art.
            Code is a beautiful medium, and I’m excited to now be able to use it to make exciting ideas come to digital life. Eventually, I want to be involved in The Future Of The Museum Experience, but currently, I’m trying to spend the next chapter of my career honing this craft in some sort of designer/developer context where I can truly use both sides of the brain.
          </div>
        </div>
      </div>
    )
  }
}
