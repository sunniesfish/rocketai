import { Cloud1, Cloud2 } from "../../components/cloud";
import { TableTitle } from "../../components/table/table-title";
import SajuTable from "./table-area";

export default function TableBox() {
  return (
    <>
      <header className="flex items-center justify-center relative mt-2 mx-2">
        <Cloud1 className="absolute left-0" />
        <Cloud2 className="absolute right-0 mb-7" />
        <TableTitle />
      </header>
      <div className="flex items-center justify-center w-full">
        <SajuTable />
      </div>
      <div className="absolute top-0 border-r-1 left-0 w-2 h-full border-[#2B557E]" />
      <div className="absolute top-0 border-l-1 right-0 w-2 h-full border-[#2B557E]" />
      <div className="absolute top-0 border-b-1 h-2 w-full border-[#2B557E]" />
      <div className="absolute bottom-0 border-t-1 h-2 w-full border-[#2B557E]" />
    </>
  );
}
