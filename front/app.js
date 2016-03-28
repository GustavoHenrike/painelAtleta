var app = angular.module("aplic",['ui.router']);
app.value('urlServidor',"http://localhost:9090/atleta");
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	.state('cadastrar',{
		url:"/cadastrar",
		templateUrl: "cadastro.html",
		controller: "atleta"
	})
	.state('home',{
		url:"/home",
		templateUrl: "home.html",
		
	})
	.state('listar',{
		url:"/listar",
		templateUrl: "lista.html",
		controller: "atleta"
	})
})

