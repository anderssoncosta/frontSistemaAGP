/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  QuestionApi,
  QuestionProps,
  getQuestions,
} from "../../../services/question";
import Contents from "../../../components/contents";
import UserProfile from "../../../components/userProfile";
import HeaderTitle from "../../../components/headerTitle";
import { FaArrowLeft } from "react-icons/fa";

const SheetType = () => {
  const [selectedFicha, setSelectedFicha] = useState("");
  const [questions, setQuestions] = useState<QuestionApi[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<
    QuestionProps[] | undefined
  >(undefined);

  useEffect(() => {
    const fetchQuestionsResult = async () => {
      const response = await getQuestions();
      setQuestions(response);
    };

    fetchQuestionsResult();
  }, []);

  const handleFichaChange = (event: { target: { value: any } }) => {
    const selectedFicha = event.target.value;
    setSelectedFicha(selectedFicha);

    const selectedFichaQuestions = questions.find(
      (ficha) => ficha.nome === selectedFicha
    )?.perguntas;

    setSelectedQuestions(selectedFichaQuestions);
  };

  return (
    <Contents>
      <div className="flex flex-col gap-3 w-[95%]">
        <div className="w-full">
          <UserProfile />
          <HeaderTitle
            route="/pacientes"
            iconTitle={<FaArrowLeft size={20} color="#FFF" />}
            title="Cadastro de Ficha de Atendimento"
          />
        </div>
      </div>
      <div className="w-[95%]">
        <label>
          <select value={selectedFicha} onChange={handleFichaChange}>
            <option value="">Selecione...</option>
            {questions.map((ficha) => (
              <option key={ficha.id} value={ficha.nome}>
                {ficha.nome}
              </option>
            ))}
          </select>
        </label>

        {selectedQuestions?.map((pergunta, index) => (
          <div key={index}>
            <span>{pergunta.pergunta}</span>
            <input type="text" placeholder={`${pergunta.pergunta}`} />
          </div>
        ))}
      </div>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Perguntas:</p>
            {formData.perguntas.map((pergunta, index) => (
              <div key={index}>
                <input type="text" value={pergunta} onChange={() => {}} />
              </div>
            ))}
            <button type="button" onClick={handleAddPergunta}>
              Adicionar Pergunta
            </button>
          </div>
          <button type="submit">Cadastrar Tipo de Ficha</button>
        </form>
      </div> */}
    </Contents>
  );
};
export default SheetType;
