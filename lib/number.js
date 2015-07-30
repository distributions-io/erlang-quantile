'use strict';

// FUNCTIONS //


// QUANTILE //

/**
* FUNCTION: quantile( p, k, lambda )
*	Evaluates the quantile function for a Erlang distribution with shape parameter `k` and rate parameter `lambda` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} k - shape parameter
* @param {Number} lambda - rate parameter
* @returns {Number} evaluated quantile function
*/
function quantile( p, k, lambda ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
