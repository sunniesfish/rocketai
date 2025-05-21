import React from "react";

type LineProps = {
  positionX: number;
  positionY: number;
  text: string;
  className?: string;
};

/**
 * 대사
 * @param positionX 대사 가로 위치 백분율
 * @param positionY 대사 세로 위치 백분율
 * @param text 대사 내용
 */
export function Line({ positionX, positionY, text, className }: LineProps) {
  return (
    <div
      className="absolute z-10"
      style={{
        top: `${positionY}%`,
        left: `${positionX}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <p className={`text-center ${className || ""}`}>
        {text.split("\\n").map((line, index, array) => (
          <React.Fragment key={index}>
            {line}
            {index < array.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
