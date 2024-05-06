import {Component}from "react";


class TapSpeedometer extends Component{
    constructor(props){
        super(props);
        this.state = {value:0, 
                      start: true, 
                      firstTime:0, 
                      totalTime: 0, 
                      tempTime:0, 
                      UPS: 0, 
                      FPS: 3,
                      thumbSpeed: 0,
                      tempCheck: true,
                      tempFirst:0,
                      timeArr: [],
                      timeArrValue: 0};                    
    }

    increaseValue(){
      
      if(this.state.value===100){this.setState((prev)=>({...prev, value:0, totalTime: 0}))}
      if(this.state.value===0){this.setState((prev)=>({...prev, totalTime: 0, FPS: null}))}
      
      this.setState((prev)=>({value: prev.value+1, thumbSpeed: Number(((this.state.value/this.state.totalTime)).toFixed(2))})) 
    }

    thumbSpeedDetector = (initial)=>{
      const {start, firstTime, UPS, FPS, tempCheck, tempFirst, timeArr,timeArrValue} = this.state;   
      if(start){
        this.setState((prevState)=>({start: false, firstTime:initial}));
      }
      if(tempCheck){
        this.setState((prevState)=>({tempFirst: initial, tempCheck: false}));
      }

      this.setState(prevState=>({FPS: prevState.FPS+1, UPS: prevState.UPS+1, totalTime: (initial-firstTime)/1000, tempTime: Math.floor(initial-tempFirst), timeArr:[...timeArr,initial]}),()=>{});
      
      if(timeArr.length===2){
        this.setState((prevState)=>({ timeArrValue: (timeArr[1]-timeArr[0])+prevState.timeArrValue, timeArr:[initial]}));
      }
    
    //UPS COUNTER  
      if(Math.floor(timeArrValue>=1000)){
        console.log(UPS, 'UPS');
        this.setState((prevState)=>({UPS: 0, timeArrValue: 0, tempCheck: true}))
      }
      requestAnimationFrame(this.thumbSpeedDetector)
    }

    componentDidMount() {
        window.requestAnimationFrame(this.thumbSpeedDetector);
    }
    
    componentWillUnmount() {
        window.cancelAnimationFrame(requestAnimationFrame(this.thumbSpeedDetector))
    }

    render(){
        return (
            <div className="timer">
                <h1>You tapped the button {this.state.value} times</h1>
                <span className="text-display">{`${this.state.thumbSpeed} TPS`}</span>
            <div className="button-div">
                <button onClick={()=> this.increaseValue()}>{(()=>'Click')()}</button>
            </div>
            </div>
        )
    }

}

export default TapSpeedometer;