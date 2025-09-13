import React from 'react'
import { Share2, Eye, ShoppingCart } from "lucide-react";
const ProdutoProps = ({ image, nomeProduto, precoNovo, precoAntigo }) => {
    return (
        <div className="produtos">
            <div className="card">
                <img src={image} alt="" />
                <div className="nome-produto">
                    <h2>{nomeProduto}</h2>
                </div>
                <div className="price">
                    <h4 className='price_recent'>{precoNovo}</h4>
                    <h4 className='price_last'>{precoAntigo}</h4>
                </div>

                <div className="button">
                    <button>
                        <Share2 size={22} />
                    </button>

                    <button>
                        <Eye size={22} />
                    </button>

                    <button>
                        <ShoppingCart size={22} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProdutoProps