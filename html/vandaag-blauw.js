const mybutton = document.querySelector("#test");
const dom = document.body;

console.log(document.querySelector("#test"));

document.querySelector("#test").addEventListener("click", function() {
    console.log(" tetsbenejd");
    document.querySelector('.menu').classList.toggle("open");

});