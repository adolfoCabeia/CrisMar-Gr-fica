import React from 'react'
import SliderHome from '../components/Home/Slider'
import Beneficios from '../components/Home/Beneficios'
import Categorias from '../components/Home/Categorias'
import Servicos from '../components/Home/Servicos'


const Home = () => {
  return (
    <section className='home'>
      <SliderHome/>
      <Beneficios/>
      <Categorias/>
      <Servicos/>
    </section>
  )
}

export default Home