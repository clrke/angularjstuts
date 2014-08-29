(function () {
	var app = angular.module('PaulApp', []);

	app.controller('ItemsCtrl', function () {
		this.data = [];

		this.add = function (newItem) {
			this.data.push(newItem); 
		}
	});
})();