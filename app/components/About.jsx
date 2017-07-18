const React = require('react');

//Stateless presentational component

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Sample application built with React</p>
            <div className="callout">
                <h5>Employing</h5>
                <ul>
                    <li>
                        <a href="http://foundation.zurb.com/sites" target="_blank">Foundation Sites</a>
                    </li>
                    <li>
                        <a href="http://openweathermap.org/" target="_blank">OpenWeatherMap API</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = About;
