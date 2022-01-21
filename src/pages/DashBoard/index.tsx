import { useEffect } from "react";
import CartModal from "../../components/CartModal";
import CardProduct from "../../components/CardProduct";
import Header from "../../components/Header";
import { UseCart } from "../../provider/Cart";
import { UseProducts } from "../../provider/Products";
import { Container, SmallContainer } from "./style";

const DashBoard = () => {
  const { loadProducts, products } = UseProducts();
  const { isModalCartOpen } = UseCart();

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <Container>
      <Header></Header>
      <SmallContainer>
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </SmallContainer>
      {isModalCartOpen && <CartModal />}
    </Container>
  );
};

export default DashBoard;
