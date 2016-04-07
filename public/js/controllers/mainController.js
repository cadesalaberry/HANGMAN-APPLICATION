// MAIN CONTROLLER
function mainController($scope, $http, PenduService) {
	$scope.Pendu = "PENDU";
	$scope.failedGuess = [];
	$scope.count = 0;
	$scope.chercherLettre = function () {
		for (var i = 1; i < $scope.garder.length - 1; i++) {
			if ($scope.lettre == $scope.garder[i]) {
				$scope.count++
			}
		}
		if ($scope.count == 0) {
			$scope.failedGuess.push($scope.lettre);
		}
	}

	$scope.pendu = function () {
		$scope.garder = $scope.mot;
		$scope.tiret = "";
		for (var lettre = 0; lettre < $scope.mot.length - 2; lettre++) {
			$scope.tiret += " _";
		}
		$scope.motCache = $scope.mot[0] + $scope.tiret + $scope.mot[$scope.mot.length - 1];
		$scope.mot = "";
	}

	function load() {
		PenduService.get().then(function (res) {
			$scope.pendu = res.data;
		});
	}
}