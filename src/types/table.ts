export interface ITable {
    uuid: number,
    name: string,
    industry: string,
    city: string,
    state: string,
    segment: string,
    owner_id: number
}

export interface ITableKey {
    [key: string]: any;
}

export interface ITableHeader {
    name: string,
    isSort: boolean,
    key: string,
    column: number
}

export interface TableContentProps {
    data: ITable[];
}
