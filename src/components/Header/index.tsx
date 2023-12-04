import imgHeader from "../../assets/img_main.png";

export default function Header() {
  const date = new Date().toLocaleDateString();
  return (
    <header className="flex items-end justify-between rounded-lg max-w-full  h-52 bg-gradient-to-t from-violet-700 to-violet-400">
      <div className="flex flex-col justify-around h-52 p-3">
        <p className="text-white text-sm">{date}</p>
        <h1 className="text-white text-3xl">
          Seja bem vindo(a), Dra. Tarcianne!
        </h1>
      </div>
      <div className="h-52">
        <img
          className="flex items-center h-52"
          src={imgHeader}
          alt="Imagem header"
        />
      </div>
    </header>
  );
}
