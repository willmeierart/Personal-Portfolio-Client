import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import AppProvider from './_config/AppProvider'
import registerServiceWorker from './_config/registerServiceWorker'

ReactDOM.render(<AppProvider/>, document.getElementById('root'))
registerServiceWorker()
