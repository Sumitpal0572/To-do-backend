const express = require('express');
const router = express.Router();
const User = require('../Model/User');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users', message: err.message });
    }
});

module.exports = router;
