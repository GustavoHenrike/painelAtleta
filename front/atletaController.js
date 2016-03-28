app.controller("atleta",function($scope,$rootScope,comServidor){
	
	$scope.atletas = [];
	$scope.selecionado = false;

	$scope.listar = function(){
		comServidor.get().then(function(data){
			$scope.atletas = data;
		});
	};

	$scope.salvarEditar = function(){

			comServidor.post($scope.atleta).then(function(){
				$scope.listar();	
			});	
			$scope.atleta = null;
			$scope.selecionado = false;
			$location.path('/listar');


	};

	$scope.selecionar = function(obj){
		$scope.atleta = angular.copy(obj);
		$scope.selecionado = true;
	};

	$scope.apagar = function(obj){
		comServidor.apagar(obj.id).then(function(){
			$scope.listar();	
		});
	
	};
})