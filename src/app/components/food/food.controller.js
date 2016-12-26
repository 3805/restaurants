var FoodController = function() {

  var ctrl = this

  ctrl.foodData = {
    availableOptions: [
      {id: '1', name: 'Burger'},
      {id: '2', name: 'Pizza'},
      {id: '3', name: 'Sushi'},
    ],
    selectedOption: {id:'1', name: 'Burger'}
  }

}

angular
  .module('components.food')
  .controller('FoodController', FoodController)