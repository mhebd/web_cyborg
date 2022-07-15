const Slider = require('../model/Slider');
const { findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');

// Find all Slider
exports.findAll = findAll(Slider, null, '-created');

// Create a new Slider
exports.createOne = createOne(Slider, {destination: './uploads/slider'});

// Update a existting Slider
exports.updateOne = updateOne(Slider, {destination: './uploads/slider'});

// Delete a Slider
exports.deleteOne = deleteOne(Slider);

