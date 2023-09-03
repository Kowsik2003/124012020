const trainCtrl = require('../controller/trainCtrl');

const router = require("express").Router();

router.get('/train',trainCtrl.getAllTrain);

module.exports = router;