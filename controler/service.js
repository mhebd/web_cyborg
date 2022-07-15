const Service = require('../model/Service');
const { findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');

// Find all Service
exports.findAll = findAll(Service, null, '-created');

// Create a new Service
exports.createOne = createOne(Service);

// Update a existting Service
exports.updateOne = updateOne(Service);

// Delete a Service
exports.deleteOne = deleteOne(Service);

