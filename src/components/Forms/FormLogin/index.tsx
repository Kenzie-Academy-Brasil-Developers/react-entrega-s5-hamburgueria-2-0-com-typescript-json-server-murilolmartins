import Button from "../../Button";
import { Input } from "../../Input";
import { Container, Errors, InputContainer } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../provider/Auth";
import { useHistory } from "react-router";

interface UserData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { singIn } = useAuth();
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatorio").email("Email Invalido"),
    password: yup.string().required("Senha Obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  function submitLogin(data: UserData) {
    singIn(data, history);
  }

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(submitLogin)}>
        <InputContainer className="input_container" error={!!errors.email}>
          <Input
            label="Email"
            {...register("email")}
            type="email"
            error={!!errors.email}
          />
          {errors.email && <Errors>{errors.email.message}</Errors>}
        </InputContainer>
        <InputContainer className="input_container" error={!!errors.password}>
          <Input
            label="Senha"
            {...register("password")}
            type="password"
            error={!!errors.password}
          />
          {errors.password && <Errors>{errors.password.message}</Errors>}
        </InputContainer>
        <Button isLog={true} type="submit">
          Logar
        </Button>
      </form>
      <div className="div_menssage">
        <p>Crie sua conta para saborear muitas delicias e matar sua fome</p>
      </div>
      <Button isLog={false} onClick={() => history.push("/register")}>
        Cadastrar
      </Button>
    </Container>
  );
};

export default FormLogin;
