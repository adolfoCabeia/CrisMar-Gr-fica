import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, Download } from "lucide-react";

export default function Recibo() {
  const navigate = useNavigate();

  const recibo = {
    numero: "REC-2025-0919",
    data: "19/09/2025",
    cliente: "Adolfo Cabeia",
    email: "adolfo@email.com",
    telefone: "+244 923 456 789",
    metodo: "Cartão de Crédito (Visa)",
    itens: [
      { nome: "Cartões de Visita - 500 unid.", preco: "12.000 Kz" },
      { nome: "Flyers Promocionais - 1.000 unid.", preco: "18.000 Kz" }
    ],
    total: "30.000 Kz"
  };

  const gerarPDF = () => {
    window.print();
  };

  return (
    <div className="success-container">
      <div className="recibo-card">
        <div className="checkmark">
          <CheckCircle size={70} strokeWidth={2.5} />
        </div>

        <h1 className="titulo-principal">Pagamento Concluído!</h1>
        <p className="subtexto">
          O seu pedido foi processado com sucesso.
          <br />
          <span className="destaque">Obrigado pela sua confiança!</span>
        </p>

        <div className="recibo-detalhes">
          <div className="header-detalhes">
            <h2>Recibo #{recibo.numero}</h2>
            <span className="data">{recibo.data}</span>
          </div>

          <div className="grid-info">
            <p><strong>Cliente:</strong> {recibo.cliente}</p>
            <p><strong>Email:</strong> {recibo.email}</p>
            <p><strong>Telefone:</strong> {recibo.telefone}</p>
            <p><strong>Pagamento:</strong> {recibo.metodo}</p>
          </div>

          <table className="recibo-tabela">
            <thead>
              <tr>
                <th>Item</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {recibo.itens.map((item, i) => (
                <tr key={i}>
                  <td>{item.nome}</td>
                  <td>{item.preco}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>{recibo.total}</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="buttons">
          <button className="btn voltar" onClick={() => navigate("/")}>
            <ArrowLeft size={18} /> Voltar à Loja
          </button>
          <button className="btn pdf" onClick={gerarPDF}>
            <Download size={18} /> Baixar Recibo (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
