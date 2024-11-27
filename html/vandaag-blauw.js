//stap 1: selecteer de elementen die je nodig hebt:
//de buttonom op te klikken
const mybutton = document.querySelector("#test");
const dom = document.body;
// console.log(mybutton)
//het element dat moet verschijnnen
// var menu = document.querySelector(".menu");
// console.log(menu)
console.log(document.querySelector("#test"));


//stap 2: koppel een event listener click
document.querySelector("#test").addEventListener("click", function() {
     console.log(" tetsbenejd");

    document.querySelector('.menu').classList.toggle("hoogte");


    //stap 3: doe iets! Geef het element een class zodat di everschijnt
    // element.classList.toggle("hoogte");
});

// document.getElementsByClassName('vector').addEventListener('click', function() {

    

// })

