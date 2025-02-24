// function Details(){
//     this.name="shruti";
//     this.age=21;
//     this.address="nipani";
// }
// let user=new Details();
// console.log(user.name);

function Details(nam,umar,place){
    this.name=nam;
    this.age=umar;
    this.address=place;
    this.description=function(){
        return (`my name is ${this.name}, my age is ${this.age}`)
    }
}
let user=new Details("shruti",21,"nipani");
console.log(user);
console.log(user.description());


let user1=new Details("devaki",21,"nipani");
console.log(user1);
console.log(user1.description());


let user2=new Details("preeti",21,"nipani");
console.log(user2);
console.log(user2.description());


