import { ReactNode, useState } from "react";
import { IconBaseProps } from "react-icons";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

interface Tab {
  label?: string;
  content: ReactNode;
  icon: IconBaseProps;
}

const Tab = ({ content }: Tab) => {
  return <>{content}</>;
};

interface TabsProps {
  registerClinicalRecord: ReactNode;
  registerAnamnesis: ReactNode;
  registerQuantityPhysio?: ReactNode;
  registerEvolution?: ReactNode;
}

const TabsRegister = ({
  registerClinicalRecord,
  registerAnamnesis,
}: // registerQuantityPhysio,
// registerEvolution,
TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: Tab[] = [
    {
      label: "Cadastro - Ficha Clinica",
      icon: <HiUserCircle size={22} />,
      content: <div>{registerClinicalRecord}</div>,
    },
    {
      label: "Ficha Anamnese",
      icon: <MdDashboard size={22} />,
      content: <div>{registerAnamnesis}</div>,
    },
    // {
    //   label: "Quantidade Fisio",
    //   icon: <HiAdjustments size={22} />,
    //   content: <div>{registerQuantityPhysio}</div>,
    // },
    // {
    //   label: "Evolucao",
    //   icon: <HiClipboardList size={22} />,
    //   content: <div>{registerEvolution}</div>,
    // },
  ];

  return (
    <div className="bg-white rounded-lg h-full">
      <div className="flex mb-4 justify-between">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "text-blue-500 hover:text-blue-700"
            } w-1/2 py-2 border-b-2 border-transparent focus:outline-none rounded-lg`}
          >
            <div className="flex justify-center items-center gap-2">
              <>
                {tab.icon}
                <span>{tab.label}</span>
              </>
            </div>
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabsRegister;
