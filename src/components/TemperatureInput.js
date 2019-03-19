import React, { Component } from 'react';

export default class TemperatureInput extends Component {
    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const scaleNames = {
            c: "Celsius",
            f: "Fahrenheit"
        }
        const { temperature, scale } = this.props;
        return (
            <div>
                <h4>Enter temperature in { scaleNames[scale] }</h4>
                <input 
                    type="text"
                    value={temperature}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}