'use strict';

// constructor
const allfood = [];
function Food(foodIDVal,foodnameVal, typeVal, priceVal , imageVal) {
    this.FoodID = foodIDVal;
    this.FoodName = foodnameVal;
    this.Type = typeVal;
    this.Price = priceVal;
    this.ImageURL = imageVal;
    
    allfood.push(this);
}