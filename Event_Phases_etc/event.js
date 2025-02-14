
// event bubbling is -> changes propagating from child to parent tags 



var div  = document.querySelector("body");

div.addEventListener("click",()=>{
    console.log("now this will be called after it child gets called");
})

var button = document.querySelector("button");
button.addEventListener("click",()=>{
    console.log("Button clicked-->this will be called first as event propagates from child to parent __also known as event bubbling");
})



//capturing--->> just give true after callback

var div1 = document.querySelector("#div_1");
var btn1 = document.querySelector("#btn_1");

div1.addEventListener('click',()=>{
    console.log("Parent will be called first as event capturing is done here");
},true);

btn1.addEventListener("click",()=>{
    console.log("Child tag will be called after parent as event capturing is done for this block");
},true);