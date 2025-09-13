import React from 'react'
import { assets } from '../../assets/assets'

const Beneficios = () => {
    return (
        <section className="beneficios">
            <div className="desc">
                <img src={assets.Entrega} alt="" />
                <div className="txt">
                    <h2>Entrega Gratuita</h2>
                    <p>Entrega Gratuita em compras apartir de 5 000kzs</p>
                </div>
            </div>
            <div className="desc">
                <img src={assets.Precos_baixo} alt="" />
                <div className="txt">
                    <h2>Preços baixos</h2>
                <p>Compre com tranquilidade! opções de pagamento 100% seguras.</p>
                </div>
            </div>
            <div className="desc">
                <img src={assets.Pagamento_seguro} alt="" />
                <div className="txt">
                    <h2>Pagamento Seguro</h2>
                <p>para um sistema em que os clientes obtenham um desconto.</p>
                </div>
            </div>
        </section>
    )
}

export default Beneficios