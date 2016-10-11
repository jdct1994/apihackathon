(function () {
	'use strict';
	angular.module('quoteApp')
		.controller('quoteController', quoteController);

	quoteController.$inject = ['quoteFactory'];

	function quoteController(quoteFactory) {
		var vm = this;
		vm.quoteName;
		vm.submitQuote = submitQuote;
		vm.submitMotivation = submitMotivation;
		vm.getQuote = [];


		function submitQuote() {
			quoteFactory.getQuotes().then(function(data){
				console.log(data.data);
				vm.quoteName = data.data.value.joke;
				vm.getQuote.push({"quote": vm.quoteName});
				console.log(vm.quoteName);
			});


		};

		function submitMotivation() {
			quoteFactory.getMotivation().then(function(data){
				console.log(data.data);
				vm.quoteName = data.data.quoteText;
				vm.getQuote.push({"quote": vm.quoteName});
				console.log(vm.quoteName);
			});


		};



}})();