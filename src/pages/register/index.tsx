import { Link } from "react-router-dom";

export default function Register() {
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
            <form className="flex flex-col gap-1 mt-5">
              <div>
                <span className="text-violet-500">Nome</span>
                <input
                  type="text"
                  className=" w-full border-b border-violet-700 bg-transparent text-lg p-2 focus:border-violet-700 focus:outline-none"
                />
              </div>
              <div>
                <span className="text-violet-500">E-mail</span>
                <input
                  type="email"
                  className=" w-full border-b border-violet-700 bg-transparent text-lg p-2 focus:border-violet-700 focus:outline-none"
                />
              </div>
              <div>
                <span className="text-violet-500">Senha</span>
                <input
                  type="password"
                  className=" w-full border-b border-violet-700 bg-transparent text-lg p-2 focus:border-violet-700 focus:outline-none"
                />
              </div>
              <button className="bg-violet-700 rounded-lg h-10 text-white mt-3">
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
}
