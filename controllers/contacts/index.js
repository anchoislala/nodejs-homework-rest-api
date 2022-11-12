const getAllContacts = require('./getAllContacts');
const getById = require('./getById');
const add = require('./add'); 
const updateById = require('./updateById');
const removeById = require('./removeById');
const updateStatusContact = require('./updateStatusContact');

module.exports = {
    getAllContacts,
    getById,
    add,
    updateById,
    removeById,
    updateStatusContact,
}