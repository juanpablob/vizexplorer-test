/**
 * TwoDigit Filter
 *
 * @author juanpablob <m.juanpablob@gmail.com>
 * @since 2017-06-01
 */

(function() {
	'use strict';

	app.filter('twoDigit', function() {
		return function(index) {
			return (parseInt(index -1, 10) + 101).toString().substr(1);
		};
	});
})();
