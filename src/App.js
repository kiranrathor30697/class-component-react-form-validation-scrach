import React, { Component } from 'react';
import './App.css';
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      email:'',
      password:"",
      emailError:"",
      passwordError:""
    }
  }

    validation(){
      if(!this.state.email.includes('@') && !this.state.password < 5){
        this.setState({
          ...this.state,
          emailError:"Invalid Email",
          passwordError:"Invalid Password"
        });
      }else if(!this.state.email.includes('@') || !this.state.email.includes('')){
          this.setState({
            ...this.state,
            emailError:"Invalid Email"
          });
      }else if(!this.state.password < 5){
        this.setState({
          ...this.state,
          passwordError:"Invalid Password,please enter more then 5 charector"
        });
      }
    } 
    handleChange(){
      this.validation();
      // console.log('okokok');
      if(this.state.email.includes('@') && this.state.password < 5){
        this.setState({
          ...this.state,
          emailError:" ",
          passwordError:" "
        });
      }else if(this.state.email.includes('@') || this.state.email.includes('')){
          this.setState({
            ...this.state,
            emailError:" "
          });
      }else if(this.state.password < 5){
        this.setState({
          ...this.state,
          passwordError:" "
        });
      }
    }


  formSubmited(e){
    // alert('submitted')
  // console.log(e);
  e.preventDefault();
  this.validation();
  }
  

  render() {
    return (
      <div className='App App-header'>
         <form className="offSet-1 w-25 p-3 mt-5 bg-dark rounded">
          <h4 className='text-white'>Form Validation</h4><br />
          {/* {console.log(this.state)} */}
          <input 
            type="text" 
            name="email"
            className="form-control email" 
            placeholder="Please Enter Your Email" 
            onChange={(e)=>{this.handleChange(this.setState({email:e.target.value}))}} 
          />

          <div style={{color: 'red',fontSize:"16px" }}>{this.state.emailError}</div><br />

          <input 
            type="password" 
            name="password" 
            className="form-control password" 
            placeholder="Please Enter Your Password" 
            onChange={(e)=>{this.handleChange(this.setState({password:e.target.value}))}} 

          />

          <div style={{color: 'red',fontSize:"16px" }}>{this.state.passwordError}</div><br />
          
          <button onClick={(e)=>{this.formSubmited(e)}} className="fluid btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

// value="" onChange={handleChange} 
