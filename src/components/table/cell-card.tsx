interface CellCardProps {
  mainChar: string;
  topChar?: string;
  bottomChar?: string;
  bgColor: "black" | "red" | "teal" | "white";
}

export default function CellCard({
  mainChar,
  topChar,
  bottomChar,
  bgColor,
}: CellCardProps) {
  const getBgColor = () => {
    switch (bgColor) {
      case "black":
        return "bg-[#2F2F2F] text-white";
      case "red":
        return "bg-[#C23030] text-white";
      case "teal":
        return "bg-[#18868C] text-white";
      case "white":
        return "bg-[#F5F3EC] text-black border border-[#000000] border-[0.98px]";
      default:
        return "bg-white text-black border border-gray-300";
    }
  };

  return (
    <div
      className={`w-full h-full max-w-[55.45px] max-h-[55.45px] rounded-[12.55px] flex flex-col items-center justify-around ${getBgColor()}`}
    >
      {topChar && (
        <div className="text-xxxs xs:text-xxs text-center mt-[1.5px]">
          {topChar}
        </div>
      )}
      <div className="text-lg xs:text-xl font-bold text-center">{mainChar}</div>
      {bottomChar && (
        <div className="text-xxs xs:text-xs text-center">{bottomChar}</div>
      )}
    </div>
  );
}
