import { useContext, useEffect, useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaCalendarAlt, FaRegCreditCard } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IconBaseProps } from "react-icons";
import { PiSignOutBold } from "react-icons/pi";

import { Link } from "react-router-dom";

import logo from "../../assets/LOGO.png";
import { AuthContext } from "../../context/auth";
import { cn } from "../../@/lib/utils";

interface navProps {
  name: string;
  href: string;
  icon: IconBaseProps;
  subnav?: SubNavProps[];
}

interface SubNavProps {
  submenu: string;
  href: string;
}

const nav: navProps[] = [
  {
    name: "Pacientes",
    href: "/pacientes",
    icon: <FaUser size={22} />,
    subnav: [
      {
        submenu: "Lista dos Pacientes",
        href: "/pacientes/",
      },
      {
        submenu: "Cadastrar Paciente",
        href: "/pacientes/cadastrar-paciente",
      },
      // {
      //   submenu: "Emitir Declaração de presença",
      //   href: "/pacientes",
      // },
      {
        submenu: "Cadastrar Ficha de Atendimento",
        href: "/tipo-de-ficha",
      },
    ],
  },
  {
    name: "Agenda",
    href: "/agenda",
    icon: <FaCalendarAlt size={22} />,
    subnav: [
      {
        submenu: "Lista de agendamento",
        href: "/lista-de-agendamentos",
      },
      {
        submenu: "Agendar consulta",
        href: "/agendar",
      },
    ],
  },
  {
    name: "Financeiro",
    href: "/financeiro",
    icon: <FaRegCreditCard size={22} />,
    subnav: [
      {
        submenu: "Cadastrar entrada",
        href: "/financeiro",
      },
      {
        submenu: "Cadastrar saída",
        href: "/financeiro",
      },
      {
        submenu: "Dashboard financeiro",
        href: "/financeiro",
      },
    ],
  },
  {
    name: "Opções",
    href: "/opcoes",
    icon: <IoMdSettings size={22} />,
    subnav: [
      {
        submenu: "Perfil",
        href: "/",
      },
      {
        submenu: "usuários",
        href: "/",
      },
    ],
  },
];

const SideBar = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState<number | null>(null);

  const sideBarRef = useRef<HTMLDivElement>(null);

  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        setSubMenuOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSubMenu = (index: number) => {
    setSubMenuOpen(isSubMenuOpen === index ? null : index);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <aside
      ref={sideBarRef}
      className={cn(
        "flex flex-col gap-3 min-h-screen max-h-screen overflow-y-auto w-fit md:pr-8 pr-3 pt-2 rounded-e-xl bg-primary pl-[50px]"
      )}
    >
      <div className="flex justify-between flex-col w-full items-center h-full">
        <div className="flex justify-center w-full">
          <img
            className="w-60 h-auto rounded-lg"
            src={logo}
            alt="Logo do sistema"
          />
        </div>
        <nav className="w-full flex flex-col gap-3">
          <Link to="/" className="flex mb-3 text-white gap-3">
            <AiFillHome size={22} />
            Início
          </Link>
          {nav.map((item, index) => (
            <div key={index} className="flex-1 flex-col mb-3 text-white ">
              <a
                onClick={() => toggleSubMenu(index)}
                className="flex items-center gap-3 hover:text-gray-300 cursor-pointer "
              >
                <>
                  {item.icon}
                  <span>{item.name}</span>
                </>
              </a>
              {item.subnav && (
                <div
                  className={`${
                    isSubMenuOpen === index ? "block" : "hidden"
                  } flex flex-col bg-blue-400 p-2 space-y-2 rounded-lg mt-1`}
                >
                  {item.subnav.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      <Link
                        to={subItem.href}
                        className="flex font-extralight text-xs gap-1 break-words  hover:text-gray-300 cursor-pointer"
                      >
                        {subItem.submenu}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center mb-3 text-white hover:text-gray-300 cursor-pointer">
          <button onClick={handleLogout} className="flex items-center gap-3">
            <PiSignOutBold />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
export default SideBar;
