import imgUser from "../../assets/LOGO.png";

const UserProfile = () => {
  return (
    <div className="flex justify-end w-full mb-3">
      <div className="flex items-center gap-2 w-48">
        <img
          className="w-12 rounded-full border-2 border-violet-400"
          src={imgUser}
          alt="Foto de Perfil"
        />
        <div className="flex flex-col">
          <span className="font-bold">Dra. Tarcianne</span>
          <span className="text-gray-500">Fisioterapeuta</span>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
