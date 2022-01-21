import Container from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { UseCart } from "../../../provider/Cart";

const CartHeader = () => {
  const { setIsModalCartOpen } = UseCart();
  return (
    <Container>
      <h1>Carrinho de compras</h1>
      <AiOutlineClose onClick={() => setIsModalCartOpen(false)} />
    </Container>
  );
};

export default CartHeader;
