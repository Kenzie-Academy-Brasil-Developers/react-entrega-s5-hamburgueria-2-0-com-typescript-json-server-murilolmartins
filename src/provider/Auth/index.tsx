import { createContext, ReactNode, useContext, useState } from "react";
import { History } from "history";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}
interface AuthProviderData {
  authToken: string;
  logOut: (history: History) => void;
  singIn: (data: UserData, history: History) => void;
  registerUser: (data: UserData, history: History) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem("@HToken") || "";
  });

  const singIn = (data: UserData, history: History) => {
    api
      .post("/login", data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "@HToken",
          JSON.stringify(response.data.accessToken)
        );
        setAuthToken(response.data.token);
        history.push("/dashboard");
        toast.success("Bem Vindo!");
      })
      .catch((err) => toast("Nome ou senha incorretos"));
  };

  const logOut = (history: History) => {
    setAuthToken("");
    localStorage.clear();
    history.push("/");
  };

  const registerUser = (data: UserData, history: History) => {
    api
      .post("/register", data)
      .then((response) => {
        console.log(response.data);
        setAuthToken(response.data.token);
        history.push("/");
        toast.success("Cadastrado!");
      })
      .catch((err) => toast("Nome ou senha incorretos"));
  };

  return (
    <AuthContext.Provider value={{ authToken, logOut, singIn, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
