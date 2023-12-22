const ContentAnamnesis = () => {
  return (
    <div className="flex flex-col w-full h-[450px] h-max-[450px] bg-white gap-5 p-4 overflow-auto ">
      <div className="flex">
        <h1 className="font-semibold ">Queixa Principal:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">Historia Clínica:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">Hábitos de Vida:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">HMA:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">HMP:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">Antecedentes Pessoais:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">Antecedentes Familiares:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas.`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">Tratamentos Realizados:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas.`}</span>
      </div>
      <div className="w-4/5 flex justify-between">
        <div className="flex gap-1">
          <h1 className="font-semibold">Usa Medicamentos: </h1>
          <div className="flex gap-2">
            <span className="font-semibold ml-1">Sim</span>
            <input type="checkbox" name="Sim" id="" />|
            <span className="font-semibold ml-1">Não</span>
            <input type="checkbox" name="Não" id="" />
          </div>
        </div>
        <div className="flex gap-1">
          <h1 className="font-semibold">Realizou Cirurgia: </h1>
          <div className="flex gap-2">
            <span className="font-semibold ml-1">Sim</span>
            <input type="checkbox" name="Sim" id="" />|
            <span className="font-semibold ml-1">Não</span>
            <input type="checkbox" name="Não" id="" />
            <div className="flex"></div>
          </div>
        </div>
      </div>
      <h1 className="font-semibold">Plano Terapêutico</h1>
      <div className="flex">
        <h1 className="font-semibold">Objetivo do tratamento:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">Recursos Terapêuticos:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">Plano de Tratamento:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <h1 className="font-semibold">Plano Terapêutico</h1>
      <div className="flex">
        <h1 className="font-semibold">Objetivo do tratamento:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">Recursos Terapêuticos:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
      <div className="flex">
        <h1 className="font-semibold">Plano de Tratamento:</h1>
        <span className="font-normal ml-1">{`Lorem ipsum dolor sit amet. Ut dolor galisum aut voluptas necessitatibus .`}</span>
      </div>
    </div>
  );
};
export default ContentAnamnesis;
