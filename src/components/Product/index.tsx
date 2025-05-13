import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id numquam
      laborum quo ut quis vero porro sint sunt molestias amet quia quibusdam non
      voluptate, praesentium temporibus mollitia eligendi culpa inventore!
    </Descricao>
  </Card>
)

export default Product
