'use strict';
let form = document.getElementById('form');
let table = document.getElementById('table');
let submit = document.getElementById('submit');

var val = 0;

// constructor
//const allfood = [];
function Food(val,nameVal, typeVal, priceVal) {
    this.FoodID = val;
    this.FoodName = nameVal;
    this.Type = typeVal;
    this.Price = priceVal;

    this.printFoodInfo();
    
    //allfood.push(this);
}

Food.prototype.printFoodInfo = function(){
    let newRow = document.createElement('tr');
    table.appendChild(newRow);

    let newId = document.createElement('td');
    newId.textContent = this.FoodID;
    newRow.appendChild(newId);

    let newName = document.createElement('td');
    newName.textContent = this.FoodName;
    newRow.appendChild(newName);

    let newType = document.createElement('td');
    newType.textContent = this.Type;
    newRow.appendChild(newType);

    let newPrice = document.createElement('td');
    newPrice.textContent = this.Price;
    newRow.appendChild(newPrice);

    newRow.classList.add('row');


}

Food.FoodID
form.addEventListener('submit', handleSubmit);

  function handleSubmit(event){
   event.preventDefault();
   let nameVal = event.target.foodname.value;
   let typeVal = event.target.foodtypes.value;
   let priceVal = event.target.price.value;
   let IDVal = uniqueID();
   const newFood = new Food(val, nameVal, typeVal, priceVal);

   console.log(event);
}

function uniqueID(){
    val=Math.floor(Math.random() * (1100) + 1000);
    return val;
}

//