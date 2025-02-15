// Promise.all() is commonly use when you want to perform multiple async operations in parallel and wait for all of them to complete before moving on


//case -1 
//resolve resolve resolve


const fun_1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("function one is resolved and data is returned");
        },5000);
    });
}


const fun_2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("function two is resolved and data is returned");
        },3000);
    });
}
const fun_3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("function three is resolved and data is returned");
        },3000);
    });
}


Promise.all([
    fun_1(),
    fun_2(),
    fun_3()
])
.then((arr)=>{
    console.log("All are resolved and all data are ");
    console.log(arr);
})
.catch(error=>console.log("Error in promise",error))
.finally(()=>console.log("All Done"));