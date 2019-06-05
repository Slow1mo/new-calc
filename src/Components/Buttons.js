import React, { Component } from 'react';

class Buttons extends Component {

    render() {
        return (
            <div>
                <button id='zero' name='0' onClick={e => {
                    this.props.onClick(e.target.name)
                }}>0</button>
                <button id='one' name='1' onClick={e => {
                    this.props.onClick(e.target.name)
                }}>1</button>
                <button id='two' name='2'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>2</button>
                <button id="three" name='3'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>3</button>
                <button id="four" name='4'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>4</button>
                <button id="five" name='5'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>5</button>
                <button id="six" name='6'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>6</button>
                <button id="seven" name='7'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>7</button>
                <button id="eight" name='8'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>8</button>
                <button id="nine" name='9'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>9</button>
                <button id="add" name='+'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>+</button>
                <button id="subtract" name='-'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>-</button>
                <button id="divide" name='/'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>/</button>
                <button id="multiply" name='*'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>*</button>
                <button id="decimal" name='.'onClick={e => {
                    this.props.onClick(e.target.name)
                }}>.</button>
                <button id='equals' name='=' onClick={e => {
                    this.props.onClick(e.target.name)
                }}>=</button>
                <button id='delete' name='Del' onClick={e => {
                    this.props.onClick(e.target.name)
                }}>Del</button>
                <button id='clear' name='Clear' onClick={e => {
                    this.props.onClick(e.target.name)
                }}>Clear</button>
            </div>
        )
    }
}

export default Buttons