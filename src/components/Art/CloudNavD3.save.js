import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withFauxDOM } from 'react-faux-dom'
import artConcepts, { flatConcepts } from '../../data/artConcepts'
const d3 = { 
  ...require('d3'), 
  ...require('d3-force'), 
  ...require('d3-selection-multi')
}
// import * as d3 from 'd3'


class CloudNav extends Component {
  constructor (props) {
    super(props)
    const binder=(Ms)=>{Ms.forEach(m=>this[m]=this[m].bind(this))}
    // binder(['renderD3'])
  }
  componentDidMount () {
    console.log(flatConcepts)
    const faux = this.props.connectFauxDOM('div', 'mindmap')
    this.renderD3(faux)
    // this.props.animateFauxDOM(800)
  }
  renderD3 (mindmap) {
    // console.log(this);
    const svg = d3.select(mindmap).append('svg')
    const w = typeof window !== 'undefined' ? window.innerWidth : 900
    const h = typeof window !== 'undefined' ? window.innerHeight : 500
    const labelDistance = 0
    const vis = svg
      .attr('width', w)
      .attr('height', h)
    const nodes = []
    const labelAnchors = []
    const labelAnchorLinks = []
    const links = []

    flatConcepts.forEach((concept, i) => {
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
      labelAnchorLinks.push({ source: i * 2, target: i * 2 + 1, weight: 1 })
    }
    console.log(labelAnchors);

    const force = d3
      .forceSimulation(nodes)
      .force('center', d3.forceCenter(w / 2, h / 2))
      // .force('link').links(links)
      .force('link', d3.forceLink(links).id(d => d.index)
        .distance(50)
        .strength(x => x.weight * 10)
      )
      .force('charge', d3.forceManyBody().strength(-3000))
      // .force('gravity', 1)

    const force2 = d3
      .forceSimulation(labelAnchors)
      .force('center', d3.forceCenter(w / 2, h / 2))
      // .force('link').links(idAnchorLinks)      
      .force('link', d3.forceLink(labelAnchorLinks).id(d => d.index)
        .distance(0)
        .strength(8) 
      )
      .force('charge', d3.forceManyBody().strength(-3000))
      // .force('gravity', 0)

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
      .attr('r', 5)
      .style('fill', '#555')
      .style('stroke', '#FFF')
      .style('stroke-width', 3)

    node.call(d3.drag)

    const anchorLink = vis.selectAll('line.anchorLink').data(labelAnchorLinks) //.enter().append("svg:line").attr("class", "anchorLink").style("stroke", "#999");

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
      .text(function(d, i) {
        return i % 2 == 0 ? '' : d.node.label
      })
      .style('fill', '#555')
      .style('font-family', 'Arial')
      .style('font-size', 12)

    var updateLink = function() {
      this.attr('x1', function(d) {
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

    var updateNode = function(e) {
      console.log(e._groups)
      // console.log(this._groups);
      // if (this !== null) {
        this.attr('transform', function(d) {
          return 'translate(' + d.x + ',' + d.y + ')'
        })
      // }
    }
    console.log(node)
    console.log(node.nodes())
    console.log(node._groups);
    console.log(anchorNode);

    force.on('tick', function() {
      // force2.restart()

      node.call(updateNode)

      anchorNode.each(function(d, i) {
        if (i % 2 == 0) {
          d.x = d.node.x
          d.y = d.node.y
        } else {
          var b = this.childNodes[1].getBBox()
          console.log(b);

          var diffX = d.x - d.node.x
          var diffY = d.y - d.node.y

          var dist = Math.sqrt(diffX * diffX + diffY * diffY)

          var shiftX = b.width * (diffX - dist) / (dist * 2)
          shiftX = Math.max(-b.width, Math.min(0, shiftX))
          var shiftY = 5
          // this.childNodes[1].setAttribute('transform', 'translate(' + shiftX + ',' + shiftY + ')')
        }
      })

      anchorNode.call(updateNode)

      link.call(updateLink)
      anchorLink.call(updateLink)
    })

    console.log(svg);
    // return svg.toReact()
    // this.props.animateFauxDOM(800)
    
  }
  render () {
    return (
      <div className='cloud-nav'>{ this.props.mindmap }</div> 
    )
  }
}

export default withFauxDOM(CloudNav)
