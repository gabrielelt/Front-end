import React from 'react'
import ReactDOM from 'react-dom/client'
import './Components/home/style.css'

import Cabecalho from './Components/home/Cabecalho.jsx'
import ScrollInicial from './Components/home/scroll_inicial.jsx'
import SegundoScroll from './Components/home/segundo_scroll.jsx'
import TerceiroScroll from './Components/home/terceiro_scroll.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecalho/>
    <ScrollInicial/>
    <SegundoScroll/>
    <TerceiroScroll/>
  </React.StrictMode>,
)
