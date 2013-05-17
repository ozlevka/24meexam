function UserController($scope,$http)
{
	$scope.showLogin = false;
	$scope.showRegister = true;
	
	$scope.openLogin = function()
	{
		$scope.showLogin = true;
		$scope.showRegister = false;		
	};

	$scope.openRegister = function()
	{
		$scope.showLogin = false;
		$scope.showRegister = true;
	};

	$scope.doRegister = function()
	{
		
	}
}


function RegisterCtl($scope,$http)
{
	$scope.submit = function()
	{
		var a =  '';
	}
}