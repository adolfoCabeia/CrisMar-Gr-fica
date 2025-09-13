import React from 'react'
import { categorias } from '../../assets/assets'

const Categorias = () => {
    return (
        <section className='categorias-cards'>
            {categorias.map((item) => {
                return (
                    <div className="card" key={item.id}>
                        <div className='overlay'></div>
                        <img src={item.conteudo} alt="" />
                        <h2>{item.text}</h2>
                    </div>
                )
            })}
        </section>
    )
}

export default Categorias