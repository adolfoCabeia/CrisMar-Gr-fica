import React from 'react'
import { assets } from '../../assets/assets'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const CarrinhoList = () => {
  const navigate = useNavigate()
  return (
    <section className='carrinho'>
      <h1>🛒 Carrinho</h1>
      <p>
        Aqui você encontra todos os produtos que adicionou e pode finalizar sua compra de forma rápida e segura.
      </p>
      <div className="container">
        <div className="listProd">
          <div className="order-by">
            <select name="ordenar" id="ordenar">
              <option value="" defaultValue>Filtrar Por</option>
              <option value="Salão_Beleza">Salão de Beleza</option>
              <option value="buque_noiva">Buquê de Noiva</option>
            </select>
          </div>
          <div className="cart-list">
            <div className="card-cart">
              <div className="desc">
                <img src={assets.Decoracao} alt="Decoração" />
                <div className="txt">
                  <h2>Make Up</h2>
                  <h5>Salão de Beleza</h5>
                  <h2 className="price">9 000 kzs</h2>
                </div>
              </div>
              <div className="quantidade">
                <input type="number" value={2} name="quantidade" min={1} id="quantidade" />
              </div>
              <button><Trash2 /></button>
            </div>
            <div className="card-cart">
              <div className="desc">
                <img src={assets.Decoracao} alt="Decoração" />
                <div className="txt">
                  <h2>Make Up</h2>
                  <h5>Salão de Beleza</h5>
                  <h2 className="price">9 000 kzs</h2>
                </div>
              </div>
              <div className="quantidade">
                <input type="number" value={2} name="quantidade" min={1} id="quantidade" />
              </div>
              <button><Trash2 /></button>
            </div>
            <div className="card-cart">
              <div className="desc">
                <img src={assets.Decoracao} alt="Decoração" />
                <div className="txt">
                  <h2>Make Up</h2>
                  <h5>Salão de Beleza</h5>
                  <h2 className="price">9 000 kzs</h2>
                </div>
              </div>
              <div className="quantidade">
                <input type="number" value={2}  name="quantidade" min={1} id="quantidade" />
              </div>
              <button><Trash2 /></button>
            </div>
          </div>
        </div>
        <div className="resumo_cart">
          <div className="resume">
            <h3>Resumo</h3>
            <input type="range" name="" id="" min={100} max={10000} />
            <h6><span>9200</span>Kzs até frete grátis</h6>
            <div className="conta-cart">
              <h3>Subtotal: <span>42 000kzs</span></h3>
              <h3>Frete: <span>8 000kzs</span></h3>
              <h3>Total: <span>50 000kzs</span></h3>
            </div>
            <button onClick={()=>navigate('/check-out')}>Proceder para checkout</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarrinhoList