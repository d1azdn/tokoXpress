const express = require('express')
const router = express.Router()
const { testPing } = require('../controllers/pingController')

router.get('/ping', testPing)

//exports
module.exports = router