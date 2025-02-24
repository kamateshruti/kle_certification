let promise=new Promise(function(resolve,reject){
    console.log("wait for promise");

    setTimeout(function(){
        let data="promise resolved";
        let err='promise is rejected';
        resolve(data);
        reject(err);
    },2000)
    
})

// console.log(promise);

promise.then(function(data){
    console.log(data);
    
}).catch(function(err){
    console.log(err);
    
})
