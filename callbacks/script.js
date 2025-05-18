//what is a Callback Function in js
setTimeout(function (){
    console.log("timer ");    
},5000);

function x(y){
console.log("x");
y();
}
x(function y(){
console.log("y");
})

//js is a synchronous and single-threaded language

//BLocking the main Thread

//Power of Callbacks

//Deep about Event Listeners

//Closures Demo with Event Listeners
function xyz(){
    let count = 0
    document.getElementById("clickMe").addEventListener("click",function(){
    console.log("button clicked",++count);  
})
}

xyz();

//Scope Demo with Event Listener

//Garbage Collections and Remove Evenet listener



//events
function xyz(){
    let count = 0
    document.getElementById("clickMe").addEventListener("click",function(){
    console.log("button clicked",++count);  
})
}

xyz();
