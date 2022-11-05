const express = require('express');
const router = express.Router()

const ctrl = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../helpers');
const { validateBody } = require('../../middlewares');
const { schemas } = require('../../models/contact');

router.get('/', ctrlWrapper(ctrl.getAllContacts))

router.get('/:contactId', ctrlWrapper(ctrl.getById))

router.post('/', validateBody(schemas.addSchema), ctrlWrapper(ctrl.add))

router.delete('/:contactId', ctrlWrapper(ctrl.removeById))

router.put('/:contactId', validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById))

router.patch('/:contactId/favorite', validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateStatusContact))

module.exports = router
