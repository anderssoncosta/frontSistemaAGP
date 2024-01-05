import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { QuestionApi, getQuestions } from "../../services/question";
import { postPatient } from "../../services/patientes";
import Input from "../input";

const schema = z.object({
  nome_paciente: z.string().min(1, { message: "O campo nome é obrigatório." }),
  tipoFichaId: z
    .string()
    .min(1, { message: "O campo tipoFicha é obrigatório." }),
  idade_paciente: z
    .string()
    .min(1, { message: "O campo idade é obrigatório." }),
  dta_nasc_paciente: z
    .string()
    .min(1, { message: "O campo data de nascimento é obrigatório." }),
  resp_paciente: z
    .string()
    .min(1, { message: "O campo responsável é obrigatório." }),
  email_paciente: z
    .string()
    .min(1, { message: "O campo e-mail é obrigatório." }),
  sexo_paciente: z
    .string()
    .max(1, { message: "Digite M para Masculino ou F para Feminino" })
    .min(1, { message: "O campo sexo é obrigatório." }),
  tel_paciente: z
    .string()
    .max(12, { message: "Apenas números, Ex.: 011912341234 ou 11912341234" })
    .min(1, { message: "O campo telefone é obrigatório." }),
  naturalidade: z
    .string()
    .min(1, { message: "O campo naturalidade é obrigatório." }),
  cidade: z.string().min(1, { message: "O campo cidade é obrigatório." }),
  bairro: z.string().min(1, { message: "O campo bairro é obrigatório." }),
  cep: z
    .string()
    .max(8, { message: "Sem traço ou ponto, Ex.: 60000000" })
    .min(1, { message: "O campo CEP é obrigatório." }),
  endereco: z.string().min(1, { message: "O campo endereço é obrigatório." }),
});

type FormData = z.infer<typeof schema>;

const RegisterClinicalRecord = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questionTypes, setQuestionTypes] = useState<QuestionApi[]>([]);

  const fetchQuestionTypes = async () => {
    const response = await getQuestions();
    console.log(response);
    setQuestionTypes(response);
  };

  useEffect(() => {
    fetchQuestionTypes();
  }, []);

  const handleRegister = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      console.log("Data a ser enviada para o servidor:", data);
      const response = await postPatient(data);
      console.log("Resposta do servidor:", response);

      toast.success("Paciente Cadastrado com Sucesso !");

      reset();
    } catch (error) {
      console.error("Erro ao cadastrar paciente", error);
      toast.error("Verifique os dados cadastrados e tente novamente");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <div className="rounded-lg p-3">
        <form
          className="flex-1 flex-col gap-3 overflow-auto"
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
    </div>
  );
};

export default RegisterClinicalRecord;
