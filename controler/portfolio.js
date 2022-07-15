const Portfolio = require('../model/Portfolio');
const { findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');

// Find all Portfolio
exports.findAll = findAll(Portfolio, null, '-created');

// Create a new Portfolio
exports.createOne = createOne(Portfolio, {destination: './uploads/portfolio'});

// Update a existting Portfolio
exports.updateOne = updateOne(Portfolio, {destination: './uploads/portfolio'});

// Delete a Portfolio
exports.deleteOne = deleteOne(Portfolio);

