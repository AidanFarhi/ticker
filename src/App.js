import React, {Component} from 'react'

class Ticker extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      paused: false,
      intervalId: null
    }
  }

  clear() {
    this.setState({
      count: 0
    })
  }

  pause() {
    let id = this.state.intervalId
    if (id) {
      clearInterval(id)
      this.setState({
        paused: true,
        intervalId: null
      })
    } else {
      let id = setInterval(() => {
        this.setState({
          count: this.state.count + 1,
          intervalId: id,
          paused: false
        })
      }, 1000) 
    }
  }

  componentDidMount() {
    console.log('mounted')
    let id = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        intervalId: id
      })
    }, 1000) 
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count % 3 === 0) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div className='counter'>
        <h1>The Count is: {this.state.count}</h1>
        <div className='buttons'>
          <button type='button' onClick={()=> this.clear()}>Clear</button>
          <br></br>
          <button type='button' onClick={()=> this.pause()}>
            {this.state.paused ? 'Unpause Ticker' : 'Pause Ticker'}
          </button>
        </div>
      </div>
    )
  }
}

export default Ticker;
