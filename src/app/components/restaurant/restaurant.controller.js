var RestaurantController = function() {

  var ctrl = this

  ctrl.burgerRestaurantData = {
    availableOptions: [
      {id: '4', name: 'Burger Restaurant 1', address: 'Address Burger Restaurant 1'},
      {id: '5', name: 'Burger Restaurant 2', address: 'Address Burger Restaurant 2'},
      {id: '6', name: 'Burger Restaurant 3', address: 'Address Burger Restaurant 3'},
    ],
    selectedOption: {id: '4', name: 'Burger Restaurant 1', address: 'Address Burger Restaurant 1'}
  }

  ctrl.pizzaRestaurantData = {
    availableOptions: [
      {id: '7', name: 'Pizza Restaurant 1', address: 'Address Pizza Restaurant 1'},
      {id: '8', name: 'Pizza Restaurant 2', address: 'Address Pizza Restaurant 2'},
      {id: '9', name: 'Pizza Restaurant 3', address: 'Address Pizza Restaurant 3'},
    ],
    selectedOption: {id: '7', name: 'Pizza Restaurant 1', address: 'Address Pizza Restaurant 1'}
  }

  ctrl.sushiRestaurantData = {
    availableOptions: [
      {id: '10', name: 'Sushi Restaurant 1', address: 'Address Sushi Restaurant 1'},
      {id: '11', name: 'Sushi Restaurant 2', address: 'Address Sushi Restaurant 2'},
      {id: '12', name: 'Sushi Restaurant 3', address: 'Address Sushi Restaurant 3'},
    ],
    selectedOption: {id: '10', name: 'Sushi Restaurant 1', address: 'Address Sushi Restaurant 1'}
  }

  ctrl.restaurantData = {
    Burger: ctrl.burgerRestaurantData, 
    Pizza: ctrl.pizzaRestaurantData, 
    Sushi: ctrl.sushiRestaurantData
  }

}

angular
  .module('components.restaurant')
  .controller('RestaurantController', RestaurantController)