function IndexContentResolver($scope)
{
	$scope.showLogin = false;
	$scope.showRegister = true;



	$scope.openLogin = function()
	{
		$scope.showLogin = true;
		$scope.showRegister = false;		
	}


	$scope.openRegister = function()
	{
		$scope.showLogin = false;
		$scope.showRegister = true;
	}
}