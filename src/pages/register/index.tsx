import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/input";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";

const schema = z.object({
  username: z.string().nonempty("O campo nome é obrigatório"),
  email: z.string().nonempty("O campo e-mail é obrigatório"),
  password: z.string().nonempty("O campo senha é obrigatório"),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const handleRegister = (data: FormData) => {
    signUp(data);
    console.log(data);
  };

  return (
    
    <div className="bg-[url('./assets/background-login.png')] bg-cover h-screen w-full flex justify-center">
      <div className=" w-full flex flex-col justify-center sm:flex sm:flex-row ">
        <div className="w-full flex justify-center items-center">
          <div className="w-10/12 mx-auto">
            <h1 className="text-4xl text-white text-left mt-3 md:text-5xl">
              <span className="font-bold">Bem vindo(a) ao</span>, sistema de
              agendamento para profissionais da saúde.
            </h1>
          </div>
        </div>
        <div className="w-10/12 mx-auto my-5 bg-violet-100 rounded-lg flex flex-col items-center justify-center md:w-full md:mt-0">
          <div className="w-8/12 mx-auto py-5">
            <div>
              <h1 className="text-violet-500 text-3xl font-bold mb-3  md:text-4xl  ">
                Registre-se
              </h1>
              <p className="text-violet-500">Entre com seu usuário e senha.</p>
            </div>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="flex flex-col gap-2 mt-5"
            >
              <div>
                <span className="text-violet-500">Nome Completo</span>
                <Input
                  name="username"
                  type="text"
                  placeholder="Digite seu nome completo"
                  register={register}
                  error={errors.username?.message}
                />
              </div>
              <div>
                <span className="text-violet-500">E-mail</span>
                <Input
                  name="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  register={register}
                  error={errors.email?.message}
                />
              </div>
              <div>
                <span className="text-violet-500">Senha</span>
                <Input
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
                  register={register}
                  error={errors.password?.message}
                />
              </div>
              <button
                type="submit"
                className="bg-violet-700 rounded-lg h-10 text-white mt-3"
              >
                Registrar
              </button>
              <div className="w-full text-center text-violet-700 mt-5">
                <Link to="/login">Já tem login ? Acessar !</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
