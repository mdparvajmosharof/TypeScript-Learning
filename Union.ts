let score : string | number;
score=44
score='667'

type User = {
    name: string;
    id:number;
}
type Admin = {
    UserName : string;
    id:number
}
let Parvaj:User|Admin ={name:"", id:55}
Parvaj ={UserName:"", id: 667}

function getId(id : string| number){
    if(typeof id === "string"){
        id.toUpperCase()
    }

}

// Array

let data : string[] | number[] = [1,44,]
let data2 : string[] | number[] = ["1","44",]
let data3 : (string| number)[] = ["1","44",1,77]




export {}