app.service('comServidor',function($http,urlServidor){
	return {
		"estrura":function(){
			return {
			    method: 'GET',
			    headers: {'Content-Type': 'application/json' },
			    url : urlServidor,
			    data : null
			};
		},
		"get":function(){
			var dados = this.estrura();
			dados.method = "GET";
			dados.url = urlServidor;
			return $http(dados).then(function successCallback(response) {	
		 		return response.data;
		    }, function errorCallback(response) {
		    	return response;	
		  	});
		},
		"post":function(obj){
			var dados = this.estrura();
			dados.method = "POST";
			dados.data = obj;
			return $http(dados).then(function successCallback(response) {	
		 		return response.data;
		    }, function errorCallback(response) {
		    	return response;	
		  	});
		},
		"put":function(obj){
			var dados = this.estrura();
			dados.method = "PUT";
			method.data = obj;
			return $http(dados).then(function successCallback(response) {	
		 		return response.data;
		    }, function errorCallback(response) {
		    	return response;	
		  	});
		},
		"apagar":function(id){
			var dados = this.estrura();
			dados.method = "DELETE";
			dados.url = dados.url+"/"+id;
			return $http(dados).then(function successCallback(response) {	
		 		return response.data;
		    }, function errorCallback(response) {
		    	return response;	
		  	});			
		}
	}
})