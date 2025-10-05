const mongoose = require("mongoose");

const URI =
  "mongodb+srv://sdev255:latataza1978@songdb.0caxhc5.mongodb.net/SongDB?retryWrites=true&w=majority&appName=SongDB";

mongoose
  .connect(URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
