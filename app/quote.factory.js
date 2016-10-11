(function() {
	'use strict';
	angular.module('quoteApp')
		.factory('quoteFactory', quoteFactory);


	quoteFactory.$inject = ["$http"];


	function quoteFactory($http){
		var service = {
			getQuotes : getQuotes,
			getMotivation : getMotivation
		};

		return service;

		// API call

		function getQuotes(){
			return $http.get("http://api.icndb.com/jokes/random?firstName=Duck&amp;lastName=Doe")
		}

		function getMotivation(){
			return $http.get("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
		}

	};


})();
