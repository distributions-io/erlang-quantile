options( digits = 16 )
library( jsonlite )


k = 4
lambda = 2.9
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qgamma( probs, k, lambda )

cat( y, sep = ",\n" )

data = list(
	k = k,
	lambda = lambda,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
