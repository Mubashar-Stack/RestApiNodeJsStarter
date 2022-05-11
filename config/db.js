const mongoose = require('mongoose');

const URI = 'mongodb+srv://winchit:winchit%40123@cluster0.kipic.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-am4m98-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';


const connectDB = async () => {
  try {
    //connect to mongodb database
    mongoose.connect(URI);
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    })
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;