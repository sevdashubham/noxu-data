import {iconOptions} from "@/types/ui-lib";

const icons: iconOptions = {
    'chat-send': require('../../public/assets/icons/chat/send.svg'),
    'chat-message': require('../../public/assets/icons/chat/message-circle.svg'),
    'chevron-up-down': require('../../public/assets/icons/list/chevron-up-down.svg'),
};

export default (iconName: string) => icons[iconName];
