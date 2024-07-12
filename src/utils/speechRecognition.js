const tf = require('@tensorflow/tfjs');
const speechCommands = require('@tensorflow-models/speech-commands');

let recognizer;

async function loadModel() {
  recognizer = speechCommands.create('BROWSER_FFT');
  await recognizer.ensureModelLoaded();
  console.log('Model loaded');
}

async function recognizeCommand(audioBuffer) {
  const scores = await recognizer.recognize(tf.tensor4d(audioBuffer, [1, 43, 232, 1]));
  const words = recognizer.wordLabels();
  const word = words[scores.scores.indexOf(Math.max(...scores.scores))];
  return word;
}

module.exports = {
  loadModel,
  recognizeCommand,
};
