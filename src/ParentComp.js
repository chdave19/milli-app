import React,{ Component } from "react";
import Comp from "./Comp";
import styles from './form.module.css'


class ParentComp extends Component{
    constructor(x){
        super(x);
        this.state = {bg: 'green', bg_class:styles.light, bg_mode: 'light'};
        this.divRef = React.createRef();
    }

    componentDidMount(){
        // setInterval(()=>{this.setState({bg:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`})},4000);
        console.log(this.divRef.current.classList);
        

    }

    changeBg=()=>{

        if(this.state.bg_mode==='dark') this.setState({bg_class: styles.light, bg_mode: 'light'})
        
        else this.setState({bg_class: styles.dark, bg_mode: 'dark'});

    }

    shouldComponentUpdate(props,state){
        console.log(state)
        return true;
    }

    render(){
       console.log('Parent Comp updated') 
       return <div style={{height: '100vh', width: '100vw', padding: '1rem'}} 
                   ref={this.divRef} className={this.state.bg_class}>
                  <Comp/>
                  <button onClick={this.changeBg}>{'Click'||'click'}</button>
             </div>
    }
}

export default ParentComp;