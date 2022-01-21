import { UseCart } from "../../provider/Cart";
import Container from "./style";

interface Products {
  id: number;
  name: string;
  category: string;
  price: 14.0;
  img: string;
  userId: number;
}

interface CardProductProps {
  product: Products;
}

const CardProduct = ({ product }: CardProductProps) => {
  const { addCart } = UseCart();
  return (
    <Container>
      <div className="img_container">
        <img src={product.img} alt="" />
      </div>
      <div className="data_container">
        <h1>{product.name}</h1>
        <div className="description_container">
          <p>{product.category}</p>
          <span>R${product.price.toFixed(2)}</span>
        </div>
        <button onClick={() => addCart(product)}>Adicionar</button>
      </div>
    </Container>
  );
};

export default CardProduct;
