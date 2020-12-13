'use strict' ;
const controller = require('./controller');
module.exports = function(app){
    app.route('/about')
        .get(controller.about);
    app.route('/lstatus/:stationcode/:time')
        .get(controller.lstatus_info);
    app.route('/tstatus/:trainnum/:date')
        .get(controller.tstatus_info);
    app.route('/pnr/:pnr')
        .get(controller.pnr_info);
    app.route('/seatava/:trainnum/:frmstn/:tostn/:date/:class')
        .get(controller.seatava_info);
};