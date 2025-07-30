let arr = [123 , 123 ,45 ,323 ,3];
let newArr = arr.map(((too)=>{
    return {
        oldvalue:too,
        newvalue:too * 2
    }
})
)
 
console.log(newArr)

