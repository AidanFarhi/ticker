import React, {Component} from 'react'

class Ticker extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      paused: false,
      setInt: null
    }
  }

  clear() {
    this.setState({
      count: 0
    })
  }

  pause() {
    if (this.state.paused) {
      let id = setInterval(() => {
        this.setState({
          count: this.state.count + 1,
          setInt: id,
          paused: false
        })
      }, 1000);
    } else {
      clearInterval(this.state.setInt)
      this.setState({
        paused: true
      })
    }
  }

  componentDidMount() {
    let id = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        setInt: id
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
