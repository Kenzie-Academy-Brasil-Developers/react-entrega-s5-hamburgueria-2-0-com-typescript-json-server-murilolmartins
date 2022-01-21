import Modal from "../Modal";
import { UseCart } from "../../provider/Cart";
import CardTotal from "./CardTotal";
import CartCard from "./CartCard";
import CartEmpty from "./CartEmpty";
import CartHeader from "./CartHeader";

const CartModal = () => {
  const { cart } = UseCart();
  return (
    <Modal>
      <CartHeader />
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          {cart.map((prod) => (
            <CartCard product={prod} key={prod.id} />
          ))}
          <CardTotal />
        </>
      )}
    </Modal>
  );
};

export default CartModal;
