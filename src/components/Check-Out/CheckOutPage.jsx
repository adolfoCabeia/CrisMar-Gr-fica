import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
    const navigate = useNavigate()
    return (
        <section className="checkout">
            <h2 className="checkout-title">Finalizar Compra</h2>
            <div className="container">
                <form>
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        <label htmlFor="nome">Nome completo</label>
                        <input
                            id="nome"
                            name="nome"
                            type="text"
                            required
                            placeholder="Ex.: João Silva"
                        />

                        <label htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="seu@exemplo.com"
                        />

                        <label htmlFor="telefone">Telefone</label>
                        <input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            placeholder="+244 9XX XXX XXX"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>
                        <label htmlFor="rua">Rua / Av.</label>
                        <input id="rua" name="rua" type="text" placeholder="Endereço Completo" required />

                        <div className="grid-2">
                            <div>
                                <label htmlFor="municipio">Município</label>
                                <input id="municipio" name="municipio" type="text" placeholder="Insira o seu Município" required />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Método de Pagamento</legend>
                        <label>
                            <input type="radio" name="pagamento" value="cartao" defaultChecked />
                            Cartão de Crédito / Débito
                        </label>
                        <label>
                            <input type="radio" name="pagamento" value="entrega" />
                            Pagamento na Entrega
                        </label>
                    </fieldset>

                    <button type="submit" onClick={()=>navigate('/success')} className="btn-comprar">Concluir Compra</button>
                </form>

                <div className="resumo">
                    <h2>Resumo do Pedido</h2>
                    <div className="prod-resume">
                        <img src={assets.Salao} alt="Produto" />
                        <p>4 unidades</p>
                    </div>
                    <div className="price-resume">
                        <h3>
                            Subtotal: <span>42 000kzs</span>
                        </h3>
                        <h3>
                            Frete: <span>8 000kzs</span>
                        </h3>
                        <h3 className="total">
                            Total: <span>50 000kzs</span>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckOutPage;
