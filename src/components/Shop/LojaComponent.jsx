import React, { useEffect, useState } from 'react'
import {ListFilter} from 'lucide-react'
import { assets } from '../../assets/assets'
import ProdutoProps from '../Props/ProdutoProps'

const LojaComponent = () => {
    const [sidebarShop, setSidebarShop] = useState(false)
    useEffect(()=>{
        console.log(sidebarShop)
    })
    return (
        <section className="shop">
            <div className="show-sidebar" onClick={()=> setSidebarShop(!sidebarShop)}>
                <h2><ListFilter size={25} /> Filtrar Por?</h2>
            </div>
            <div className={`sidebar ${sidebarShop ? 'active' : ''}`}>
                <h2>Filtrar por Categorias</h2>
                <div className="expand filtros">
                    <form>
                        <div className="filtro">
                            <h4>Categorias</h4>
                            <label><input type="checkbox" name="categoria" value="salao" /> Salão de Beleza</label>
                            <label><input type="checkbox" name="categoria" value="graficos" /> Serviços Gráficos</label>
                            <label><input type="checkbox" name="categoria" value="decoracao" /> Decoração</label>
                            <label><input type="checkbox" name="categoria" value="buque" /> Buquês de Noiva</label>
                        </div>

                        <div className="filtro">
                            <h4>Preço</h4>
                            <input type="number" name="precoMin" placeholder="Mín" />
                            <span> - </span>
                            <input type="number" name="precoMax" placeholder="Máx" />
                        </div>

                        <div className="filtro">
                            <h4>Ordenar por</h4>
                            <select name="ordenar">
                                <option value="mais-vendidos">Mais vendidos</option>
                                <option value="mais-recentes">Mais recentes</option>
                                <option value="preco-menor">Menor preço</option>
                                <option value="preco-maior">Maior preço</option>
                            </select>
                        </div>

                        <div className="filtro">
                            <h4>Promoções</h4>
                            <label><input type="checkbox" name="promocao" /> Apenas em promoção</label>
                        </div>

                        <div className="filtro">
                            <h4>Avaliação</h4>
                            <label><input type="radio" name="avaliacao" value="4" /> 4★ ou mais</label>
                            <label><input type="radio" name="avaliacao" value="3" /> 3★ ou mais</label>
                        </div>

                        <div className="filtro-actions">
                            <button type="submit">Aplicar Filtros</button>
                            <button type="reset">Limpar</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="navbar">
                <h1>✨ Nossa Loja</h1>
                <p>Explore os melhores produtos para transformar seu estilo e ocasiões especiais.</p>
                <form>
                    <input type="search" placeholder='Pesquise Por Alguma Coisa' />
                </form>
                <div className="prod">
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                </div>
            </div>
        </section>
    )
}

export default LojaComponent