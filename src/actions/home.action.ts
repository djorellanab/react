export type HomeAction = 
    | {type:"DEFAULT"}
    | {type:"SET_USERS", users:string[]}