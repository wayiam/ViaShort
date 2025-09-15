const mongoose = require('mongoose');
mongoose.set("strictQuery",true)

async function connectToMongoDB(url){
		return mongoose.connect(url)
		.then(() => console.log("MongoDB connected"))
		.catch((err) => console.log("Error connecting to the database.", err))
}

module.exports = {connectToMongoDB}