import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFauxDOM } from 'react-faux-dom'
import artConcepts, { flatConcepts } from '../../data/artConcepts'
import { event as currentEvent } from 'd3-selection'
const d3 = { 
  ...require('d3'), 
  ...require('d3-force'), 
  ...require('d3-selection-multi'),
  ...require('d3-drag')
}
const stringify = require('json-stringify-safe')
// import * as d3 from 'd3'


class CloudNav extends Component {
  constructor (props) {
    super(props)
    this.state = { mindmap: 'loading', drag: 'finished', activeItems: flatConcepts }
    const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    binder(['callRender', 'renderD3'])
  }
  componentDidMount () {
    console.log(flatConcepts)
    this.callRender()
    // this.props.animateFauxDOM(800)
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   if (this.state.drag !== nextState.drag || this.props.mindmap !== nextProps.mindmap) {
  //     return true
  //   }
  //   return false
  // }

  componentDidUpdate (prevProps, prevState) {
    // if (this.props.mindmap !== prevProps.mindmap) {
    //   this.callRender()
    // }
    if (this.state.drag !== prevState.drag) {
      console.log(this.state.drag)
    }
  }

  callRender () {
    if (!this.mindmap && !this.props.mindmap) {
      this.mindmap = this.props.connectFauxDOM('div', 'mindmap')
      setTimeout(() => { this.callRender() }, 200)
    } else {
      this.renderD3(this.mindmap)
    }
  }

  async renderD3 (mindmap) {
    const that = this
    const svg = await d3.select(mindmap).append('svg')
    const w = typeof window !== 'undefined' ? window.innerWidth : 900
    const h = typeof window !== 'undefined' ? window.innerHeight : 500
    const radius = 20
    const labelDistance = 0
    const vis = svg
      .attr('width', w)
      .attr('height', h)
    const nodes = []
    const labelAnchors = []
    const labelAnchorLinks = []
    const links = []

    this.state.activeItems.forEach((concept, i) => {
      let node = { label: concept }
      nodes.push(node)
      labelAnchors.push({ node: node })
      labelAnchors.push({ node: node })
    })

    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < i; j++) {
        if (Math.random() > 0.95) links.push({
          source: i,
          target: j,
          weight: Math.random()
        })
      }
      labelAnchorLinks.push({
        source: i * 2,
        target: i * 2 + 1,
        weight: 1 })
    }
    console.log(labelAnchors);

    const force = d3
      .forceSimulation(nodes)
      .force('center', d3.forceCenter(w / 2, h / 2))
      .force('link', d3.forceLink(links)
        .id(d => d.index)
        .distance(50)
        // .distance(100)
        .strength(x =>  x.weight * 2) 
        // .strength(x =>  x.weight) 
      )
      .force('charge', d3.forceManyBody()
        .strength(-100)
        // .strength(0)
      )
      .force('x', d3.forceX(0))
      .force('y', d3.forceY(0))
      .force('collision', d3.forceCollide())
      .on('tick', ticked)
      

    const force2 = d3
      .forceSimulation(labelAnchors)
      .force('center', d3.forceCenter(w / 2, h / 2))
      .force('link', d3.forceLink(labelAnchorLinks)
        .id(d => d.index)
        .distance(0)
        // .strength(2) 
        .strength(2)
      )
      .force('charge', d3.forceManyBody()
        .strength(-200)
        // .strength(-1)
      )
      .force('x', d3.forceX(0))
      .force('y', d3.forceY(0))
      // .size([w, h])
      .force('collision', d3.forceCollide().radius(d => d.radius * 2))
      .on('tick', ticked)
      

    const link = vis
      .selectAll('line.link')
      .data(links)
      .enter()
      .append('svg:line')
      .attr('class', 'link')
      .style('stroke', '#CCC')

    const node = vis
      .selectAll('g.node')
      .data(force.nodes())
      .enter()
      .append('svg:g')
      .attr('class', 'node')
    node
      .append('svg:circle')
      .attr('r', 4)
      .style('fill', '#e50000')
      .style('stroke', '#FFF')
      .style('stroke-width', 3)




    const anchorLink = vis.selectAll('line.anchorLink').data(labelAnchorLinks) 
      .enter().append("svg:line").attr("class", "anchorLink").style("stroke", "#dddddd") // comment out for no link to node

    const anchorNode = vis
      .selectAll('g.anchorNode')
      .data(force2.nodes())
      .enter()
      .append('svg:g')
      .attr('class', 'anchorNode')
    anchorNode
      .append('svg:circle')
      .attr('r', 0)
      .style('fill', '#FFF')
    anchorNode
      .append('svg:text')
      .attr('class', 'anchorText')
      .text(function(d, i) {
        return i % 2 == 0 ? '' : d.node.label
      })
      .style('fill', '#555')
      .style('font-family', 'Arial')
      .style('font-weight', 'bold')
      .style('font-size', 12)
      .style('cursor', 'pointer')
    anchorNode
      .on('click', function (d) {    
        const thisNode = d3.select(this)
        const thisNodeText = thisNode._groups[0][0].childNodes[1]
        console.log(thisNode)
        thisNodeText.style.setProperty('font-weight', thisNodeText.style.fontWeight === 'bold' ? 'normal' : 'bold')
        thisNodeText.style.setProperty('fill', thisNodeText.style.fill === '#555' ? '#dbdbdb' : '#555')
        // that.setActiveItems(thisNodeText.text)
        that.props.onSetActiveItems(thisNodeText.text)   
        that.props.animateFauxDOM(800)
        console.log(that.props)
      })



    const updateLink = function(link) {
      link.attr('x1', function(d) {
        return d.source.x
      })
        .attr('y1', function(d) {
          return d.source.y
        })
        .attr('x2', function(d) {
          return d.target.x
        })
        .attr('y2', function(d) {
          return d.target.y
        })
    }

    const updateNode = function(node) {
      node.attr('transform', function(d) {
        return 'translate(' + d.x + ',' + d.y + ')'
      })
    }


    function ticked () {
      // console.log(anchorNode._groups[0][0])      

      node.call(updateNode)
      anchorNode.each(function(d, i) {
        if (i % 2 == 0) {
          d.x = d.node.x
          d.y = d.node.y
        } else {
          if (this.childNodes[1]) {
            const b = this.childNodes[1].getBBox
              ? this.childNodes[1].getBBox()
              : this.childNodes[1].getBoundingClientRect()

            // if (i === 5) console.log(b)

            const diffX = d.x - d.node.x
            const diffY = d.y - d.node.y

            const dist = Math.sqrt(diffX * diffX + diffY * diffY)
            if (b) {
              let shiftX = b.width * (diffX - dist) / (dist * 2)
              // let shiftY = b.height * (diffX - dist) / (dist * 2)
              // console.log(shiftX)
              shiftX = Math.max(-b.width, Math.min(0, shiftX))
              // shiftY = Math.max(-b.height, Math.min(0, shiftX))
              const shiftY = 2
              this.childNodes[1].setAttribute('transform', 'translate(' + shiftX + ',' + shiftY + ')')
            }
          }
        }
      })

      anchorNode.call(updateNode)
      link.call(updateLink)
      anchorLink.call(updateLink)

      // labelAnchorLinks.call
    }

    // const dragsubject = () => {
    //   console.log(force.find(currentEvent.sourceEvent.x, currentEvent.sourceEvent.y))
    //   return force.find(currentEvent.sourceEvent.x, currentEvent.sourceEvent.y, radius)
    // }

    const dragstarted = d => {
      if (!currentEvent.active) force.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
      this.setState({ drag: 'started' })
      this.props.animateFauxDOM(800)
    }

    const dragging = d => {
      d.fx = currentEvent.sourceEvent.x
      d.fy = currentEvent.sourceEvent.y
      this.setState({ drag: 'dragging' })
      this.props.animateFauxDOM(800)    
    }

    const dragended = d => {
      // console.log(d, currentEvent)      
      if (!currentEvent.active) force.alphaTarget(0)
      d.fx = null
      d.fy = null
      this.setState({ drag: 'finished' })      
      this.props.animateFauxDOM(800)
    }

    node.call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragging)
      .on("end", dragended)
    )


    this.props.animateFauxDOM(800)
    
  }

  // setActiveItems (newItem) {
  //   let newState = [...this.state.activeItems]
  //   const isActive = newState.indexOf(newItem) !== -1
  //   if (isActive) {
  //     newState = newState.filter(listItem => listItem !== newItem)
  //   } else {
  //     newState.push(newItem)
  //   }
  //   this.setState ({ activeItems: newState }, console.log(this.state.activeItems))
  // }

  render () {
    'rendering'
    return (
      <div className='cloud-nav'>{ this.props.mindmap || null }</div> 
    )
  }
}

export default withFauxDOM(CloudNav)
