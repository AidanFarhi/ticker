import React, {Component} from 'react';

class Ticker extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            paused: true,
            text: 'Pause ticker'
        }
    }
    clear() {
        this.setState({
            count: 0,
            paused: true,
            text: 'Unpause ticker'
        })
        clearInterval(this.interval)
    }
    resume() {
        this.interval = setInterval(() => {
            this.setState({count: this.state.count + 3})
        }, 3000)
        this.setState({paused: false, text: 'Pause ticker'})
    }
    pause() {
        clearInterval(this.interval)
        this.setState({paused: true, text: 'Unpause ticker'})
    }
    componentDidMount() {
        this.resume()
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count % 3 === 0
    }
    render() {
        return (
            <div className='counter'>
                <h1>The Count is: {this.state.count}</h1>
                <div className='buttons'>
                    <button type='button' onClick={() => this.clear()}>Clear</button>
                    <br/>
                    <button type='button' onClick={this.state.paused ? () => this.resume() : () => this.pause()}>
                        {this.state.paused ? this.state.text : this.state.text}
                    </button>
                </div>
            </div>
        )
    }
}
export default Ticker
