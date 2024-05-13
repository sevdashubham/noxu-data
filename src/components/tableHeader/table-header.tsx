import {TABLE_HEADER_LIST} from "@/utils/constants";
import NoxuIcon from "@/lib/ui/NoxuIcon/NoxuIcon";
import {ITableHeader} from "@/types/table";

export const TableHeader = () => {

    const renderHeaderCells = () => {
        return TABLE_HEADER_LIST.map((header: ITableHeader) => (
            <th key={header.key}
                className={`grid col-span-${header.column} px-4 py-2 text-base font-medium text-slate-500 bg-white`}>
                <div className={`flex flex-row cursor-pointer items-center${header.name ? ' gap-2.5': ''}`}>
                <span>{header.name}</span>{header.isSort && <NoxuIcon icon={'chevron-up-down'} height={1} width={1} />}
                </div>
            </th>
        ))
    }
    return (
        <thead>
        <tr className="grid grid-cols-10">
            {renderHeaderCells()}
        </tr>
        </thead>
    )
}
