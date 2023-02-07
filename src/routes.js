const router = require('express').Router(); // new instance of the router

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getDetails);

router.get('/cubes/:cubeId/attach', cubeController.getAttachAccessory);

router.use('/accessory', accessoryController); // if the url starts with this, use that controller

module.exports = router;