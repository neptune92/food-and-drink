// what did i get done
    // nothing
// what are we going to get done
    // brainstorm
    // pseudocode
    // get ideas down
    // get basic elements in
// do i have any impediments
    // time constraints


// MVP
// search barx2
    // dropdown with different criteria to select
// submit buttonx2
// variables
    // search input value
    // variables to get handles on html elements
    // assign classes to html elements 
// functions
    // function for api call
    // event handler for submit button
    // display results function
// basic styling



var foodBtn = document.querySelector('#foodbtn');
var drinkBtn = document.querySelector('#drinkbtn');


// function to handle food search
function foodSearchFun(event) {
    event.preventDefault();
    console.log(event);
    var foodSearchVal = document.querySelector('#foodsearch').value;
    var foodInputVal = document.querySelector('#foodinput').value;


    apiFood(foodSearchVal, foodInputVal);
};

foodBtn.addEventListener('click', foodSearchFun);





//  function to call food api
function apiFood(foodSearchVal, foodInputVal) {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=73d7ef2f2cb944d0baf4c5468330e08b&query=${foodSearchVal}&includeNutrition=true&diet=${foodInputVal}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(function(data) {
        console.log(data);
    })


}



// function to handle drink search
function drinkSearchFun(event) {
    event.preventDefault();

    
    var drinkInputVal = document.querySelector('#drinkinput').value;


    apiDrink(drinkInputVal);
}

drinkBtn.addEventListener('click', drinkSearchFun);





// function to call drink api
function apiDrink(drinkInputVal) {
    fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${drinkInputVal}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "009bda3157mshdff167daf0c3a14p1aa40bjsn4fa8d09c7133",
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}
