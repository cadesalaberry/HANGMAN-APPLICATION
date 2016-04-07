// MAIN CONTROLLER
function mainController($scope, $http, PenduService) {
	$scope.Pendu = "PENDU";
	$scope.chercherLettre = function () {
		$scope.count = 0;
		for (var i = 1; i < $scope.garder.length - 1; i++) {
			if ($scope.lettre == $scope.garder[i]) {
				$scope.count++;
				$scope.motCache = $scope.motCache.split("").map(function (lettres, index) {
					if (index == i * 2) return $scope.lettre;
					return lettres;
				}).join('');
			}
		}
		if ($scope.count == 0) {
			$scope.failedGuess.push($scope.lettre);
		}
		
		$scope.lettre = "";
		if($scope.garder == $scope.motCache.replace(/[ ]+/g, ""))
			$scope.felicitation = "Félicitation Wilder, tu as trouvé le bon mot !!!";
	}

	$scope.pendu = function () {
		$scope.failedGuess = [];
		$scope.count = 0;
		$scope.garder = $scope.mot;
		$scope.tiret = "";
		for (var lettre = 0; lettre < $scope.mot.length - 2; lettre++) {
			$scope.tiret += " _";
		}
		$scope.motCache = $scope.mot[0] + $scope.tiret + $scope.mot[$scope.mot.length - 1];
		$scope.mot = "";
	}

}