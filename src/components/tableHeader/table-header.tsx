import {TABLE_HEADER_LIST} from "@/utils/constants";
import NoxuIcon from "@/lib/ui/NoxuIcon/NoxuIcon";


export const TableHeader = () => {

    const renderHeaderCells = () => {
        return TABLE_HEADER_LIST.map((header) => (
            <th scope="col-3"
                className="px-4 py-2 text-base font-medium text-slate-500 bg-white" key={header.key}>
                <div className={`flex flex-row${header.name ? ' gap-2.5': ''}`}>
                <span>{header.name}</span><NoxuIcon icon={'chevron-up-down'} height={16} width={16} />
                </div>
            </th>
        ))
    }
    return (
        <thead>
        <tr>
            {renderHeaderCells()}
        </tr>
        </thead>
    )
}
