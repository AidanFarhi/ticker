import React, {Component} from 'react'
import Ticker from './App'

class Pause extends Ticker {
    constructor() {
        super()
        this.state = {
            paused: false
        }
    }

    render() {
        return (
            <button type='button'>
                {this.state.paused ? 'Unpause' : 'Pause'}
            </button>    
        )
    }

}

export default Pause
