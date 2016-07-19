// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.cart = [{
            "Name" : "Demo Riga 1",
            "Price" : 10
        },
        {
            "Name" : "Demo Riga 2",
            "Price" : 5
        }];
 
 $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.cart.length; i++){
        var product = $scope.cart[i];
        total += (product.Price);
    }
    return total;
}

 $scope.addItem = function () {
	console.log("ciao");
        $scope.cart.push({
            Name: 'DEMO',
            name: 0
        });
    };

 $http.get("entity.json")
    .then(function(response) {
        $scope.entity = response.data;
    });
	
	
  $scope.pageChangeHandler = function(num) {
      
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
  
  };
}




myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);
