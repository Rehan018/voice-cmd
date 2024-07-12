
// const express = require('express');
// const { recognizeCommand } = require('../utils/speechRecognition');
// const router = express.Router();

// router.post('/recognize', async (req, res) => {
//   try {
//     const audioBuffer = req.body.audioBuffer;
//     const command = await recognizeCommand(audioBuffer);
//     res.json({ command });
//   } catch (error) {
//     console.error('Error recognizing command:', error);
//     res.status(500).json({ error: 'Failed to recognize command' });
//   }
// });

// module.exports = router;



const express = require('express');
const { recognizeCommand } = require('../utils/speechRecognition');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Speech Recognition
 *   description: Endpoint for recognizing speech commands
 */

/**
 * @swagger
 * /recognize:
 *   post:
 *     summary: Recognize speech command from audio
 *     tags: [Speech Recognition]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               audioBuffer:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Successful response with recognized command
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 command:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/recognize', async (req, res) => {
  try {
    const audioBuffer = req.body.audioBuffer;
    const command = await recognizeCommand(audioBuffer);
    res.json({ command });
  } catch (error) {
    console.error('Error recognizing command:', error);
    res.status(500).json({ error: 'Failed to recognize command' });
  }
});

module.exports = router;
