var foodBtn = document.querySelector('#foodbtn');
var drinkBtn = document.querySelector('#drinkbtn');
var pastFood = []

// function to handle food search
function foodSearchFun(event) {
    event.preventDefault();
    console.log(event);
    var foodSearchVal = document.querySelector('#foodsearch').value;
    var foodInputVal = document.querySelector('#foodinput').value;

    pastFood.push(foodSearchVal)
    console.log(pastFood);
    localStorage.setItem('food', JSON.stringify(pastFood));
    var data = localStorage.getItem('food');
    console.log(JSON.parse(data));


    // pastSearchFood();

    // apiFood(foodSearchVal, foodInputVal);
};

foodBtn.addEventListener('click', foodSearchFun);

// parse to json



//  function to call food api
function apiFood(foodSearchVal, foodInputVal) {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=73d7ef2f2cb944d0baf4c5468330e08b&query=${foodSearchVal}&includeNutrition=true&diet=${foodInputVal}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then((data) => generateHtml(data))
    var generateHtml = (data) => {
        console.log(data)
        var html = `
        <img src= ${data.results[0].image}>
    <div class="title">${data.results[0].title}</div>
    <div class="recipeInfo">
        <span>Servings: ${data.results[0].servings}</span>
        <span>Time:${data.results[0].readyInMinutes}</span>
        <span>Link:${data.results[0].sourceUrl}</span>
    </div>
        `
        var showRecipe = document.querySelector(".recipeHere")
        showRecipe.innerHTML = html
    }


}



// function to handle drink search
function drinkSearchFun(event) {
    event.preventDefault();
    var drinkSearchVal = document.querySelector('#drinksearch').value;
    var drinkInputVal = document.querySelector('#drinkinput').value;
    localStorage.setItem('drink', drinkSearchVal);
    pastSearchDrink();




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

function renderResults() {


};

function pastSearchFood() {
    var data = localStorage.getItem('food');
    // parse, create for loop
    var parseData = JSON.parse(data);
    


}

