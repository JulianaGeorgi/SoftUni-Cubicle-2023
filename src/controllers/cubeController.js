const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    let cube = new Cube({ name, description, imageUrl, difficultyLevel });

    await cube.save();

    res.redirect('/');
};

exports.getDetails = async (req, res) => {

    const cube = await Cube.findById(req.params.cubeId).lean(); // cubeId param comes from the route!!! -> router.get('/details/:cubeId', cubeController.getDetails);

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube });
};