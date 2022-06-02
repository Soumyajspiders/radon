const express = require('express');
// const externalModule = require('../logger/logger')

const router = express.Router();
const soumya = require('../logger/logger')
const date = require('../util/helper')
const trim=require('../validator/formatter')
router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // externalModule.log()
    // res.send('My first ever api!')
    soumya.welcome()
    date.mydate()
    date.mymonth()
    date.getbatchinfo()
    trim.trim()
    trim.changeTolowercase()
    trim.changetoupporcase()
    

});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason