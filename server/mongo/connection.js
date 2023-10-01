const mongoose = require("mongoose");
const conn_str =
  "mongodb+srv://alokshivsingh:bzyJmLmSCjKIOtzF@cluster0.ke2pqeu.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB using async/await
async function connectToDatabase() {
  try {
    await mongoose.connect(conn_str, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Error in connection:", error);
  }
}

module.exports.connectToDatabase = connectToDatabase;
