import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
  }

}

  handleClick(){
    this.setState(function(prevState){
      return { timesClicked: ++prevState.timesClicked }
    })
  }
  render() {
    return <button onClick={this.handleClick.bind(this)}>{this.state.timesClicked}</button>
  }
}
