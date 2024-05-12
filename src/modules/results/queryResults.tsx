"use client"
import NoxuIcon from "@/lib/ui/NoxuIcon/NoxuIcon";
import {QUERY_TEXT, TABLE_INFO_TEXT} from "@/utils/strings";
import {ButtonGroup} from "@/components/buttonGroup/button-group";
import {TableHeader} from "@/components/tableHeader/table-header";
import {TABLE_ACTIONS, TABLE_HEADER_LIST} from "@/utils/constants";
import NoxuButton from "@/lib/ui/NoxuButton/NoxuButton";
import {useState} from "react";

const QueryResults = () => {
    const [tableData, setTableData] = useState([
        {
            uuid: 477,
            name: 'Abbott - Pacocha',
            industry: 'IT',
            city: 'Colorado',
            state: 'CO',
            segment: 'Entertainment',
            owner_id: 7
        },{
            uuid: 477,
            name: 'Abbott - Pacocha',
            industry: 'IT',
            city: 'Colorado',
            state: 'CO',
            segment: 'Entertainment',
            owner_id: 7
        },{
            uuid: 477,
            name: 'Abbott - Pacocha',
            industry: 'IT',
            city: 'Colorado',
            state: 'CO',
            segment: 'Entertainment',
            owner_id: 7
        },{
            uuid: 477,
            name: 'Abbott - Pacocha',
            industry: 'IT',
            city: 'Colorado',
            state: 'CO',
            segment: 'Entertainment',
            owner_id: 7
        },{
            uuid: 477,
            name: 'Abbott - Pacocha',
            industry: 'IT',
            city: 'Colorado',
            state: 'CO',
            segment: 'Entertainment',
            owner_id: 7
        },
    ]);
    const [isInfoVisible, setIsInfoVisible] = useState(true);
    const renderTableContent = () => {
        return tableData.map((data) => (<tr>
            {TABLE_HEADER_LIST.map((table) => (
                <td className="px-4 py-2 bg-white border-b border-slate-300 whitespace-nowrap text-base font-regular text-slate-900">
                    {data[table.key]}
                </td>
            ))}
        </tr>))
    }
    const renderTableInfo = () => {
        if (isInfoVisible) {
           return <div className="flex flex-row py-2 px-3 border-b border-slate-300 justify-between w-full text-base font-semibold text-slate-600">
               <div className="flex flex-row gap-1.5">
               <NoxuIcon icon={'info'} height={20} width={20} />
               {TABLE_INFO_TEXT}
               </div>
               <NoxuIcon icon={'close'} height={20} width={20} onClick={() => setIsInfoVisible(false)}/>
           </div>
        }
        return null;
    }
    const renderTableActions = () => {
        return TABLE_ACTIONS.map((action: string) => (
            <NoxuButton label={action}/>
        ))
    }
    return (
        <div className="py-8 lg:px-36 sm:px-8 px-2">
            <ButtonGroup />
            <div className="flex flex-col pt-4">
                <div className="flex flex-row gap-4">
                    <NoxuIcon icon={"logo-noxu"} height={40} width={40}/>
                    <span className="text-base font-normal py-2 text-slate-900 leading-6">{QUERY_TEXT}</span>
                </div>
                <div className="py-2 pl-14 overflow-x-auto">
                    <div className="min-w-full inline-block align-middle">
                        <div className="border border-slate-300 rounded-xl overflow-hidden">
                            <table className="min-w-full divide-y divide-slate-300">
                                <TableHeader />
                                <tbody className="divide-y divide-slate-300">
                                  {renderTableContent()}
                                </tbody>
                            </table>
                            {renderTableInfo()}
                            <div className="flex flex-row gap-4 p-3 bg-white">
                                {renderTableActions()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QueryResults;
