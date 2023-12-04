import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaCalendarAlt, FaRegCreditCard } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IconBaseProps } from "react-icons";
import { PiSignOutBold } from "react-icons/pi";

import { Link } from "react-router-dom";

import logo from "../../assets/LOGO.png";

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
  // {
  //   name: "Início",
  //   href: "/",
  //   icon: <AiFillHome size={22} />,
  // },
  {
    name: "Pacientes",
    href: "/pacientes",
    icon: <FaUser size={22} />,
    subnav: [
      {
        submenu: "Cadastrar Paciente",
        href: "/pacientes/",
      },
      {
        submenu: "Emitir Declaração de presença",
        href: "/pacientes",
      },
      {
        submenu: "Cadastrar tipo de ficha",
        href: "/pacientes",
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
        href: "/agenda",
      },
      {
        submenu: "Agendar consulta",
        href: "/agenda",
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

export default function SideBar() {
  const [isSubMenuOpen, setSubMenuOpen] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setSubMenuOpen(isSubMenuOpen === index ? null : index);
  };
  return (
    <aside className="flex w-64 h-[95%] py-2 px-2 rounded-xl bg-gradient-to-t from-violet-700 to-violet-400">
      <div className="flex justify-between flex-col w-full items-center h-full">
        <div className="flex justify-center">
          <img
            className="w-fit h-40 rounded-lg"
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
            <div key={index} className="flex flex-col mb-3 text-white ">
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
                  } flex flex-col bg-violet-400 p-2 space-y-2 rounded-lg mt-1`}
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
          <Link to="/" className="flex items-center gap-3  ">
            <PiSignOutBold />
            <span>Sair</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
