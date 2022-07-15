const Team = require('../model/Team');
const { findAll, createOne, updateOne, deleteOne } = require('../util/crudOparetion');

// Find all Team
exports.findAll = findAll(Team, null, '-created');

// Create a new Team
exports.createOne = createOne(Team, {destination: './uploads/team'});

// Update a existting Team
exports.updateOne = updateOne(Team, {destination: './uploads/team'});

// Delete a Team
exports.deleteOne = deleteOne(Team);

