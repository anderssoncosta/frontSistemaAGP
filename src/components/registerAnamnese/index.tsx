import { useEffect, useState } from "react";
import { PatientApi, getPatients } from "../../services/patientes";
import { QuestionApi, getQuestions } from "../../services/question";

const RegisterAnamnesis = () => {
  const [patients, setPatients] = useState<PatientApi[]>([]);
  const [questions, setQuestions] = useState<QuestionApi[]>([]);
  const [regs, setRegs] = useState<number | null>(null);

  const fetchQuestionsResult = async () => {
    const [responsePatient, responseQuestions] = await Promise.all([
      getPatients(),
      getQuestions(),
    ]);

    setPatients(responsePatient);
    setQuestions(responseQuestions);
  };

  useEffect(() => {
    fetchQuestionsResult();
  }, []);

  const resultQuestions = questions.filter((e) => e.id === regs);
  console.log("aqui => ", resultQuestions);

  return (
    <div className="flex flex-col w-full h-max-[450px] bg-white gap-5 p-4 overflow-auto">
      {resultQuestions.map((item) =>
        item.perguntas.map((pergunta) => (
          <span key={pergunta.id}>{pergunta.pergunta}</span>
        ))
      )}
    </div>
  );
};

export default RegisterAnamnesis;
