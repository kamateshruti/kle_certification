// //sync
// console.log("first");
// console.log("second");
// console.log("third");

//async

// console.log("first");
// // console.log("second");
// setTimeout(function(){
//     console.log("it will run after 2s");
    
// },2000)
// // console.log("third");
// setTimeout(function(){
//     console.log("it will run after 4s");
    
// },4000)
// console.log("third");


//set interval

// setInterval(function(){
//     console.log("it will run after 2s");
    
// },2000)

let count=0;
let intervalID=setInterval(function(){
    count++;
    console.log(`my count is ${count}`);
    
    if(count===5){
        clearInterval(intervalID);
        console.log('task completed');
        
    }
},1000)