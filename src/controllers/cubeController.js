const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

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

exports.getAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find().lean();
    
    res.render('cube/attach', {cube, accessories});
};

exports.postAttachAccessory = async (req, res)=> {
    const cube = await Cube.findById(req.params.cubeId); // it's without lean, so we can work with the document directly
    const accessoryId = req.body.accessory; // comes from attach.hbs, the select name
    cube.accessories.push(accessoryId); 
    cube.save();
    res.redirect(`/cubes/${cube._id}/details`);
};