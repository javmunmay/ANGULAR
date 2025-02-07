import { Owner } from "./owner";
import { Visit } from "./visit";
import { Pettype } from "./pettype";


export interface Pet {
    id:number,
    name:string,
    birthDate: Date,
    type: Pettype,
    typeName?: string,
    owner:Owner,
    visits: Visit[]
}

