const path = require('path')
const fs = require('fs')

const V = require('vaxic')

// read the contents of the testimonials.txt file and convert them to strings.
const testimonialsFileContents = fs.readFileSync(path.join(__dirname, 'testimonials.txt')).toString()

// create a testimonials array from the text file
const testimonials = []

//add all the testimonials and bylines to testimonials array
testimonialsFileContents.split('\n\n').forEach((line) => {
	const lineParts = line.split('---')

	testimonials.push({
		'testimonial': lineParts[0],
		'by': lineParts[1]
	})
})

const app = new V()

app.add('GET', '/api/testimonial', (req, res) => {
	// return the testimonials
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	//get a random testimonials
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