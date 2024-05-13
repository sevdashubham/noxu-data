import React from "react";
import {ITable, ITableHeader, ITableKey, TableContentProps} from "@/types/table";
import {TABLE_EMPTY_DATA} from "@/utils/strings";
import {TABLE_HEADER_LIST} from "@/utils/constants";

export const TableContent: React.FC<TableContentProps> = ({data}) => {
    const renderTableContent = () => {
        if (data?.length > 0) {
            return data.map((table: ITable) => (<tr key={table.uuid}>
                {TABLE_HEADER_LIST.map((header: ITableHeader) => {
                    const mappedTable = table as ITableKey;
                    const propName: string = header.key;
                    return <td key={header.key} className={`px-4 py-2 bg-white border-b border-slate-300 whitespace-nowrap text-base font-regular text-slate-900 truncate`}>
                        {mappedTable[propName]}
                    </td>
                })}
            </tr>))
        }
        return <tr className="text-base font-regular text-slate-900"><td>{TABLE_EMPTY_DATA}</td></tr>
    }
    return (
        <tbody>
            {renderTableContent()}
        </tbody>
    )
}
