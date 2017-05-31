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

		self.pod = {
			pid: 19283,
			status: 1,
			instances: 0,
			restarts: 0,
			upTime: 0,
			cpu: {
				data: [34, 50, 80, 20, 100, 30, 22, 91, 34, 50, 80, 20, 100, 30, 22, 91, 34, 50, 80, 20, 100, 30, 22, 91, 34, 50, 80, 20, 100, 30, 22, 91, 34, 50, 80, 20, 100, 30, 22, 91, 34, 50, 80, 20, 100, 30, 22, 91],
				labels: false,
				override: {
					backgroundColor: '#505194',
					borderWidth: 0,
					pointBackgroundColor: '#424a55',
					pointBorderColor: '#ffffff'
				}
			},
			memory: {
				data: [50, 100],
				labels: ['Used Memory', 'Available Memory'],
				colors: ['#0775cc', '#ffffff'],
				options: {
					cutoutPercentage: 80,
					animation: {
						animateScale: false
					},
					tooltips: {
						enabled: false
					}
				},
				override: {
					borderWidth: 0
				}
			}
		};
	});
})();
