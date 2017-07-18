const axios = require('axios');

const weather_url = 'http://api.openweathermap.org/data/2.5/weather?APPID=b414d47bb5d58abf1d015c01ac1724f5&units=metric';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${weather_url}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function(res) {
            if (res.data) {
                return res.data.main.temp;
            }
            else {
                return new Error('Uh-oh. Seems like the API specs changed. Cannot read temp from response');
            }
        }, function(res) {
            var errorMessage = res.message;
            if (res.response && res.response.status == 404) {
                errorMessage = 'City not found';
            }
            throw new Error(errorMessage);
        });
    }
};
