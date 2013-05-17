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
}


function ParserCntl($scope, $http)
{
	$scope.siteChange = function()
	{
		$scope.sites = $scope.txtSites.split(';');
	};

	$scope.logout = function()
	{
		document.location.href = '/user/logout';
	}
}