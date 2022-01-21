import FormLogin from "../../components/Forms/FormLogin";
import InitialMessange from "../../components/InitialMessange";
import Container from "./styles";

export const Login = () => {
  return (
    <Container>
      <FormLogin></FormLogin>
      <InitialMessange></InitialMessange>
    </Container>
  );
};
