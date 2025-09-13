import Logo from "./logo.png";
import bgSoft from "./bgSoft.png";
import Slide1 from "./Slide_1.jpg";
import Slide2 from "./Slide_2.jpg";
import Entrega from './Entrega.png'
import Precos_baixo from './Low.png'
import Pagamento_seguro from './Safe.png'
import Salao from './Salao.png'
import Grafica from './Grafica.png'
import Buque_vendas from './Buque.png'
import Decoracao from './Decoracao.png'
import Salao_Servicos from './servico_salao.jpg'
import Grafica_Servicos from './grafica_servicos.jpg'
import Decoracao_servicos from './decoracao_servicos.jpg'
import Salao_Card from './produto_salao.png'

export const assets = {
  Logo,
  bgSoft,
  Entrega,
  Precos_baixo,
  Pagamento_seguro,
  Salao,
  Salao_Servicos,
  Grafica_Servicos,
  Decoracao_servicos,
  Salao_Card,
  Grafica,
  Decoracao,
  Slide2
};

export const slides = [
  {id:1, conteudo:Slide1},
  {id:2, conteudo:Slide2}
]

export const categorias = [
  {id:1, conteudo:Salao, text:"Salão de Beleza"},
  {id:2, conteudo:Grafica, text:"Serviços Gráficos"},
  {id:3, conteudo:Buque_vendas, text:"Venda de Buquês"},
  {id:4, conteudo:Decoracao, text:"Decorações"}
]