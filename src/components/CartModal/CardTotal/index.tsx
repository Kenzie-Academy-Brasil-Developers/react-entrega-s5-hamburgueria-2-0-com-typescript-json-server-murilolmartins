import Button from "../../Button";
import { UseCart } from "../../../provider/Cart";
import Container from "./style";

const CardTotal = () => {
  const { cart, clearCart } = UseCart();
  return (
    <Container>
      <div className="total">
        <h2>Total</h2>
        <span>
          R${" "}
          {cart
            .reduce((qtd, prod) => qtd + prod.price * prod.qtd, 0)
            .toFixed(2)}
        </span>
      </div>
      <Button isLog={false} onClick={clearCart}>
        Remover Todos
      </Button>
    </Container>
  );
};

export default CardTotal;
