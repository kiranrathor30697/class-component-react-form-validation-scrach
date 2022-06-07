import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './App.css';

export default class FormValidation extends Component {
    state = {
          email:'',
          password:"",
          type:"password",
          icon:faEyeSlash,
          error:{
            emailError:"",
            passwordError:""
        }
      }


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
      if(this.state.password === ""){
        this.setState({
            ...this.state,
            icon:faEyeSlash,
            type:"password"
          })
      }
    }

    formSubmit = ()=>{
        const {email,password} = this.state;
        let isValid = true;
        const errors = {};
        if(!email.length && !password.length){
            this.setState({
                ...this.state,
                emailError:"Please Enter Email",
                passwordError:"Please Enter Password"
            })
        }
    }

    onSubmit(e){
    //   console.warn("submit");
        e.preventDefault();
        const isValid = this.formSubmit();
    }

    onChange(e){
        // cvalue={email}onsole.log("changed");
        // console.log(e.target);
        const {name,value} = e.target;
        // console.log(name,value);
        this.setState({[name]:value});
        console.log(name);
        console.log(value)

    }
  render() {
    return (
      <div className='App App-header'>
         <form className="offSet-1 w-25 p-3 mt-5 bg-dark rounded" onSubmit={(e)=>{this.onSubmit(e)}}>
          <h4 className='text-white'>Form Validation</h4><br />
          {/* {console.log(state)} */}
          <input 
            type="text"
            name="email"
            className="form-control email" 
            placeholder="Email" 
            onChange={(e)=>{this.onChange(e)}} 
          />

          <div style={{color: 'red',fontSize:"16px" }}>{this.state.emailError}</div><br />
          <div className='z_index'>
              <input 
                type={this.state.type}
                name="password" 
                className="form-control password" 
                placeholder="Password"
                onChange={(e)=>{this.onChange(e)}} 
              />
              
              <span className='FontAwesomeIcon' onClick={()=>{this.iconClick()}}>
                  <FontAwesomeIcon width="20" className='iconShow' icon={this.state.icon} />
              </span>
            </div>


          <div style={{color: 'red',fontSize:"16px" }}>{this.state.passwordError}</div><br />
          
          <button className="fluid btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}