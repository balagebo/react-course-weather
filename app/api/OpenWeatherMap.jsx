const axios = require('axios');

const weather_url = 'http://api.openweathermap.org/data/2.5/weather?APPID=b414d47bb5d58abf1d015c01ac1724f5&units=metric';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${weather_url}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function(res) {
            if (res.data.cod && res.data.message) {
                console.log(res);
                throw new Error(res.data.message);
            }
            else {
                return res.data.main.temp;
            }
        }, function(res) {
            console.log(res);
            //throw new Error(res.data.message);
        });
    }
};
