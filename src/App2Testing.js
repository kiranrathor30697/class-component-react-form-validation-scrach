import { faCoffee, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './App.css';
export default class App2Testing extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:"",
      emailError:"",
      passwordError:"",
      type:"password",
      icon:faEyeSlash,
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
    
      // console.log('okokok');
      if(this.state.email.includes('@') && this.state.password < 5){
        this.setState({
          ...this.state,
          emailError:" ",
          passwordError:" "
        });
      }else if(this.state.email.includes('@')){
          this.setState({
            ...this.state,
            emailError:" "
          });
      }else if(this.state.password < 5){
        this.setState({
          ...this.state,
          passwordError:""
        });
      }
      this.validation();
      
    }
// ----------Password Hide Show -----------------------------------------------------

    iconClick(){
      // console.warn("ok");
      // console.log(e);

      if(this.state.type === "password"){
        this.setState({
          ...this.state,
          icon:faEye,
          type:"text"
        })
      }else{
        this.setState({
          ...this.state,
          icon:faEyeSlash,
          type:"password"
        })
      }
      
      // console.log(this.state.type)
      
      
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
            placeholder="Email" 
            onChange={(e)=>{this.handleChange(this.setState({email:e.target.value}))}} 
          />

          <div style={{color: 'red',fontSize:"16px" }}>{this.state.emailError}</div><br />
          <div className='z_index'>
              <input 
                type={this.state.type}
                name="password" 
                className="form-control password" 
                placeholder="Password" 
                onChange={(e)=>{this.handleChange(this.setState({password:e.target.value}))}} 
                
              />
              <span className='FontAwesomeIcon' onClick={()=>{this.iconClick()}}>
                  <FontAwesomeIcon width="20" className='iconShow' icon={this.state.icon} />
              </span>
            </div>


          <div style={{color: 'red',fontSize:"16px" }}>{this.state.passwordError}</div><br />
          
          <button onClick={(e)=>{this.formSubmited(e)}} className="fluid btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

// value="" onChange={handleChange} 
// placeholder=" &#xf007;Email" 

