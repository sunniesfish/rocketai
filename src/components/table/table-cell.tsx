interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
  isHeader?: boolean;
  isLabel?: boolean;
  colSpan?: number;
  borderRight?: string;
  borderBottom?: string;
  backgroundColor?: string;
}

export default function TableCell({
  children,
  className = "",
  isHeader = false,
  isLabel = false,
  colSpan = 1,
  borderRight = "border-r-[0.49px] border-r-black",
  borderBottom = "border-b-[1.05px] border-b-black",
}: TableCellProps) {
  const borderStyles = `${borderRight == "none" ? "" : borderRight} ${
    borderBottom == "none" ? "" : borderBottom
  }`;

  return (
    <div
      className={`
        flex items-center justify-center p-[7%]
        ${borderStyles}
        ${isHeader ? "font-bold text-sm xs:text-xl" : ""}
        ${isLabel ? "text-sm" : ""}
        ${!isLabel && !isHeader ? "bg-white" : ""}
        ${className}
      `}
      style={{
        gridColumn: colSpan > 1 ? `span ${colSpan}` : undefined,
      }}
    >
      {children}
    </div>
  );
}
