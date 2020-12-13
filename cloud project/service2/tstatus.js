var request = require('request');

//const pincodeURL = 'https://api.postalpincode.in/pincode/';

const apiKey = "49248441a32a7c35234322c4adef5804";
const railURL = 'http://indianrailapi.com/api/v2/livetrainstatus/apikey/';
//<apikey>/StationCode/<StationCode>/hours/<Hours>/';
//http://indianrailapi.com/api/v2/livetrainstatus/apikey/<apikey>/trainnumber/<train_number>/date/<yyyymmdd>/

var tstatus = {
    find: function(req, res, next){
        request(railURL + apiKey + '/trainnumber/'  + req.params.trainnum + '/date/' + req.params.date +'/' ,
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

module.exports = tstatus;

//http://www.zipcodeapi.com/rest/<api_key>/distance.<format>/<zip_code1>/<zip_code2>/<units>