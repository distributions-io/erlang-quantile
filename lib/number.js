'use strict';

// MODULES //

var quantileGamma = require( 'distributions-gamma-quantile/lib/number.js' );


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
	return quantileGamma( p, k, lambda );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
