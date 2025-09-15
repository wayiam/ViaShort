const express = require('express');
const { connectToMongoDB } = require('./connection')
const urlRoute = require('./routes/url')
const URL = require('./models/url')

const app = express();
const PORT = 8080;

connectToMongoDB("mongodb://127.0.0.1:27017/viashort");

app.use(express.json())
app.use('/url', urlRoute);
app.use('/:shortID', async (req, res) => {
	const shortId = req.params.shortID;
	const entry = await URL.findOneAndUpdate(
		{shortId,},
		{
			$push: {
				visitHistory: { timestamp: Date.now() },
			}
		},{new:true});
		console.log(entry)
	res.redirect(entry.redirectURL)
})

app.listen(PORT, () => {
	console.log(`Server started at ${PORT}`)
})

