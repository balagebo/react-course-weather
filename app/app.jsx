const React = require('react'); //Azért kell mert a ReactDOM egy React hívást replace-el be
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather} />
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
        </Route>
    </Router>,
    document.getElementById('app')
);
