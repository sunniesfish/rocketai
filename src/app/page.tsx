export const dynamic = "force-static";

import { Background } from "@/app/_components/backgroud";
import TableBox from "@/app/_components/table-box";
export default function Home() {
  return (
    <div className="bg-background max-w-md w-full relative ">
      <Background />
      <main
        className="absolute z-20 top-[66.3%] left-1/2 -translate-x-1/2 w-[93.6%]  bg-[#F5F3EC] border border-[#1B2F49] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        style={{ borderWidth: "3px" }}
      >
        <TableBox />
      </main>
    </div>
  );
}
