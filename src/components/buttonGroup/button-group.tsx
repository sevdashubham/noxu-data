import NoxuIcon from "@/lib/ui/NoxuIcon/NoxuIcon";
import {GROUP_BUTTONS} from "@/utils/constants";
import {IconPosition} from "@/utils/enum";

export const ButtonGroup = () => {

    const renderButtons = () => {
        return GROUP_BUTTONS.map((group, index: number) => {
            const isFirst = index === 0;
            const isLast = index === (GROUP_BUTTONS.length-1);
            const populateBorder = () => {
                if (isFirst) {
                    return 'rounded-s-md border-e-0'
                }
                if (isLast) {
                    return 'rounded-e-md'
                }
                return ''
            }
            const renderIcon = () => {
                return <NoxuIcon icon={group.icon} height={20} width={20}/>
            }
            return <button type="button"
                           className={`flex-row gap-1.5 px-2 py-1.5 text-base font-semibold bg-white border border-slate-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 inline-flex items-center ${populateBorder()}`}>
                {group.iconPosition === IconPosition.Left && renderIcon()}
                <span className="text-[#F0671A]">{group.text}</span>
                {group.iconPosition === IconPosition.Right && renderIcon()}
            </button>
        });
    }
    return (
        <div className="inline-flex rounded-md" role="group">
            {renderButtons()}
        </div>
    )
}
