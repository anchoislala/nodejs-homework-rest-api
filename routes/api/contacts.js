const express = require('express');
const router = express.Router()

const ctrl = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');

router.get('/', authenticate, ctrlWrapper(ctrl.getAllContacts))

router.get('/:contactId', authenticate, ctrlWrapper(ctrl.getById))

router.post('/', authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.add))

router.delete('/:contactId', authenticate, ctrlWrapper(ctrl.removeById))

router.put('/:contactId', authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById))

router.patch('/:contactId/favorite', authenticate, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateStatusContact))

module.exports = router;
