import {IconPosition} from "@/utils/enum";

export const SOCKET_EVENT = 'noxu-chat';

export const SUGGESTION_BUTTONS = ['Suggest question 1', 'Suggest question 2', 'Suggest question 3'];

export const GROUP_BUTTONS = [{
    icon: 'alert-circle',
    text: 'Not confident',
    iconPosition: IconPosition.Left
}, {icon: 'arrow-right', text: 'Human Help', iconPosition: IconPosition.Right}]

export const TABLE_HEADER_LIST = [{name: '', isSort: true, key: 'uuid', column: 1}, {
    name: 'Name',
    isSort: true,
    key: 'name',
    column: 3
}, {name: 'Industry', isSort: false, key: 'industry', column: 1}, {
    name: 'City',
    isSort: true,
    key: 'city',
    column: 1
}, {name: 'State', isSort: true, key: 'state', column: 1}, {
    name: 'Segment',
    isSort: false,
    key: 'segment',
    column: 1
}, {name: 'Owner ID', isSort: true, key: 'owner_id', column: 2}]

export const TABLE_ACTIONS = ['Show Full List', 'Show Query', 'Snow Chart', 'Pin to Dashboard'];

export const DEFAULT_TABLE_DATA = [
    {
        uuid: 477,
        name: 'Abbott - Pacocha',
        industry: 'IT',
        city: 'Colorado',
        state: 'CO',
        segment: 'Entertainment',
        owner_id: 7
    }, {
        uuid: 478,
        name: 'Abbott - Pacocha',
        industry: 'IT',
        city: 'Colorado',
        state: 'CO',
        segment: 'Entertainment',
        owner_id: 7
    }, {
        uuid: 479,
        name: 'Abbott - Pacocha',
        industry: 'IT',
        city: 'Colorado',
        state: 'CO',
        segment: 'Entertainment',
        owner_id: 7
    }, {
        uuid: 480,
        name: 'Abbott - Pacocha',
        industry: 'IT',
        city: 'Colorado',
        state: 'CO',
        segment: 'Entertainment',
        owner_id: 7
    }, {
        uuid: 481,
        name: 'Abbott - Pacocha',
        industry: 'IT',
        city: 'Colorado',
        state: 'CO',
        segment: 'Entertainment',
        owner_id: 7
    },
]
