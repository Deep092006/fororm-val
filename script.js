
let form = document.querySelector("form");
let name = document.querySelector("#name")
let pass = form.elements[1];//  batter way to select form element using elements property
//one submit event
form.addEventListener("submit",function(e){
   e.preventDefault();// to stop redirecting next page while form submits
    console.log(`${name.value} is ${pass.value}`); 
    
});
//change on full event complete and we live it
name.addEventListener("change",function(e){
    console.log("calue changes");
    console.log(this.value);
});
// change on every single input
pass.addEventListener("input",function(e){
    console.log("calue changes");
    console.log(this.value);
})