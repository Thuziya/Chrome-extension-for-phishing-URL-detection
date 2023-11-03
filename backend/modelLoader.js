const tf = require('@tensorflow/tfjs-node');

const loadModel = () => {
    // Load the model from a file 
    const model = tf.loadLayersModel('trained_model.h5');
    return model;
  };
  
  module.exports = { loadModel };
  