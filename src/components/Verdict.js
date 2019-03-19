import React, { Component } from 'react';
import './Verdict.css';

export default class Verdict extends Component {
    render() {
        let { celsius } = this.props;
        let verdict = celsius >= 100 ? 'Hot! The water is broiling' : 'The water would not broil';
        let color = celsius >= 100 ? 'red' : 'blue';

        return (
            <div>
                <div>
                    <div className='container'>
                        <div></div>
                        <div 
                            className='water'
                            style={{backgroundColor: color}}
                        ></div>
                    </div>
                </div>
                <p style={{ color: color }}>{ verdict }</p>
            </div>
        );
    }
}