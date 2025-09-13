import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer>
            <div className="newsletter">
                <div className="txt">
                    <h2>Newsletter</h2>
                    <p>Receba novidades e promoções no seu e-mail</p>
                </div>
                <form>
                    <input type="email" name="search" id="search" placeholder='Insira Aqui o seu E-mail' />
                    <button type='submit'>Subscrever</button>
                </form>
            </div>

            <div className="footer">
                <div className="image">
                    <img src={assets.Logo} alt="Lotipo da CrisMar Gráfica" />
                    <h6><MapPin /> Estamos Localizados no Calemba 2</h6>
                </div>
                <nav className="links">
                    <h3>Links Rápidos</h3>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    <NavLink to={'/sobre-nos'}>Sobre-nós</NavLink>
                    <NavLink to={'/loja'}>Loja</NavLink>
                    <NavLink to={'/testemunhos'}>Testemunhos</NavLink>
                    <NavLink to={'/contactos'}>Contactos</NavLink>
                </nav>

                <nav className="links">
                    <NavLink to={'/pedidos'}>Meus Pedidos</NavLink>
                    <NavLink to={'/rastrear-pedido'}>Rastrear Pedido</NavLink>
                    <NavLink to={'/pedido-status'}>Status do Pedido</NavLink>
                </nav>

                <nav className="links">
                    <h3>Informações de contactos</h3>
                    <h5><Mail /> cabeiaadolfo6@gmail.com</h5>
                    <h5><Phone /> +244 928 328 205 / +244 957 236 001</h5>
                </nav>
            </div>

            <div className="end">
                <h4>{year} Copyright &copy; <span>CRISMAR GRÁFICA</span>, Todos os direitos reservados</h4>
                <div className="icones">
                    <Facebook size={32} className='face' />

                    <MessageCircle size={32} className='whats' />

                    <div className="instagram-icon">
                        <Instagram size={32} className='insta'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer