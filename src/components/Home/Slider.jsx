import React from 'react'
import { ListFilter } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Slider from "react-slick";
import { slides } from '../../assets/assets';

const SliderHome = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className='hero'>
      <div className="categorias">
        <h2><ListFilter /> Explore por Categorias</h2>
        <div className="item">
          <NavLink to="/salao-de-beleza">Salão de Beleza</NavLink>
          <NavLink to="/maquiagem">Maquiagem & Estética</NavLink>
          <NavLink to="/cabelos">Cabelos & Penteados</NavLink>
          <NavLink to="/unhas">Design de Unhas</NavLink>
          <NavLink to="/servicos-graficos">Serviços Gráficos</NavLink>
          <NavLink to="/personalizacao">Personalização</NavLink>
          <NavLink to="/decoracao">Decoração</NavLink>
          <NavLink to="/buques">Buquês de Noiva</NavLink>

        </div>
      </div>
      <div className="slider">
        <Slider {...settings}>
          {slides.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.conteudo} alt="" />
              </div>
            )
          })}
        </Slider>
      </div>
    </section >
  )
}

export default SliderHome