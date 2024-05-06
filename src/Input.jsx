import { Component } from "react";
import styles from './form.module.css'




class Input extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
    }


    render(){
       const {type,pattern,setValue, value} = this.props;
       
       return <input type={type} value={value} onChange={setValue} className={styles.fancy_input} />
    }

}

export default Input