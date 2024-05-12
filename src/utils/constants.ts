import {IconPosition} from "@/utils/enum";

export const SUGGESTION_BUTTONS = ['Suggest question 1', 'Suggest question 2', 'Suggest question 3'];

export const GROUP_BUTTONS = [{icon: 'alert-circle', text: 'Not confident', iconPosition: IconPosition.Left}, {icon: 'arrow-right', text: 'Human Help', iconPosition: IconPosition.Right}]

export const TABLE_HEADER_LIST = [{name: '', isSort: true, key: 'uuid', column: 3}, {name: 'Name', isSort: true, key: 'name', column: 3}, {name: 'Industry', isSort: false, key: 'industry', column: 3}, {name: 'City', isSort: true, key: 'city', column: 1}, {name: 'State', isSort: true, key: 'state', column: 3}, {name: 'Segment', isSort: false, key: 'segment', column: 3}, {name: 'Owner ID', isSort: true, key: 'owner_id', column: 3}]

export const TABLE_ACTIONS = ['Show Full List', 'Show Query', 'Snow Chart', 'Pin to Dashboard'];
