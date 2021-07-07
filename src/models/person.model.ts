const { v4: uuidv4 } = require('uuid');
export default class PersonModel{
    id?:string;
    email!:string;
    firstName!:string;

    static clear():PersonModel{
        return {email:"", firstName:"", id: uuidv4()};
    }
}