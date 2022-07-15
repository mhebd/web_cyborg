const Review = require('../model/Review');
const { findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');


// Find all review 
exports.findAll = findAll(Review, null, '-created');

// Create a review
exports.createOne = createOne(Review);

// Update a review
exports.updateOne = updateOne(Review);

// Delete a review
exports.deleteOne = deleteOne(Review);