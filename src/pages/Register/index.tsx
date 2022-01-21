import FormRegister from "../../components/Forms/FormRegister";
import InitialMessange from "../../components/InitialMessange";
import Container from "./style";

const Register = () => {
  return (
    <Container>
      <InitialMessange></InitialMessange>
      <FormRegister></FormRegister>
    </Container>
  );
};

export default Register;
