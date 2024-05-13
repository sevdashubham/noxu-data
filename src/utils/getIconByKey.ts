import {iconOptions} from "@/types/ui-lib";

const icons: iconOptions = {
    'chat-send': require('../../public/assets/icons/chat/send.svg'),
    'chat-message': require('../../public/assets/icons/chat/message-circle.svg'),
    'chevron-up-down': require('../../public/assets/icons/list/chevron-up-down.svg'),
    'alert-circle': require('../../public/assets/icons/list/alert-circle.svg'),
    'arrow-right': require('../../public/assets/icons/list/arrow-right.svg'),
    'logo-noxu': require('../../public/assets/icons/logo/logo-noxu.svg'),
    'info': require('../../public/assets/icons/list/info.svg'),
    'close': require('../../public/assets/icons/list/close.svg'),
};

const IconMap = (iconName: string) => icons[iconName];
export default IconMap;
