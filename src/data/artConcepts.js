import values from 'lodash.values'

const artConcepts = {
  context: {
    cubism: true,
    representation: true
  },
  dimensions: {
    digital: true,
    _2D: true,
    _3D: true,
    _4D: true
  },
  material: {
    glass: true,
    plexiglass: true,
    projection: true,
    oil: true
  },
  media: {
    painting: true,
    sculpture: true,
    design: true,
    text: true,
    projection: true,
    digital: true,
    video: true,
    installation: true
  },
  themes: {
    mindmaps: true,
    constellations: true,
    landscapes: true,
    forts: true,
    architecture: true,
    conceptual: true,
    digital: true,
    writing: true,
    light: true,
    reflections: true,
    imageObjects: true,
    objectImages: true 
  }
}

export default artConcepts 

export const flatConcepts = values(artConcepts)
  .reduce((flatArray, topic) => flatArray.concat(Object.keys(topic)),[])
  .map(concept => concept.replace('_', ''))
