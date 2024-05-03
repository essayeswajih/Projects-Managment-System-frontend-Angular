export interface Task {
    id: number;
    title: string;
    description: string;
    done: boolean;
    startDate: string;
    endDate: string; 
    favorite: boolean;
}