/**
 * Pod Component
 *
 * @author juanpablob <m.juanpablob@gmail.com>
 * @since 2017-05-31
 */

(function() {
	'use strict';

	app.component('pod', {
		bindings: {
			kpis: '=',
			index: '=',
			remove: '='
		},
		// controller: function() {

		// },
		templateUrl: './dist/scripts/templates/pod.html'
	});
})();
