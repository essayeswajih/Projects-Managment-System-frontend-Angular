import { Project } from "./project";

export interface User{
    id: number
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
    userCode: string;
    role:string
    project:Project[]
}