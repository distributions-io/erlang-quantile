options( digits = 16 )
library( jsonlite )

k = 2
lambda = 0.6
probs = 0:24 / 25
y = qgamma( probs, k, lambda )

cat( y, sep = ",\n" )

data = list(
	k = k,
	lambda = lambda,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
