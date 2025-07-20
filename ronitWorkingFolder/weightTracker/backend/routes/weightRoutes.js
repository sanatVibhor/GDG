const express = require('express');

const {
    getEntries,
    addEntry,
    deleteEntry
} = require('../controllers/weightController');

const router = express.Router();

router.route('/')
    .get(getEntries)
    .post(addEntry)

router.route('/:id')
    .delete(deleteEntry)

module.exports = router;