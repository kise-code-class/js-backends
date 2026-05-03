//async callbacks

const simulateAsync=(a,b,callback)=>{
    setTimeout(()=>{
        const add=a+b
        callback(add)

    },4000)

}
const prod= (c,callback)=>{
    const x= callback
    console.log(c*x)
}
(()=>{
   simulateAsync(30,40,(res)=>{
    prod(70,res)
   })

})()