import CellCard from "@/components/table/cell-card";
import Table from "@/components/table/table";
import TableCell from "@/components/table/table-cell";

export default function SajuTable() {
  return (
    <div className="w-full max-w-4xl mx-4 mb-7 ">
      <Table>
        {/* Header row */}
        <TableCell
          isHeader
          isLabel
          borderRight="border-r-[1.05px] border-r-black"
        ></TableCell>
        <TableCell isHeader>時</TableCell>
        <TableCell isHeader>日</TableCell>
        <TableCell isHeader>月</TableCell>
        <TableCell isHeader>年</TableCell>

        {/* Row 1*/}
        <TableCell isLabel borderRight="border-r-[1.05px] border-r-black">
          <div className="flex flex-col items-center">
            <span className="text-xs xs:text-[12px] font-bold">十星</span>
            <span className="text-xxxs xs:text-[8px]">(십성)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">傷官</span>
            <span className="text-xxs xs:text-xs">(상관)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">比肩</span>
            <span className="text-xxs xs:text-xs">(비견)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">傷官</span>
            <span className="text-xxs xs:text-xs">(상관)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">劫財</span>
            <span className="text-xxs xs:text-xs">(겁재)</span>
          </div>
        </TableCell>

        {/* Row 2*/}
        <TableCell
          isLabel
          borderRight="border-r-[1.05px] border-r-black"
          borderBottom="border-b-[0.52px] border-b-black"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs xs:text-[12px] font-bold">天干</span>
            <span className="text-xxxs xs:text-[8px]">(천간)</span>
          </div>
        </TableCell>
        <TableCell borderBottom="border-b-[0.52px] border-b-black">
          <CellCard
            mainChar="壬"
            topChar="임"
            bottomChar="陰水"
            bgColor="black"
          />
        </TableCell>
        <TableCell borderBottom="border-b-[0.52px] border-b-black">
          <CellCard
            mainChar="丁"
            topChar="정"
            bottomChar="陰火"
            bgColor="red"
          />
        </TableCell>
        <TableCell borderBottom="border-b-[0.52px] border-b-black">
          <CellCard
            mainChar="癸"
            topChar="계"
            bottomChar="陰水"
            bgColor="black"
          />
        </TableCell>
        <TableCell borderBottom="border-b-[0.52px] border-b-black">
          <CellCard
            mainChar="癸"
            topChar="계"
            bottomChar="陰水"
            bgColor="black"
          />
        </TableCell>

        {/* Row 3*/}
        <TableCell isLabel borderRight="border-r-[1.05px] border-r-black">
          <div className="flex flex-col items-center">
            <span className="text-xs xs:text-[12px] font-bold">地支</span>
            <span className="text-xxxs xs:text-[8px]">(지지)</span>
          </div>
        </TableCell>
        <TableCell>
          <CellCard
            mainChar="黃"
            topChar="이"
            bottomChar="陰木"
            bgColor="teal"
          />
        </TableCell>
        <TableCell>
          <CellCard
            mainChar="巳"
            topChar="사"
            bottomChar="陰火"
            bgColor="red"
          />
        </TableCell>
        <TableCell>
          <CellCard
            mainChar="亥"
            topChar="해"
            bottomChar="陰水"
            bgColor="black"
          />
        </TableCell>
        <TableCell>
          <CellCard
            mainChar="西"
            topChar="유"
            bottomChar="陰金"
            bgColor="white"
          />
        </TableCell>

        {/* Row 4 */}
        <TableCell isLabel borderRight="border-r-[1.05px] border-r-black">
          <div className="flex flex-col items-center">
            <span className="text-xs xs:text-[12px] font-bold">十星</span>
            <span className="text-xxxs xs:text-[8px]">(십성)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">比肩</span>
            <span className="text-xxs xs:text-xs">(비견)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">劫財</span>
            <span className="text-xxs xs:text-xs">(겁재)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">食神</span>
            <span className="text-xxs xs:text-xs">(식신)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">偏財</span>
            <span className="text-xxs xs:text-xs">(편재)</span>
          </div>
        </TableCell>

        {/* Row 5 */}
        <TableCell isLabel borderRight="border-r-[1.05px] border-r-black">
          <div className="flex flex-col items-center">
            <span className="text-[9px] xs:text-[12px] font-bold">
              十二運星
            </span>
            <span className="text-xxxs xs:text-[8px]">(십이운성)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">死</span>
            <span className="text-xxs xs:text-xs">(사)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">帝旺</span>
            <span className="text-xxs xs:text-xs">(제왕)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">胎</span>
            <span className="text-xxs xs:text-xs">(태)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">長生</span>
            <span className="text-xxs xs:text-xs">(장생)</span>
          </div>
        </TableCell>

        {/* Row 6 */}
        <TableCell isLabel borderRight="border-r-[1.05px] border-r-black">
          <div className="flex flex-col items-center">
            <span className="text-[9px] xs:text-[12px] font-bold">
              十二神殺
            </span>
            <span className="text-xxxs xs:text-[8px]">(십이신살)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">劫殺</span>
            <span className="text-xxs xs:text-xs">(겁살)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">地殺</span>
            <span className="text-xxs xs:text-xs">(지살)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">驛馬殺</span>
            <span className="text-xxs xs:text-xs">(역마살)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">將星殺</span>
            <span className="text-xxs xs:text-xs">(장성살)</span>
          </div>
        </TableCell>

        {/* Row 7 */}
        <TableCell isLabel borderRight="border-r-[1.05px] border-r-black">
          <div className="flex flex-col items-center">
            <span className="text-xs xs:text-[12px] font-bold">貴人</span>
            <span className="text-xxxs xs:text-[8px]">(귀인)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-xxs xs:text-xs">(없음)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-xxs xs:text-xs">(없음)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold">天乙</span>
            <span className="text-xxs xs:text-xs">(천을귀인)</span>
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-col items-center">
            <span className="text-sm xs:text-base font-bold mt-0.5">天乙</span>
            <span className="text-xxs xs:text-xs">(천을귀인)</span>
            <span className="text-sm xs:text-base font-bold mt-0.5">太極</span>
            <span className="text-xxs xs:text-xs">(태극귀인)</span>
            <span className="text-sm xs:text-base font-bold mt-0.5">文昌</span>
            <span className="text-xxs xs:text-xs mb-0.5">(문창귀인)</span>
          </div>
        </TableCell>
      </Table>
    </div>
  );
}
