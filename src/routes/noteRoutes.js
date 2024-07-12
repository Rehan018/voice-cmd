// const express = require('express');
// const noteController = require('../controller/noteController');
// const router = express.Router();

// router.post('/', noteController.createNote);
// router.get('/', noteController.getAllNotes);
// router.put('/:id', noteController.updateNote);
// router.delete('/:id', noteController.deleteNote);


// module.exports = router;



const express = require('express');
const noteController = require('../controller/noteController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: API endpoints for managing notes
 */

/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created a new note
 *       500:
 *         description: Internal server error
 */
router.post('/', noteController.createNote);

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Get all notes
 *     tags: [Notes]
 *     responses:
 *       200:
 *         description: Successfully retrieved all notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
router.get('/', noteController.getAllNotes);

/**
 * @swagger
 * /notes/{id}:
 *   put:
 *     summary: Update a note
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated the note
 *       404:
 *         description: Note not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', noteController.updateNote);

/**
 * @swagger
 * /notes/{id}:
 *   delete:
 *     summary: Delete a note
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Successfully deleted the note
 *       404:
 *         description: Note not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', noteController.deleteNote);

module.exports = router;
