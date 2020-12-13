var request = require('request');


const apiKey = "49248441a32a7c35234322c4adef5804";
const railURL = 'http://indianrailapi.com/api/v2/SeatAvailability/apikey/';
//https://indianrailapi.com/api/v2/SeatAvailability/apikey/{apikey}/TrainNumber/{trainNumber}/From/{stationFrom}/To/{stationTo}/Date/{yyyyMMdd}/Quota/GN/Class/{classCode}

var seatava = {
    find: function(req, res, next){
        request(railURL + apiKey + '/TrainNumber/'  + req.params.trainnum + '/From/' + req.params.frmstn + '/To/' + req.params.tostn + '/Date/' + req.params.date + '/Quota/GN/Class/' + req.params.class + '/',
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


module.exports = seatava;

