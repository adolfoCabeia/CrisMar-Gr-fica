import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    return (
        <section className="login">
            <div className="container">
                <div className="login-form">
                    <h2>Se Inscrever</h2>
                    <form>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            placeholder="Nome Completo"
                            required
                        />

                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Nome de Usuário"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                        />

                        <input
                            type="tel"
                            name="telefone"
                            id="telefone"
                            placeholder="Telefone"
                        />

                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Palavra Passe"
                            required
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirmar Palavra Passe"
                            required
                        />
                        <div className="button">
                            <button type="submit">Registrar</button>
                        </div>
                    </form>
                </div>
                <div className="register-form">
                    <h2>Bem-vindo!</h2>
                    <p>Já possui uma conta? Clique no botão abaixo para aceder à sua área reservada e iniciar a sessão de forma rápida e segura.</p>
                    <button onClick={() => navigate('/logar')}>Iniciar Sessão</button>

                </div>
            </div>
        </section>
    )
}

export default Register