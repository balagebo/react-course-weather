const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const ErrorModal = require('ErrorModal');
const OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,
        };
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    handleSearch: function(location) {
        var self = this;

        this.setState({isLoading: true, errorMessage: undefined, location: undefined, temp: undefined});

        OpenWeatherMap.getTemp(location).then(function (temp) {
            self.setState({isLoading: false, location: location, temp: temp});
        }, function(error) {
            self.setState({isLoading: false, errorMessage: error.message});
        });
    },
    render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} />;
            }
        };

        function renderError() {
            if (typeof errorMessage == 'string') {
                return <ErrorModal message={errorMessage} />;
            }
            else {
                return '';
            }
        };

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
