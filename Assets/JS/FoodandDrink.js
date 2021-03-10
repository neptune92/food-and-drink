var foodBtn = document.querySelector('#foodbtn')
var drinkBtn = document.querySelector('#drinkbtn')


// function to handle food search
function foodSearchFun(event) {
    event.preventDefault();

    var foodSearchVal = document.querySelector('#foodsearch').value;
    var foodInputVal = document.querySelector('#foodinput').value;

    if (!foodSearchVal) {
        console.error('You need a search input value!');
        return;
    }

    apiFood(foodSearchVal, foodInputVal);
}

foodBtn.addEventListener('click', foodSearchFun);


//  function to call food api
function apiFood() {

}



// function to handle drink search
function drinkSearchFun(event) {
    event.preventDefault();

    var drinkSearchVal = document.querySelector('#drinksearch').value;
    var drinkInputVal = document.querySelector('#drinkinput').value;

    if (!drinkSearchVal) {
        console.error('You need a search input value!');
        return;
    }

    apiDrink(drinkSearchVal, drinkInputVal);
}

drinkBtn.addEventListener('click', drinkSearchFun);



// function to call drink api
function apiDrink() {

}

