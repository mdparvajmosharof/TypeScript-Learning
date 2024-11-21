type IsTrue = boolean;

let inf: IsTrue = true;

type User = {
    readonly _id : string
    name: string;
    email: string;
    isPaid : boolean;
    creditDetails?: string;
}

let MyUser:User ={_id: "34567",name:"mp", email: "d", isPaid: false}
MyUser.name= " MD. Parvaj Moharof"

function NewUser(user:User){}

NewUser({_id: "34567",name:"mp", email: "d", isPaid: false, creditDetails: "79"})
NewUser({_id: "thg",name:"mp", email: "d", isPaid: false})

export {}