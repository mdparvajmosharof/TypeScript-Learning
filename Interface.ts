interface ser {
    name: string;
    mail:string;
    // startTrial : () => string;
    startTrial():string ;
}
interface ser{
    google : string
}
const parvaj:ser = {
    name:"",mail:"",
    startTrial() {
        return ""
    },
    google:""
}

interface Admin extends ser{
    role: "admin"|"ta";
}
const parvajMosharof:Admin = {
    name:"",mail:"",
    startTrial() {
        return ""
    },
    google:"",role:"admin"
}
