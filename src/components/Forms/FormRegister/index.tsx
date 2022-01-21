import Button from "../../Button";
import { Input } from "../../Input";
import { Container, Errors, InputContainer } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../provider/Auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

interface UserData {
  name: string;
  email: string;
  password: string;
  passwordVerify: string;
}

const FormRegister = () => {
  const { registerUser } = useAuth();
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatorio"),
    email: yup.string().required("Email Obrigatorio").email("Email Invalido"),
    password: yup.string().required("Senha Obrigatoria"),
    passwordVerify: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas Diferentes")
      .required("Campo Obrigatorio"),
    course_module: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  function submitRegister(data: UserData) {
    const { name, email, password } = data;
    const newData = { name, email, password };
    registerUser(newData, history);
  }
  return (
    <Container>
      <div className="heading_container">
        <h1>Cadastrar</h1>
        <Link to="/">Retornar para o login</Link>
      </div>
      <form onSubmit={handleSubmit(submitRegister)}>
        <InputContainer className="input_container" error={!!errors.name}>
          <Input
            label="Nome"
            {...register("name")}
            type="text"
            error={!!errors.name}
          />
          {errors.name && <Errors>{errors.name.message}</Errors>}
        </InputContainer>
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
        <InputContainer
          className="input_container"
          error={!!errors.passwordVerify}
        >
          <Input
            label="Confirmar Senha"
            type="password"
            {...register("passwordVerify")}
            error={!!errors.passwordVerify}
          />
          {errors.passwordVerify && (
            <Errors>{errors.passwordVerify.message}</Errors>
          )}
        </InputContainer>
        <Button isLog={false} type="submit">
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export default FormRegister;
