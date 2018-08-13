# Testimonials API

This is a little api for serving testimonials to a webpage. It uses node.js and vaxic (a light-weight node web framework).

## Files:

### index.js
- pulls in the contents of the testimonials.txt file into an array and serves it up as JSON.


### testimonials.txt
- the text entries are separated by <code>\n\n</code>

## Install
to run this app...
1. install node.js if you don't have it.
2. download or clone this repo
3. run <code>npm install</code>
4. run <code>node index.js</code>
5. go to localhost:8008/api/testimonial in a browser


## To change this for your purposes
- You can change the url in the app.add on line 24 from <code>api/testimonial</code> to whatever you want.
- Create your own text file and change the reference to it.
