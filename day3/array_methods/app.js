//for each()

let arr=[1,2,3,4,5];

//method1 - foreach()
// arr.forEach(function(item,index) {
//     console.log(`my index is ${index} and value ${item}`);
    
// });

//method2 - map()
// let newarr=arr.map(function(item,index){
//     console.log(` ${item*2}`);
    
// })

//filter()

let newArr=arr.filter(function(item,index){
    if(item>=3){
        console.log(item);
        return true;
        
    }
    return false;
})
console.log(newArr);
