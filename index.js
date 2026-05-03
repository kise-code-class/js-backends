const fs = require("fs");
const { type } = require("os");
const path = require("path");

// //reading a file

// fs.readFile("file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err.message);
//   }
//   //console.log(data);

// });

// fs.writeFile('data.txt','my data','utf-8',(err)=>{
//   if(err){
//     console.log(err.message)
//   }else{
//     console.log('saved successfully')
//   }
// })
// //append file--create if the file doesnt exist or add new content if it exists
// fs.appendFile('file.txt','this is a new piece',(err)=>{
//   if (err){
//     console.log(err.message)
//   }
//   console.log('saved successfully')
// })
//function to ready any file
// const readFileFunction =  (file) => {
//   const filepath = path.join(__dirname, file);
//            fs.readFile(filepath,'utf-8',(err,data)=>{
//           if(err){
//             console.log(err.message)
//           }
//           console.log(data)
//           // return data
//         })

//   };
//readFileFunction('file.txt')

const readFileFunction =  (file,callback) => {
  const filepath = path.join(__dirname, file);
           fs.readFile(filepath,'utf-8',(err,data)=>{
          if(err){
            console.log(err.message)
            callback()
            
          }
          callback(data)
          //console.log(data)
          //  return data
         
        })

  };
  
// const read=(file)=>{
//   const filePath=path.join(__dirname,file);
//   return new Promise((resolve,reject)=>{
//     fs.readFile(filePath,'utf-8',(err,data)=>{
//       if(err){
//         reject(err)
//       }
//       else{
//         resolve(data)
//       }

//     });

//   });
// }


//function to add a file
const writeToFile=(file,data)=>{
  const filepath=path.join(__dirname,file);
  fs.appendFile(filepath,data,(err)=>{
    if(err){
      console.log(err.message)
    }
    else{
      console.log('file written successfully')
    }
  })

}
( ()=>{
  readFileFunction('file.txt',(data)=>{
    writeToFile('data.txt',data)
  })
})()
// writeToFile('writtenFile.txt',data);

// function add(a,b){
//   return a+b
// }

// function product(c,callback){
//   return c *callback
// }
// const x=add(90,20)
// console.log(product(20,x))