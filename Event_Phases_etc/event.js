
// event bubbling is -> changes propagating from child to parent tags 



var div  = document.querySelector("body");

div.addEventListener("click",()=>{
    console.log("now this will be called after it child gets called");
})

var button = document.querySelector("button");
button.addEventListener("click",()=>{
    console.log("Button clicked-->this will be called first as event propagates from child to parent __also known as event bubbling");
})