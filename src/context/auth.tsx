import { ReactNode, createContext, useState } from "react";
import { UsuarioProps } from "../services/user";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

export type AuthContextData = {
  user: UsuarioProps | null;
  signed: boolean;
  signIn: (data: SignInData) => Promise<void | null>;
  signUp: (data?: SignUpData) => Promise<void>;
  logout: () => void;
};

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UsuarioProps | null>(null);

  const navigate = useNavigate();

  async function signIn({ email, password }: SignInData) {
    await api
      .post("/auth/login", JSON.stringify({ email, password }), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setUser(response.data);
        toast.success("Seja bem vindo");
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        toast.error("E-mail ou senha inválidos!");
        console.log(error);
        console.log("E-mail ou senha inválidos");
      });
  }

  async function signUp(data?: SignUpData) {
    if (data) {
      const response = await api.post("/auth/register", {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      toast.success("Cadastrado com sucesso!");
      console.log(response);

      navigate("/login");
    }
  }

  function logout() {
    setUser(null);
    navigate("/login");
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signUp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
