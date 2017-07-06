const React = require('react');
const Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <div className="row">
                <Nav />
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
