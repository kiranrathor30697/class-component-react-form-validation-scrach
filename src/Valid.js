import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './App.css';
import { ValidatetionMessage } from './ErrMsg';
import { FormErrors } from './FormErrors';

export default class OnchangeValidation extends Component {
    state = {
          email:'',
          password:"",
          type:"password",
          emailValid:false,
          formValid:false,
          passwordValid:false,
          icon:faEyeSlash,
          formErrors:{
            email:'',
            password:''
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

    validateForm =()=>{   
        this.setState({formValid:this.state.emailValid && this.state.passwordValid})
    }

    updateValue = () =>{
      const name = this.state.name;
      const value = this.state.value;
      this.setState({
          [name]:value},()=>{this.validateForm(name,value)})
    }

    validateMyForm = (value)=>{
      let myValidationError = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;

      if(this.state.email == "email"){
        console.log("email")
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        myValidationError.email = emailValid ? '' : "is invalid";

      }else if(this.state.password == "password"){

          passwordValid = value.length >= 6;
          myValidationError = passwordValid ? '' : " is very short";
          console.log(myValidationError)
      }
     
      this.setState({
        forErrors:myValidationError,
        emailValid:emailValid,
        passwordValid:passwordValid
      },()=>{this.validateForm()}
      )
    }


    onSubmit(e){
        e.preventDefault();
    }

  render() {
    return (
      <div className='App App-header'>
         <form className="offSet-1 w-25 p-3 mt-5 bg-dark rounded" onSubmit={(e)=>{this.onSubmit(e)}}>

         <div className="err">
          <FormErrors className="fr" formErrors={this.state.formErrors} />
         </div>

          <h4 className='text-white'>Form Validation</h4><br />
          {/* {console.log(this.state)} */}

          <input 
            type="text"
            name="email"
            className="form-control email" 
            placeholder="Email" 
            value={this.state.value}
            onChange={()=>{this.updateValue()}} 
          />

          <div style={{color: 'red ',fontSize:"16px" }}>
            <div className="err">
            <FormErrors className="fr" formErrors={this.state.formErrors} />
          </div>
              {/* {this.state.formErr.email} */}
              {/* <ValidatetionMessage valid={this.state.emailValid} msg={this.state.formErr.email} /> */}
              {/* {this.props.msg} */}
         </div><br />


          <div className='z_index'>
              <input 
                type={this.state.type}
                name="password" 
                className="form-control password" 
                placeholder="Password"
                value={this.state.value}
                onChange={()=>{this.updateValue()}} 
              />


              <span className='FontAwesomeIcon' onClick={()=>{this.iconClick()}}>
                  {/* <FontAwesomeIcon width="20" className='iconShow' icon={this.state.icon} /> */}
              </span>
            </div>


          <div style={{color: 'red',fontSize:"16px" }}>
                {/* {this.state.formErr.password} */}
              {/* <ValidatetionMessage valid={this.state.passwordValid} msg={this.state.formErr.password} /> */}
         </div><br />  
          <button className="fluid btn btn-success" >Submit</button>
          {/* {this.state.map()}
          {console.log(this.state.formErr)}
          {console.log(typeof(this.state))} */}

        </form>


         
      </div>
    );
  }
}














