import { Component } from "react";
import styles from "./form.module.css";
import Input from "./Input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", output:''};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    console.log(JSON.stringify(this.state));
    console.log(this.state);
    this.setState((prev)=>({...prev, output: this.state.name}))
    e.preventDefault();
  }

  setName = (e) => {
    this.setState((prev)=>({...prev, name: e.target.value }));
  };
  setEmail = (e) => {
    this.setState((prev)=>({...prev, email: e.target.value }));
  };

  render() {
    return (
      <div>
        
        <form action="" onSubmit={this.submitForm}>
        <span style={{color: '#fff'}}>{this.state.output}</span>
        <label htmlFor="">Name</label>
        <Input type="text" pattern="abcde" value={this.state.name} setValue={this.setName}/>
        <Input type="email" pattern="abcde@mail.com" value={this.state.email} setValue={this.setEmail}/>
        <button type="submit" style={{padding:'1rem'}}>Submit</button>
      </form>
      </div>
    );
  }
}

export default Form;
