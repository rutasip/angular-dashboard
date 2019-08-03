export interface WidgetTableUser {
    id: number;
    first_name: string;
    last_name: string;
}

export enum WidgetType {
    Table = "table",
    Messenger = "messenger",
}

export type Widget = WidgetTable | WidgetMessenger;

export interface WidgetTable {
    id: number;
    color: string;
    data: WidgetTableUser[];
    title: string;
    type: WidgetType.Table;
}

export interface WidgetMessengerUser {
    id: number;
    user_id: number;
    first_name: string;
    last_name: string;
    message: string;
}

export interface WidgetMessenger {
    id: number;
    data: WidgetMessengerUser[];
    title: string;
    type: WidgetType.Messenger;
}


// Create new table or messenger
export type WidgetCreate = WidgetTableCreate | WidgetMessengerCreate;

export interface WidgetTableCreate {
    color: string;
    data: string;
    title: string;
    type: WidgetType.Table;
}

export interface WidgetMessengerCreate {
    data: string;
    title: string;
    type: WidgetType.Messenger;
}