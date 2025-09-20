import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Loja from './Pages/Loja'
import Testemunhos from './Pages/Testemunhos'
import SobreNos from './Pages/SobreNos'
import Layout from './Layout/Layout'
import Carrinho from './Pages/Carrinho'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import CheckOutPage from './components/Check-Out/CheckOutPage'
import Recibo from './components/Success/Recibo'

const AppRoute = () => {
  return (
    <>
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/loja' element={<Loja/>}/>
            <Route path='/testemunhos' element={<Testemunhos/>}/>
            <Route path='/sobre-nos' element={<SobreNos/>}/>
            <Route path='/carrinho' element={<Carrinho/>}/>
            <Route path='/logar' element={<Login/>}/>
            <Route path='/registrar' element={<Register/>}/>
            <Route path='/check-out' element={<CheckOutPage/>}/>
            <Route path='/success' element={<Recibo/>}/>
        </Routes>
        </Layout>
    </BrowserRouter>
    </>
  )
}

export default AppRoute