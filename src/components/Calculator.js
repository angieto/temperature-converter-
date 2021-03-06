import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput'
import Verdict from './Verdict';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({
            temperature,
            scale: 'c'
        })   
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({
            temperature,
            scale: 'f'
        })
    }

    tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output*1000)/1000;
        return rounded.toString();
    }

    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5/9;
    }

    toFahrenheit = (celsius) => {
        return (celsius * 9/5) + 32;
    }

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
        return (
            <div>
               <TemperatureInput 
                   scale='c'
                   temperature={celsius}
                   onTemperatureChange={this.handleCelsiusChange}
               /> 
               <TemperatureInput 
                   scale='f'
                   temperature={fahrenheit}
                   onTemperatureChange={this.handleFahrenheitChange}
               /> 
               <Verdict celsius={celsius} />
            </div>
        );
    }
}