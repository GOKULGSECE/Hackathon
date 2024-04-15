const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const url = "mongodb://localhost:27017/Food_backend"
try {
    mongoose.connect(
        url
        
    )
} catch (e) {
    console.log("could not connect");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));



