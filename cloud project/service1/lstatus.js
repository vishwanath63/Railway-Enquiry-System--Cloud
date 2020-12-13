var request = require('request');

const apiKey = "49248441a32a7c35234322c4adef5804";
const railURL = 'http://indianrailapi.com/api/v2/LiveStation/apikey/';

var lstatus = {
    find: function(req, res, next){
        request(railURL + apiKey + '/StationCode/'  + req.params.stationcode + '/hours/' + req.params.time +'/' ,
            function(error, response, body){
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);

                    res.send({info: null});

                }});
        
    }
};

module.exports = lstatus;

