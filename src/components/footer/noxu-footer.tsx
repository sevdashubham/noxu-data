import NoxuButton from "@/lib/ui/NoxuButton/NoxuButton";
import {SUGGESTION_BUTTONS} from "@/utils/constants";
import {ChatBar} from "@/components/chat/chat-bar";

export const NoxuFooter = () => {
    return (
        <div className="flex flex-col min-w-0 gap-x-4 border-t border-slate-300 pt-4 py-8 lg:px-36 sm:px-8 px-2">
            <div className="flex flex-row gap-4">
                {SUGGESTION_BUTTONS.map((label: string) => (<NoxuButton key={label} label={label}/>))}
            </div>
            <ChatBar />
        </div>
    )
}
