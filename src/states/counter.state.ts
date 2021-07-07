export default class CounterState{
    count!:number;

    static defaultState():CounterState{
        return {
            count:0
        };
    }
}
    