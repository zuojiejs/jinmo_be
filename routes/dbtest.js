var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bluebird = require('bluebird');
mongoose.Promise = bluebird;

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = mongoose.createConnection('localhost', "test");
    var colloection = db.model("data", new mongoose.Schema({
        title: String,
        age: Number
    })); 
    //save
    // new colloection({
    //     title: 'test', 
    //     age: 2
    // }).save(function(err){
    //     if(err){
    //         console.log(err);
    //     }
    // })
    //get
    colloection.find(function(err, docs){
        console.log(docs);
        if(err){
            console.log(err);
            return;
        }
        res.json({
            errorCode: 0,
            data: docs,
            message: 'success'
        });	        
    })
});

module.exports = router;