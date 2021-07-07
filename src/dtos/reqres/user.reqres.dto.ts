class UserReqres{
    id!:number;
    email!:string;
    first_name!:string;
    last_name!:string;
    avatar!:string;

    static dummy():UserReqres{
        return {
            id:1,
            email:"george.bluth@reqres.in",
            first_name:"George",
            last_name:"Bluth",
            avatar:"https://reqres.in/img/faces/1-image.jpg"
        }
    }
}

class supportReqres{
    url!:string;
    text!:string;

    static dummy():supportReqres{
        return {
            url:"https://reqres.in/#support-heading",
            text:"To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    }
}
export default class UserReqresDto {
    page!: number;
    per_page!: number;
    total!: number;
    total_page!: number;
    data!:UserReqres[];
    support!:supportReqres;

    static dummy():UserReqresDto{
        return {
            page:1,
            per_page:1,
            total:1,
            total_page:1,
            data:[UserReqres.dummy()],
            support:supportReqres.dummy()
        };
    }
}