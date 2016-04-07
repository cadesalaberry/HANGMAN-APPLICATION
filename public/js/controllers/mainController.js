// MAIN CONTROLLER
function mainController($scope, $http, PenduService) {
	$scope.Pendu = "pendu";
	
	function load(){
		PenduService.get().then(function(res){
			$scope.pendu = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		PenduService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(pendu){
		penduService.update(pendu._id, pendu).then(function(res){
			load();
		});
	}
	$scope.delete = function(pendu){
		penduService.delete(pendu._id).then(function(res){
			load();
		});
	}
	load();
}
