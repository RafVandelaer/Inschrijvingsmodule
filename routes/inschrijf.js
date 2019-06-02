const path = require('path');

const express = require('express');

const inschrijfController = require('../controllers/inschrijf');

const router = express.Router();

router.get('/', inschrijfController.getIndex);

router.get('/set-first-step', inschrijfController.postFirstStep);

//router.get('/edit-product/:productId', inschrijfController.getEditProduct);

//router.post('/delete-product', inschrijfController.postDeleteProduct);

module.exports = router;
