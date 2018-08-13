const V = require('vaxic')

const app = new V()

// a simple app to test vaxic
app.add('GET', '/test', (req, res) => {
	res.writeHead(200)
	res.end('Hey There')
})

app.listen(8080, () => {
	console.log('Listening!')
})

app.add('GET', (req, res) => {
	res.writeHead(404)
	res.end('404: page not found!')
})