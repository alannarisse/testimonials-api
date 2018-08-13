const path = require('path')
const fs = require('fs')

const V = require('vaxic')

// read the contents of the quotes.txt file and convert them to strings.
const testimonialFileContents = fs.readFileSync(path.join(__dirname, 'testimonials.txt')).toString()

// create a quotes array from the text file
const testimonials = []

//add all the quotes and bylines to quotes array
quoteFileContents.split('\n\n').forEach((line) => {
	const lineParts = line.split('---')

	testimonials.push({
		'testimonial': lineParts[0],
		'by': lineParts[1]
	})
})

const app = new V()

app.add('GET', '/api/testimonial', (req, res) => {
	// return the quotes
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	//get a random quote
	const randomTestimonial = testimonials[Math.floor(Math.random() * testimonials.length)]

	res.end(JSON.stringify(randomTestimonial))
})

app.add((req, res) => {
	res.writeHead(404, {
		'Content-Type': 'application/json'
	})

	res.end(JSON.stringify({
		'error': "resource not found"
	}))
})

app.listen(8080, () => {
	console.log('The API is now listening')
})