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
	$scope.working = false;
	$scope.items = [];
	$scope.siteChange = function()
	{
		$scope.sites = $scope.txtSites.split(';');
	};

	$scope.logout = function()
	{
		document.location.href = '/user/logout';
	}

	$scope.parse = function()
	{
		$scope.working = true;
		$scope.items = [];

		$http.post('/parse',$scope.sites).success(function(data)
		{
			$scope.items = data;
			$scope.working = false;
		}).error(function(err)
		{
			alert(err);
			$scope.working = false;
		});		
		// for(var i = 0; i < $scope.sites.length; i++)
		// {
		// 	$http.post('/parse',[$scope.sites[i]]).success(function(data)
		// 	{
		// 	 	$scope.items.concat(data);
		// 	 	$scope.working = false;
		// 	}).error(function(err)
		// 	{
		// 	 	alert(err);
		// 	});
		// }		
	}
}