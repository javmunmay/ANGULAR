import { Pet } from "./pet";

export interface Owner {
    id:number,
    first_name: string,
    last_name:string,
    address:string,
    city:string,
    telephone:string,
    pets:Pet[];
}
