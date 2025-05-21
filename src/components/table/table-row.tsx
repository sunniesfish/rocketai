interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  columns?: number;
}

export default function TableRow({
  children,
  className = "",
  columns = 5,
}: TableRowProps) {
  return (
    <div
      className={`grid w-full ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridColumn: `1 / span ${columns}`,
      }}
    >
      {children}
    </div>
  );
}
