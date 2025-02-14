
// event bubbling is -> changes propagating from child to parent tags 



var div  = document.querySelector("body");

div.addEventListener("click",()=>{
    console.log("div");
})