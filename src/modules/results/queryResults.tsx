"use client"
import {useEffect, useState} from "react";
import NoxuIcon from "@/lib/ui/NoxuIcon/NoxuIcon";
import NoxuButton from "@/lib/ui/NoxuButton/NoxuButton";
import {ButtonGroup} from "@/components/buttonGroup/button-group";
import {TableHeader} from "@/components/tableHeader/table-header";
import {QUERY_TEXT, TABLE_INFO_TEXT} from "@/utils/strings";
import {DEFAULT_TABLE_DATA, SOCKET_EVENT, TABLE_ACTIONS} from "@/utils/constants";
import {ITable} from "@/types/table";
import {TableContent} from "@/components/tableContent/table-content";
import {socket} from "@/lib/socket-client/socket-client";

const QueryResults = () => {
    const [tableData, setTableData] = useState<ITable[]>(DEFAULT_TABLE_DATA);
    const [isInfoVisible, setIsInfoVisible] = useState<boolean>(true);
    const [chatList, setChatList] = useState<Array<string>>([]);

    useEffect(() => {
        socket.on(SOCKET_EVENT, (value) => {
            setChatList((prevMessages) => [...prevMessages, value]);
        });

        return () => {
           socket.off(SOCKET_EVENT);
        };
    }, [])

    const renderTableInfo = () => {
        if (isInfoVisible) {
            return <div
                className="flex flex-row py-2 px-3 border-b border-slate-300 justify-between w-full text-base font-semibold text-slate-600">
                <div className="flex flex-row gap-1.5">
                    <NoxuIcon icon={'info'} height={1.25} width={1.25}/>
                    {TABLE_INFO_TEXT}
                </div>
                <span className="cursor-pointer">
                <NoxuIcon icon={'close'} height={1.25} width={1.25} onClick={() => setIsInfoVisible(false)}/>
                </span>
            </div>
        }
        return null;
    }
    const renderTableActions = () => {
        return TABLE_ACTIONS.map((action: string) => (
            <NoxuButton label={action} key={action}/>
        ))
    }

    return (
        <div className="py-8 lg:px-36 sm:px-8 px-2">
            <ButtonGroup/>
            <div className="flex flex-col pt-4">
                <div className="flex flex-row gap-4">
                    <NoxuIcon icon={"logo-noxu"} height={2.5} width={2.5}/>
                    <span className="text-base font-normal py-2 text-slate-900 leading-6">{QUERY_TEXT}</span>
                </div>
                <div className="py-2 pl-14 overflow-x-auto">
                    <div className="min-w-full inline-block align-middle">
                        <div className="border border-slate-300 rounded-xl overflow-hidden">
                            <table className="min-w-full divide-y divide-slate-300">
                                <TableHeader/>
                                <TableContent data={tableData}/>
                            </table>
                            {renderTableInfo()}
                            <div className="flex flex-row gap-4 p-3 bg-white">
                                {renderTableActions()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    {chatList.map((chat: string) => <h3>{chat}</h3>)}
                </div>
            </div>
        </div>
    )
}

export default QueryResults;
