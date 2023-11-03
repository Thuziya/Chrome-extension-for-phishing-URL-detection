const express = require('express');
const app = express();
const tf = require('@tensorflow/tfjs-node');

// Import the model loading function
const { loadModel } = require('./modelLoader');

// Define a route for prediction
app.post('/predict', (req, res) => {
  const inputData = req.body.inputData; // Adjust the data extraction as per your client's request

  // Load the model
  const model = loadModel();

  // Convert inputData to a tensor (adjust this part as needed)
  const inputTensor = tf.tensor([inputData]);

  // Make predictions
  const predictions = model.predict(inputTensor).arraySync(); // Convert predictions to a JavaScript array

  // Return predictions as a JSON response
  res.json({ predictions });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.post('/predict', (req, res) => {
    const url = req.body.url; // Assuming you send the URL in the request body
    console.log('Received URL:', url);
    // In the next steps, we'll analyze this URL and send a response.
});
