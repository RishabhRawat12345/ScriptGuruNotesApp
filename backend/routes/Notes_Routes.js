const express = require('express');
const router = express.Router();
const Eventform = require('../Controllers/Notes_Controllers');
router.post('/Eventform', Eventform);
module.exports = router;
