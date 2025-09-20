import React from 'react'
import { assets } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import ProdutoProps from '../Props/ProdutoProps';
const Servicos = () => {

    return (
        <section className="servicos">
            <h2>Nossos <span>Produtos</span> e <span>Serviços</span></h2>
            <div className="descricoes">
                <div className="salao_beleza">
                    <div className="card-principal">
                        <div className="overlay"></div>
                        <img src={assets.Salao_Servicos} alt="" />
                        <h2>Salão de Beleza</h2>
                    </div>
                    <div className="servico">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                480: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Salao_Card} alt="" />
                                    <div className="nome-produto">
                                        <h3>Make Up</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Agendar</button>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Salao_Card} alt="" />
                                    <div className="nome-produto">
                                        <h3>Make Up</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Agendar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Salao_Card} alt="" />
                                    <div className="nome-produto">
                                        <h3>Make Up</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Agendar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Salao_Card} alt="" />
                                    <div className="nome-produto">
                                        <h3>Make Up</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Agendar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Salao_Card} alt="" />
                                    <div className="nome-produto">
                                        <h3>Make Up</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Agendar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Salao_Card} alt="" />
                                    <div className="nome-produto">
                                        <h3>Make Up</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Agendar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Salao_Card} alt="" />
                                    <div className="nome-produto">
                                        <h3>Make Up</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Agendar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Salao_Card} alt="" />
                                    <div className="nome-produto">
                                        <h3>Make Up</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Agendar</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
                <div className="salao_beleza grafica_servicos">
                    <div className="card-principal">
                        <div className="overlay"></div>
                        <img src={assets.Grafica_Servicos} alt="" />
                        <h2>Serviços Gráficos e Personalização</h2>
                    </div>
                    <div className="servico">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                480: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Grafica} alt="" />
                                    <div className="nome-produto">
                                        <h3>Timbragens de Camisolas</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Grafica} alt="" />
                                    <div className="nome-produto">
                                        <h3>Quadro Digital</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Grafica} alt="" />
                                    <div className="nome-produto">
                                        <h3>Timbragens de Camisolas</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Grafica} alt="" />
                                    <div className="nome-produto">
                                        <h3>Timbragens de Camisolas</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Grafica} alt="" />
                                    <div className="nome-produto">
                                        <h3>Timbragens de Camisolas</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Grafica} alt="" />
                                    <div className="nome-produto">
                                        <h3>Timbragens de Camisolas</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                <div className="salao_beleza">
                    <div className="card-principal">
                        <div className="overlay"></div>
                        <img src={assets.Decoracao_servicos} alt="" />
                        <h2>Serviços de Decoração</h2>
                    </div>
                    <div className="servico">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                480: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Decoracao} alt="" />
                                    <div className="nome-produto">
                                        <h3>Decoração de Festas Infantil</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Decoracao} alt="" />
                                    <div className="nome-produto">
                                        <h3>Decoração de Casamentos</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Decoracao} alt="" />
                                    <div className="nome-produto">
                                        <h3>Decoração de Casamentos</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Decoracao} alt="" />
                                    <div className="nome-produto">
                                        <h3>Decoração de Casamentos</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Decoracao} alt="" />
                                    <div className="nome-produto">
                                        <h3>Decoração de Casamentos</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Decoracao} alt="" />
                                    <div className="nome-produto">
                                        <h3>Decoração de Casamentos</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Decoracao} alt="" />
                                    <div className="nome-produto">
                                        <h3>Decoração de Casamentos</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Decoracao} alt="" />
                                    <div className="nome-produto">
                                        <h3>Decoração de Casamentos</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card">
                                    <img src={assets.Decoracao} alt="" />
                                    <div className="nome-produto">
                                        <h3>Decoração de Casamentos</h3>
                                    </div>
                                    <div className="price">
                                        <h4 className='price_recent'>20 500kzs</h4>
                                        <h4 className='price_last'>23 500kzs</h4>
                                    </div>

                                    <div className="button">
                                        <button>Solicitar</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>

                <div className="prod-card">
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Decoracao} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Decoracao} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Slide2} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                    <ProdutoProps image={assets.Grafica} nomeProduto="Buquê de noiva" precoNovo="19 000kzs" precoAntigo="24 000kzs" />
                </div>
            </div>
        </section>
    )
}

export default Servicos