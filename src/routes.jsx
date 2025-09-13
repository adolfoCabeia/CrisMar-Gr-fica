import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Loja from './Pages/Loja'
import Testemunhos from './Pages/Testemunhos'
import SobreNos from './Pages/SobreNos'
import Layout from './Layout/Layout'

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
        </Routes>
        </Layout>
    </BrowserRouter>
    </>
  )
}

export default AppRoute