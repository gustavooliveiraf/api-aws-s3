const express = require('express');

const router = express.Router();

router.get('/health', (_, res) => res.status(200).json({ message: `Service running - ${new Date()}.` }));

module.exports = router;
