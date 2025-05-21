interface TableProps {
  children: React.ReactNode;
  className?: string;
  columns?: number;
}

export default function Table({
  children,
  className = "",
  columns = 5,
}: TableProps) {
  return (
    <div
      className={`w-full grid ${className} `}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
}
