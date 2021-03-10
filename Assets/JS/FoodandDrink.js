var foodBtn = document.querySelector('#foodbtn')
var drinkBtn = document.querySelector('#drinkbtn')


// function to handle food search
function foodSearchFun(event) {
    event.preventDefault();

    var foodSearchVal = document.querySelector('#foodsearch').value;
    var foodInputVal = document.querySelector('#foodinput').value;

    if (!foodSearchVal) {
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
       
        return;
    }

    apiDrink(drinkSearchVal, drinkInputVal);
}

drinkBtn.addEventListener('click', drinkSearchFun);



// function to call drink api
function apiDrink() {

}

function renderResults() {


}

fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2d62346aabmsh1e85f5b9942a34dp19b4aajsn061b29265965",
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

