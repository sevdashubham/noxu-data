import {CHAT_INPUT_PLACEHOLDER, END_CHAT} from "@/utils/strings";
import {ButtonVariant} from "@/utils/enum";
import NoxuButton from "@/lib/ui/NoxuButton/NoxuButton";
import NoxuIcon from "@/lib/ui/NoxuIcon/NoxuIcon";
import NoxuSelect from "@/lib/ui/NoxuSelect/NoxuSelect";

export const ChatBar = () => {
    return (
        <form className="flex flex-row pt-4 gap-4 flex-1">
            <div className="flex flex-row flex-1">
                <label htmlFor="location-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                <NoxuSelect options={[]}/>
                <div className="relative flex flex-1 gap-2">
                    <input type="search" id="location-search"
                           className="flex-1 w-full px-3 py-2 placeholder-slate-400 text-slate-900 text-base leading-6 font-normal rounded-e-md border-s-0 border-s-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                           placeholder={CHAT_INPUT_PLACEHOLDER} required/>
                    <button type="button" className="absolute inset-y-0 end-0 flex items-center px-3">
                        <NoxuIcon icon={'chat-send'} height={1.5} width={1.5}/>
                    </button>
                </div>
            </div>
            <NoxuButton label={END_CHAT} variant={ButtonVariant.Alert}/>
        </form>
    )
}
