var foodBtn = document.querySelector("#foodbtn");
var drinkBtn = document.querySelector("#drinkbtn");
var pastFood = [];

// function to handle food search
function foodSearchFun(event) {
  event.preventDefault();
  console.log(event);
  var foodSearchVal = document.querySelector("#foodsearch").value;
  var foodInputVal = document.querySelector("#foodinput").value;

  pastFood.push(foodSearchVal);
  console.log(pastFood);
  localStorage.setItem("food", JSON.stringify(pastFood));
  var data = localStorage.getItem("food");
  console.log(JSON.parse(data));

  // pastSearchFood();

  // apiFood(foodSearchVal, foodInputVal);
}

foodBtn.addEventListener("click", foodSearchFun);

// parse to json

//  function to call food api
function apiFood(foodSearchVal, foodInputVal) {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=c2611ff35bae4861a43a6e9ecbe3dcd4&includeNutrition=true&diet=${foodInputVal}&query=${foodSearchVal}&addRecipeInformation=true&instructionsRequired=true`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => generateHtml(data));
  var generateHtml = (data) => {
    console.log(data);
    var html = `
        <div class="container recipeInfo">
        <div class="row">
        <img src= ${data.results[0].image} id="foodImage">
        <div class="text">Recipe Name: ${data.results[0].title}</div>
        <div class="text">Serving Size: ${data.results[0].servings}</div>
        <div class="text">Time: ${data.results[0].readyInMinutes} min</div>
        <div class="text"><a href= ${data.results[0].sourceUrl} target="_blank"> Link to recipe</a</div>
    </div>
        `;
    //once the submit button is clicked the food api will show
    var foodDisplayDiv = document.querySelector(".foodDisplay");
    foodDisplayDiv.classList.remove("hide");

    //display food api in card section
    var showRecipe = document.querySelector(".recipeHere");
    showRecipe.innerHTML = html;
  };
}

// function to handle drink search
function drinkSearchFun(event) {
  event.preventDefault();

  apiDrink();
}

drinkBtn.addEventListener("click", drinkSearchFun);

// function to call drink api
function apiDrink() {
  var link = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  console.log(link);
  fetch(link)
    .then((res) => res.json())
    .then((data) => generateHtml(data));
  var generateHtml = (data) => {
    console.log(data);
    var html = `
        
    <div class="container ingredints">
        <div class="row">
        <img src= ${data.drinks[0].strDrinkThumb} class="column drinkPic">
    <div class="text">Cocktail Name: ${data.drinks[0].strDrink}</div>
    `;
    if (data.drinks[0].strIngredient1) {
      html += `<div class="text">Ingredints: <br> ${data.drinks[0].strIngredient1}</div>`;
    }

    if (data.drinks[0].strIngredient2) {
      html += `<div class="text"> ${data.drinks[0].strIngredient2}</div>`;
    }

    if (data.drinks[0].strIngredient3) {
      html += `<div class="text"> ${data.drinks[0].strIngredient3}</div>`;
    }

    if (data.drinks[0].strIngredient4) {
      html += `<div class="text"> ${data.drinks[0].strIngredient4}</div>`;
    }

    if (data.drinks[0].strIngredient5) {
      html += `<div class="text"> ${data.drinks[0].strIngredient5}</div>`;
    }

    html += `<div class="text">Instructions: <br> ${data.drinks[0].strInstructions}</div>
        </div>
        </div>`;

    //once the submit button is clicked the drink api will show
    var drinkDisplayDiv = document.querySelector(".drinkDisplay");
    drinkDisplayDiv.classList.remove("hide");

    //displays drink in card section
    var showDrink = document.querySelector(".drinksHere");
    showDrink.innerHTML = html;
  };
}
