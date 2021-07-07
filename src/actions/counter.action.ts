export type CounterAction = 
    | {type:"DEFAULT"}
    | {type:"INCREMENT", value:number}
    | {type:"DECREMENT", value:number};