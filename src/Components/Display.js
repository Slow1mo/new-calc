import React from 'react';


export default class Display extends React.Component {
    render() {

        return ( 
            <div className="Display" id="display">
                <h3>{this.props.current}</h3>
                <h3>{this.props.result}</h3>
                
            </div>
        );
    }
}
