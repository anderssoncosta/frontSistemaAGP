import UserProfile from "../../../components/userProfile";
import HeaderTitle from "../../../components/headerTitle";
import Contents from "../../../components/contents";
import { FaArrowLeft } from "react-icons/fa";
import TabsRegister from "../../../components/tabsRegister";
import RegisterClinicalRecord from "../../../components/registerClinicalRecord";
import RegisterAnamnesis from "../../../components/registerAnamnese";

const RegisterPatient = () => {
  return (
    <Contents>
      <div className="flex flex-col gap-3 w-[95%]">
        <div className="w-full">
          <UserProfile />
          <HeaderTitle
            route="/pacientes"
            iconTitle={<FaArrowLeft size={20} color="#FFF" />}
            title="Cadastro de Pacientes"
          />
        </div>

        <TabsRegister
          registerClinicalRecord={<RegisterClinicalRecord />}
          registerAnamnesis={<RegisterAnamnesis />}
        />
      </div>

      {/* <div className="w-[95%]">
        <div className="w-full">
          <UserProfile />
          <HeaderTitle
            iconTitle={<FaArrowLeft size={20} color="#FFF" />}
            title="Cadastro de Pacientes"
          />
        </div>
        <div className="mt-5 w-full bg-white rounded-lg p-3">
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(handleRegister)}
          >
            <div className="flex gap-3 w-full ">
              <div className="w-1/2">
                <span>Nome:</span>
                <Input
                  name="nome_paciente"
                  type="text"
                  placeholder="Nome completo do paciente"
                  register={register}
                  error={errors.nome_paciente?.message}
                />
              </div>
              <div className="w-1/2 flex flex-col">
                <span>Tipo de Ficha:</span>
                <select
                  {...register("tipoFichaId")}
                  className="border p-2 rounded-md border-blue-500 bg-transparent focus:border-blue-500 focus:outline-none"
                  defaultValue=""
                >
                  <option value="">Selecione um tipo de ficha</option>
                  {questionTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.nome}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-3 w-full">
              <div className="w-1/2">
                <span>Data de Nascimento: </span>
                <Input
                  name="dta_nasc_paciente"
                  type="text"
                  placeholder="Data de nascimento"
                  register={register}
                  error={errors.dta_nasc_paciente?.message}
                />
              </div>
              <div className="w-1/2">
                <span>Idade:</span>
                <Input
                  name="idade_paciente"
                  type="text"
                  placeholder="Idade do paciente:"
                  register={register}
                  error={errors.idade_paciente?.message}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <span>Profissional Responsável:</span>
                <Input
                  name="resp_paciente"
                  type="text"
                  placeholder="Responsável pelo paciente"
                  register={register}
                  error={errors.resp_paciente?.message}
                />
              </div>
              <div className="w-1/2">
                <span>Email:</span>
                <Input
                  name="email_paciente"
                  type="email"
                  placeholder="E-mail do paciente"
                  register={register}
                  error={errors.email_paciente?.message}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <span>Sexo:</span>
                <Input
                  name="sexo_paciente"
                  type="text"
                  placeholder="M ou F"
                  register={register}
                  error={errors.sexo_paciente?.message}
                />
              </div>
              <div className="w-1/2">
                <span>Telefone:</span>
                <Input
                  name="tel_paciente"
                  type="text"
                  placeholder="Telefone"
                  register={register}
                  error={errors.tel_paciente?.message}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <span>Naturalidade:</span>
                <Input
                  name="naturalidade"
                  type="text"
                  placeholder="Naturalidade"
                  register={register}
                  error={errors.naturalidade?.message}
                />
              </div>
              <div className="w-1/2">
                <span>CEP:</span>
                <Input
                  name="cep"
                  type="text"
                  placeholder="Digite seu CEP"
                  register={register}
                  error={errors.cep?.message}
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <span>Cidade:</span>
                <Input
                  name="cidade"
                  type="text"
                  placeholder="Cidade"
                  register={register}
                  error={errors.cidade?.message}
                />
              </div>
              <div className="w-1/2">
                <span>Bairro:</span>
                <Input
                  name="bairro"
                  type="text"
                  placeholder="Bairro"
                  register={register}
                  error={errors.bairro?.message}
                />
              </div>
            </div>
            <div>
              <span>Endereço:</span>
              <Input
                name="endereco"
                type="text"
                placeholder="Digite seu endereco"
                register={register}
                error={errors.endereco?.message}
              />
            </div>
            <div className="w-full py-3 gap-2 flex items-center justify-center">
              <Link
                to="/pacientes"
                className="w-1/2 bg-white text-blue-500 rounded-lg p-2 text-center"
              >
                {" "}
                Voltar
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 bg-blue-500 rounded-lg p-2 text-white"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </Contents>
  );
};
export default RegisterPatient;
