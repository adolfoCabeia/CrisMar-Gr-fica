import React, { useEffect, useState } from 'react'
import { ShoppingBasket, User, House, Info, MessageSquare, ShoppingCart } from "lucide-react"
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Header = () => {
    const [scrooled, setScrooled] = useState(false)

    useEffect(() => {
        const handleScrooled = () => {
            if (window.scrollY > 20) {
                setScrooled(true)
            } else {
                setScrooled(false)
            }
        }
        window.addEventListener("scroll", handleScrooled)

        return () => {
            window.removeEventListener("scroll", handleScrooled)
        }
    }, [])
    return (
        <header>
            <section className={`menu-desktop ${scrooled ? "scrooled" : ""}`}>
                <div className="barra"></div>
                <nav>
                    <ul>
                        <div className="cart">
                            <ShoppingBasket size={32} />
                            <span className='count'>0</span>
                        </div>
                        <li>
                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/sobre-nos'}>Sobre-nós</NavLink>
                        </li>

                        <div className="logo">
                            <img src={assets.Logo} alt="Logotipo da Gráfica" />
                        </div>
                        <li>
                            <NavLink to={'/loja'}>Loja</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/testemunhos'}>Testemunhos</NavLink>
                        </li>
                        <User size={32} />
                    </ul>
                </nav>
            </section>

            <section className="menu-mobile">
                <NavLink to={'/'} title='Início' className={({ isActive }) => isActive ? 'active' : ''}>
                    <House size={28} />
                </NavLink>

                <NavLink to={'/loja'} title='Loja'>
                    <ShoppingCart size={28} />
                </NavLink>

                <div className="logo-mobile">
                    <img src={assets.Logo} alt="Logo" />
                </div>

                <NavLink to={'/testemunhos'} title='Testemunhos'>
                    <MessageSquare size={28} />
                </NavLink>

                <NavLink to={'/sobre'} title='Sobre-nós'>
                    <Info size={28} />
                </NavLink>
            </section>

        </header>
    )
}

export default Header