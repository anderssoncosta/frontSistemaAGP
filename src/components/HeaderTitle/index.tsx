export interface HeaderTitleProps {
  title: string;
}

export default function HeaderTitle({ title }: HeaderTitleProps) {
  return (
    <header className="flex items-center rounded-lg w-full h-20 bg-gradient-to-t from-violet-700 to-violet-400">
      <div className="ml-4 max-w-full">
        <h1 className="text-white text-2xl">{title}</h1>
      </div>
    </header>
  );
}
