import React, { PureComponent } from 'react'

export default class Timer extends PureComponent{
  constructor(props){
    super(props);
    this.styles = {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        margin: '100px auto',
        display: 'grid',
        placeContent: 'center',
        fontSize: '3rem'
    }
    this.state = {timer:30};
  }

  componentDidMount(){ 
    this.props.setTimer(setInterval(this.add, 1000));
  }
  
  componentWillUnmount(){
    this.props.stopInterval();
  }

  add=()=>{
    // console.log('still running')
    this.setState(prev=>({timer: prev.timer-1}));
  }

  resetTimer=()=>{
    this.setState({timer: 30});
    this.props.resetAns();
    setTimeout(()=>{this.props.setTimer(setInterval(this.add, 1000))});
  }

  componentDidUpdate(prevProps){
    this.state.timer<=0 && this.props.stopGame();
    prevProps.questionNo !== this.props.questionNo && this.resetTimer();
  }
  
  render() {
    
    return (
      <div className='timer' style={this.styles}>
        {this.state.timer}
      </div>
    )
  }
}
