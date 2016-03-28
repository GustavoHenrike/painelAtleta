app.controller("home",function($scope,comServidor){
	$scope.listar = function(){
		comServidor.get().then(function(data){
			$scope.atletas = data;
		});
	};	
})
