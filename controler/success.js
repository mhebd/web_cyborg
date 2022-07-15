const Success = require('../model/Success');
const { findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');

// Find all Success
exports.findAll = findAll(Success, null, '-created');

// Create a new Success
exports.createOne = createOne(Success);

// Update a existting Success
exports.updateOne = updateOne(Success);

// Delete a Success
exports.deleteOne = deleteOne(Success);

