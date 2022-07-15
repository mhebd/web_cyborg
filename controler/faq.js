const FAQ = require('../model/FAQ');
const { findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');

// Find all FAQ
exports.findAll = findAll(FAQ, null, '-created');

// Create a new FAQ
exports.createOne = createOne(FAQ);

// Update a existting FAQ
exports.updateOne = updateOne(FAQ);

// Delete a FAQ
exports.deleteOne = deleteOne(FAQ);

