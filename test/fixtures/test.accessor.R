options( digits = 16 )
library( jsonlite )


k = 1
lambda = 6.5
probs = seq( 0, 1, 0.01 )
y = qgamma( probs, k, lambda )

cat( y, sep = ",\n" )

data = list(
	k = k,
	lambda = lambda,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
