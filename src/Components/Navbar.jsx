import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <h2 className='ui centered header'>
                    Title
                </h2>
                <div className="ui three buttons">
                    <button className="ui button">
                        Overview
                    </button>
                    <button className="ui button">
                        Contact
                    </button>
                    <button className="ui button">
                        Support
                    </button>
                </div>
            </nav>
        )
    }
}