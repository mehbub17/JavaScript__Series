// Promise.all() is commonly use when you want to perform multiple async operations in parallel and wait for all of them to complete before moving on


//case -1 
//resolve resolve resolve


// const fun_1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("function one is resolved and data is returned");
//         },5000);
//     });
// }


// const fun_2 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const data = [1,2,3,4];
//             resolve(data);
//         },3000);
//     });
// }
// const fun_3 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("function three is resolved and data is returned");
//         },3000);
//     });
// }


// Promise.all([
//     fun_1(),
//     fun_2(),
//     fun_3()
// ])
// .then((arr)=>{
//     console.log("All are resolved and all data are ");
//     console.log(arr);
// })
// .catch(error=>console.log("Error in promise",error))
// .finally(()=>console.log("All Done"));


// const data = await fun_2();

// data.forEach(element => {
//     console.log(element*2);
// });


//case 2  resolve rejected

const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data from gatData one");
        },2000);
    });
}

const getError = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Data not available error here");
        },2000);
    });
}


Promise.all([
    getData(),
    getError()])
    .then(dataArray=>{
        console.log("All data fetched",dataArray);
    })
    .catch(error=>{
        console.log("Error occurred ", error);
    });