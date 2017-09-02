import redux from '../styles/images/redux.png'
import javascript from '../styles/images/javascript.png'
import github from '../styles/images/github.png'
import postgres from '../styles/images/postgres.png'
import html from '../styles/images/html.png'
import css from '../styles/images/css.png'
import node from '../styles/images/node.png'
import raspberrypi from '../styles/images/raspberrypi.png'
import react from '../styles/images/react.png'
import opengl from '../styles/images/opengl.png'
import jade from '../styles/images/jade.png'
import canvas from '../styles/images/canvas.png'


const techprojects = [
  {
    title:'Clyfford Still Museum Kiosks',
    description:'A custom video-player web-app interface developed for in-gallery touchscreen kiosks at the Clyfford Still Museum. Built with React/Redux, implementing several animation libraries and a browser-cached data store, with a Node backend proxy/database. Contracted during July-August 2017 during Quarter 3 of Galvanize Web Development Immersive.',
    technologies:[react,redux,javascript,node,postgres],
    url:'http://video.clyffordstillmuseum.org/kiosk/',
    github:'https://github.com/willmeierart/CSM-KIOSKS-public',
    images:['https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/CSMkiosks1.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/CSMkiosks2.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/CSMkiosks3.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/CSMkiosks4.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/CSMkiosks5.jpg']
  },
  {
    title:'CONSTELLATION',
    description:"CONSTELLATION is a participatory creative-tech experiment in IoT. Its main output is a 64x32 pixel LED matrix module, driven by a Raspberry Pi running a Node app, updated in realtime via a live interface powered by Socket IO. The interface, built with React/Redux is minimal: a grid of clickable dots, one for each of the pixels of the LED matrix, can be changed to any color selected via a color slider component in the header. Below this grid you can see how many people are currently using the app, a number only limited by how many people have the login password (it's 'stars').",
    technologies:[raspberrypi,react,redux, canvas,javascript,node,postgres],
    url:'https://constellation.fun/',
    github:'https://github.com/willmeierart/client/tree/master/my-app',
    images:['https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/constellation1.JPG', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/constellation2.JPG', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/constellation5.JPG', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/constellation6.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/constellation7.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/constellation8.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/constellation9.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/constellation10.JPG']
  },
  {
    title:'OPEN: ArtScene',
    description:"Using Facebook Graph API with OAuth to source dynamic data from a curated list of Denver's best art galleries, OPEN is a map-centered, calendar-driven interface that allows users to know what is going on in the 'real' art scene, today.",
    technologies:[javascript,css,html],
    url:'https://openartscenedenver.online/',
    github:'https://github.com/willmeierart/OPEN-ArtScene',
    images:['https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/open1.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/open2.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/open3.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/open4.jpg']
  },
  {
    title:'DIALOC',
    description:'For any point on Earth, there is one on exactly the other side - its antipode. DIALOC is a graphical interface, using WebGL Earth, several Google geo-APIs and a full-auth CRUD model, for a unique user experience of seeking and saving these isolated phenomena.',
    technologies:[javascript,css,html,node,opengl],
    url:'https://dialoc.world/',
    github:'https://github.com/willmeierart/DIALOC-client',
    images:['https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/dialoc1.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/dialoc2.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/dialoc3.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/dialoc4.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/dialoc5.jpg']
  },
  {
    title:'Jim Woodfill Artist Portfolio Archives',
    description:'Express app built on top of are.na platform as a sort of CMS. Server-side rendered with Pug to emulate pre-existing portfolio site.',
    technologies:[javascript, css, jade, node],
    url:'http://woodfill-archive.herokuapp.com/',
    github:'https://github.com/willmeierart/woodfill-archive',
    images:['https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/woodfillarchive1.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/woodfillarchive2.jpg', 'https://s3-us-west-1.amazonaws.com/will-meier-tech-screenshots/woodfillarchive3.jpg']
  }
]

export default techprojects
