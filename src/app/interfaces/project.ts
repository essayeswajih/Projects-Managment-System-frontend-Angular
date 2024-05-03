import { User } from './user';
import { Task } from "./task";

export interface Project {
    id: number;
    name: string;
    description: string;
    userid: number;
    tasks: Task[];
    User : User
}
