const cubeController = require('./controllers/cubeController.js');
const router = require('express').Router();

router.get('/', (req, res) =>{
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/create', (req, res) => {
//     res.render('create');
// });

router.get('/create', cubeController.getCreateCube);

module.exports = router;