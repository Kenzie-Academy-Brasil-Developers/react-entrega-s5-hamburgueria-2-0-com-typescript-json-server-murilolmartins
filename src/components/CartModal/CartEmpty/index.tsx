import Container from "./style";

const CartEmpty = () => {
  return (
    <Container>
      <div className="description">
        <h1>Sua Sacola esta vazia</h1>
        <span>Adicione itens</span>
      </div>
    </Container>
  );
};

export default CartEmpty;
