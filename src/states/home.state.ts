export default class HomeState{
    users!:string[];

    static defaultState():HomeState{
        return {
            users:["no users"]
        };
    }
}
    