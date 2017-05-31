/**
 * Dashboard Controller
 *
 * @author juanpablob <m.juanpablob@gmail.com>
 * @since 2017-05-31
 */

(function() {
	'use strict';

	app.controller('dashboard', function($http) {
		var self = this,
			local = {};

		/* Fake data */
		local.endPoints = [
			'./dist/json/1.json',
			'./dist/json/2.json',
			'./dist/json/3.json'
		];

		self.pods = [];

		self.add = function() {
			var randomFile = local.endPoints[Math.floor(Math.random() * local.endPoints.length)];

			$http({
				method: 'get',
				url: randomFile,
			})
			.then(function(response) {
				console.log(response);

				if (response.status !== 200 && typeof response.data.pid === 'undefined') {
					return;
				}

				self.pods.push({
					index: self.pods.length + 1,
					data: response.data
				});

			});
		};

		self.remove = function(index) {
			var initialIndex = 1;

			self.pods.splice(index -1, 1);

			angular.forEach(self.pods, function(v, k) {
				self.pods[k].index = initialIndex;

				initialIndex++;
			});
		};
	});
})();
