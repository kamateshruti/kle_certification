// let person={
//     pname:'shruti',
//     age:21,
//     favcolor:'white'
// }

// console.log(person);
// console.log(person.pname);
// console.log(person.age);

// person.pname='shruti kamate';
// // console.log(person);

//  person.gender='female';
// //  console.log(person);
 
// delete person.favcolor;
// console.log(person);

let person={
    pname:'shruti',
    age:21,
    favcolor:'white',
    fun:function print(){
        return(`my name is ${this.pname} and age is ${this.age}`);
    },
    newobj:{
        gender:"female",
        address:"nipani",
    }
}

// console.log(person.fun());

console.log(person.newobj.address);
