import { Redirect } from "react-router";
import FormLogin from "../../components/Forms/FormLogin";
import InitialMessange from "../../components/InitialMessange";
import { useAuth } from "../../provider/Auth";
import Container from "./styles";

export const Login = () => {
  const { authToken } = useAuth();

  if (!!authToken) {
    return <Redirect to="/dashborad" />;
  }
  return (
    <Container>
      <FormLogin></FormLogin>
      <InitialMessange></InitialMessange>
    </Container>
  );
};
