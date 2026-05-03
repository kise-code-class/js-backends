//asychronous program
const add= (a,b)=>{
    setTimeout(()=>{
        const res=a+b
        console.log(`function one:${res}`)
    },30000)

}
add(23,36)
const prod=(c,callback)=>{
    console.log(`function two:${c*callback}`)

}
prod(40,89)