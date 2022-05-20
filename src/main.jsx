import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Page/Home'
import { GlobalStyled } from './global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyled />
  </React.StrictMode>
)
