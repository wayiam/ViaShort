const express = require('express');
const { connectToMongoDB } = require('./connection')
const urlRoute = require('./routes/url')
const URL = require('./models/url')
const path = require('path');
const staticRoute = require('./routes/staticRouter')

const app = express();
const PORT = 8080;

connectToMongoDB("mongodb://127.0.0.1:27017/viashort");

app.set('view engine', "ejs");
app.set('views', path.resolve('./views'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/url', urlRoute);
app.get("/url/:shortID", async (req, res) => {
	const {shortID} = req.params;
	console.log(shortID)
	const entry = await URL.findOneAndUpdate(
		{
			shortID: shortID
		},
		{
			$push: {
				visitHistory: {
					timestamp: Date.now(),
				},
			},
		}
	);
	console.log(entry)
	res.redirect(entry.redirectURL);
});

app.get('/', staticRoute)

app.listen(PORT, () => {
	console.log(`Server started at ${PORT}`)
})

