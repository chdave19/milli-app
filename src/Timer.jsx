import React, { PureComponent } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class Timer extends PureComponent{
  constructor(props){
    super(props);
    this.styles = {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        display: 'grid',
        placeContent: 'center',
        fontSize: '3rem',
        fontWeight: '600',
        fontFamily: '"Tauri", sans-serif',
        letterSpacing: '4px',
    }
    this.state = {timer:40, timerPathColor: 'rgb(30, 247, 15)'};
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
    this.setState({timer: 40});
    this.props.resetAns();
    setTimeout(()=>{this.props.setTimer(setInterval(this.add, 1000))});
  }

  componentDidUpdate(prevProps){
    this.state.timer<=0 && this.props.stopGame();
    prevProps.questionNo !== this.props.questionNo && this.resetTimer();
    this.state.timer === 25 && this.setState({timerPathColor: 'orange'});
    this.state.timer === 10 && this.setState({timerPathColor: 'red'})
  }
  
  render() {
    
    return (
      <div className='timer' style={this.styles}>
        <CircularProgressbar
        value={(this.state.timer*100)/40}
        text={`${this.state.timer}`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: this.state.timerPathColor,
          trailColor: 'black',
          textSize: '2.4rem'
        })}
      />
      </div>
    )
  }
}
