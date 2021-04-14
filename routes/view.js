const router = require('express').Router();
const path = require('path');


//exercise route
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

//stats routes
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;



mongodb+srv://sadnagoli_1:3sp0zhMAY0@cluster0.lr7zx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority