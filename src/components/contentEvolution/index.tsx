const ContentEvolution = () => {
  return (
    <div className="flex flex-col w-full h-max-[450px] bg-white gap-5 p-4 overflow-auto">
      <textarea
        className="border border-blue-500 rounded-lg p-2 focus:border-blue-300 focus:outline-none"
        name="Evolucao do Paciente"
        placeholder="Relate a evolução do paciente"
      />
      <button className="text-white bg-blue-600 rounded-lg font-bold h-8">
        Salvar
      </button>
    </div>
  );
};
export default ContentEvolution;
