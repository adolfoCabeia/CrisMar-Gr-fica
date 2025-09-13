import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/estilosGlobais.css'
import './Styles/index.css'
import './Styles/responsividadeIndex.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
