export interface WidgetTableUser {
    id: number;
    first_name: string;
    last_name: string;
}

export enum WidgetType {
    Table = "table",
}

export type Widget = WidgetTable;

export interface WidgetTable {
    id: number;
    color: string;
    data: WidgetTableUser[];
    title: string;
    type: WidgetType.Table;
}

// Create new table or messenger
export type WidgetCreate = WidgetTableCreate;

export interface WidgetTableCreate {
    color: string;
    data: string;
    title: string;
    type: WidgetType.Table;
}