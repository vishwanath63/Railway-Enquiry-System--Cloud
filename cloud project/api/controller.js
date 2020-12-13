'use strict';

var properties = require('../package.json');
var info = require('../service1/lstatus');
var tstatus = require('../service2/tstatus');
var pnr = require('../service3/pnr');

var seatava = require('../service4/seatava');

var controllers = {

    about: function(req, res){
        var aboutInfo = { name:properties.name, version: properties.version }
        res.json(aboutInfo);
    },
    lstatus_info: function(req, res){
        info.find(req, res, function(err, infor){
            if(err)
                res.send(err);
            res.json(infor);
        });
    },

    tstatus_info: function(req, res){
        tstatus.find(req, res, function(err, result){
            if(err)
                res.send(err);
            res.json(result);
        });
    },

    pnr_info: function(req, res){
        pnr.find(req, res, function(err, result){
            if(err)
                res.send(err);
            res.json(result);
        });
    },


    seatava_info: function(req, res){
        seatava.find(req, res, function(err, result){
            if(err)
                res.send(err);
            res.json(result);
        });
    },


};

module.exports = controllers;