const path = require('path');
const router = require('express').Router();

const commentRoutes = require("./comment");
const userRoutes = require("./user")
// API Routes
router.use(`/`,userRoutes)
router.use(`/`,commentRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;