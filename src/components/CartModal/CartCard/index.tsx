import { FaTrash } from "react-icons/fa";
import { UseCart } from "../../../provider/Cart/index";
import Container from "./style";

interface ProductCart {
  id: number;
  name: string;
  category: string;
  price: 14.0;
  img: string;
  userId: number;
  qtd: number;
}

interface CartCardProps {
  product: ProductCart;
}

const CartCard = ({ product }: CartCardProps) => {
  const { removeCart, addOneMore, removeOneMore } = UseCart();
  return (
    <Container>
      <div className="img_cart">
        <img src={product.img} alt="prod_img" />
      </div>
      <div className="small_container">
        <div className="header_card_cart">
          <h1>{product.name}</h1>
          <FaTrash onClick={() => removeCart(product)} />
        </div>
        <div className="count_container">
          <button onClick={() => removeOneMore(product)}>-</button>
          <div className="count">
            <span>{product.qtd}</span>
          </div>
          <button onClick={() => addOneMore(product)}>+</button>
        </div>
      </div>
    </Container>
  );
};

export default CartCard;
