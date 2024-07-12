const mongoose = require("mongoose");
const app = require("./app");

const config = require("./config");
const { loadModel } = require("./utils/speechRecognition");


mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await loadModel();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Failed to load model:', error);
  }
});