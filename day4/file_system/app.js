let fs=require('fs');

//CRUD
// let data="Hi today's weather is cool";

// //step1 - create file & pass data
// // fs.writeFile('demo.txt',data,{encoding:'utf-8'},(err)=>{
// //     if(err) throw err;
// //     console.log("file created successfully");
    
// // });

// //way2 
// fs.writeFileSync('demo.txt',data,(err)=>{
//         if(err) throw err;
//         console.log("file created successfully");
        
//     });

// //read a fie

// let fileread=fs.readFileSync('demo.txt');
// // console.log(fileread.toString());

// //update
// fs.appendFileSync('demo.txt','\n i hope this weather will be same for next days');

// //delete

// fs.unlinkSync('demo.txt');

let data="Hii Guys we are leraning the Mern Stack Developement";

fs.writeFileSync('demo.txt',data,(err)=>{
    if(err) throw err;
    console.log("file created");
});

let rd=fs.readFileSync('demo.txt');
console.log(rd.toString());

fs.appendFileSync('demo.txt','\n Enjoy the session');
