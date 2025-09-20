import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/estilosGlobais.css'
import './Styles/index.css'
import './Styles/responsividadeIndex.css'
import './Styles/responsividadeLoja.css'
import './Styles/lojaStyle.css'
import './Styles/carrinho.css'
import './Styles/responsividadeCarrinho.css'
import './Styles/auth.css'
import './Styles/responsividadeAuth.css'
import './Styles/ckeckout.css'
import './Styles/checkOut-Responsive.css'
import './Styles/success.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
