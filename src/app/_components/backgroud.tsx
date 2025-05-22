import Image from "next/image";
import bg from "@/assets/bg.webp";
import { Line } from "../../components/line";

export function Background() {
  return (
    <div className="relative">
      <Image src={bg} alt="bg" width={750} height={4162} layout="responsive" />
      <Line
        positionX={35}
        positionY={33.3}
        className="text-sm xxs:text-base xs:text-xl"
        text="이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요."
      />
      <Line
        positionX={39}
        positionY={50.5}
        className="text-sm xxs:text-base xs:text-xl"
        text="제가 oo님의 사주를\n보기 쉽게 표로 정리했어요"
      />
    </div>
  );
}
