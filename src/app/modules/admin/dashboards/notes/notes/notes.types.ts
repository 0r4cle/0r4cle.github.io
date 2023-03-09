export interface Task {
    id?: string;
    content?: string;
    completed?: string;
}

export interface Label {
    id?: string;
    title?: string;
}

export interface Note {
    id?: string;
    title?: string;
    content?: string;
    tasks?: Task[];
    image?: string | null;
    price?: number;
    labels?: Label[];
    user_view?: boolean;
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string | null;
}
export interface Archived {
    user_view?: boolean;
    id?: string;
    title?: string;
    content?: string;
    tasks?: Task[];
    price?: number;
    image?: string | null;
    labels?: Label[];
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string | null;
}
