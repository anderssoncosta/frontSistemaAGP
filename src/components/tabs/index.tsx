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
  contentClinicalRecord: ReactNode;
  contentAnamnesis: ReactNode;
  contentQuantityPhysio: ReactNode;
  contentEvolution: ReactNode;
}

const Tabs = ({
  contentClinicalRecord,
  contentAnamnesis,
  contentQuantityPhysio,
  contentEvolution,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: Tab[] = [
    {
      label: "Ficha Clinica",
      icon: <HiUserCircle size={22} />,
      content: <div>{contentClinicalRecord}</div>,
    },
    {
      label: "Anamnese",
      icon: <MdDashboard size={22} />,
      content: <div>{contentAnamnesis}</div>,
    },
    {
      label: "Quantidade Fisio",
      icon: <HiAdjustments size={22} />,
      content: <div>{contentQuantityPhysio}</div>,
    },
    {
      label: "Evolucao",
      icon: <HiClipboardList size={22} />,
      content: <div>{contentEvolution}</div>,
    },
  ];

  return (
    <div className="bg-white rounded-lg">
      <div className="flex  mb-4 justify-between">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index
                ? "bg-violet-500 text-white"
                : "text-violet-500 hover:text-violet-700"
            } py-2 px-4 border-b-2 border-transparent focus:outline-none rounded-lg`}
          >
            <div className="flex items-center gap-2">
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

export default Tabs;
