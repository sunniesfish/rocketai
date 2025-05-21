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
        flex items-center justify-center xs:p-[5.52px]
        ${borderStyles}
        ${isHeader ? "font-bold text-sm xs:text-[20px]" : ""}
        ${isLabel ? "text-[12px]" : ""}
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
