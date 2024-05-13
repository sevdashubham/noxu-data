import React, {FC} from 'react';
import NoxuIcon from "@/lib/ui/NoxuIcon/NoxuIcon";
import {SelectProps} from "@/types/ui-lib";

const NoxuSelect: FC<SelectProps> = ({
                                         options,
                                         value,
                                         onChange,
                                     }) => {
    return (
        <div>
            <button id="dropdown-noxu-button" data-dropdown-toggle="dropdown-noxu-select"
                    className="flex-shrink-0 z-10 inline-flex items-center py-2 px-2 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-s-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100"
                    type="button">
                <NoxuIcon icon={"chat-message"} height={1.5} width={1.5}/>
                <span className={"text-base leading-6 px-2 text-slate-900 font-normal"}>Chat</span>
                <NoxuIcon icon={"chevron-up-down"} height={1} width={1}/>
            </button>
        </div>
    );
};

export default NoxuSelect;
