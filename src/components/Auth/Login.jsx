import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <section className="login">
      <div className="container">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <input type="email" name="email" id="email" placeholder='Email' />
            <input type="password" name="password" id="password" placeholder='Palavra Passe' />
            <p>Esqueceu a sua senha?</p>
           <div className="button">
             <button type="submit">Entrar</button>
           </div>
          </form>
        </div>
        <div className="register-form">
          <h2>Bem-vindo!</h2>
          <p>Crie a sua conta e aproveite todas as vantagens da nossa loja online.</p>
          <button onClick={()=>navigate('/registrar')}>Registrar-se</button>
        </div>
      </div>
    </section>
  )
}

export default Login