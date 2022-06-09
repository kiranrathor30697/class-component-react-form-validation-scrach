import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './App.css';
import { ValidatetionMessage } from './ErrMsg';


  //  function ValidatetionMessage (props) {
  //       if(props.valid){
  //         console.log(props.msg);
  //           return(<div>{props.msg}</div>);
  //       }else{
  //           return null;
  //       }
  //   }
export default class OnchangeValidation extends Component {
    state = {
          email:'',
          emailValid:false,
          password:"",
          passwordValid:false,
          type:"password",
          icon:faEyeSlash,
        //   btn:false,
          formValid:false,
          formErr:{
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
        const {emailValid,passwordValid} = this.state;
        this.setState({
            ...this.state,
            formValid:emailValid && passwordValid
        })
    }


    updateEmail = (email)=>{
        this.setState({...this.state,email},()=>{this.validateEmail()});
    }

    validateEmail = ()=>{
        const {email} = this.state;
        let formErr;
        let emailValid = true;
         formErr = {...this.state,formErr}
        if(!email.length){
            emailValid = false;
            formErr.email = "Please Enter Email"
        }
        this.setState({email:email,formErr:formErr},()=>{this.validateForm()});
        console.log(this.state.formErr.email)
    }


    updatePassword = (password)=>{
        this.setState({...this.state,password},()=>{this.validatePassword()});
    }

    validatePassword = ()=>{
        const {password} = this.state;
        let formErr;
        let passwordValid = true;
         formErr = {...this.state,formErr}
        if(!password.length){
            passwordValid = false;
            formErr.password = "Please Enter password"
        }
        this.setState({password:password,formErr:formErr},()=>{this.validateForm()});
        console.log(this.state.formErr.password)
      }


    onSubmit(e){
        e.preventDefault();
    }

  render() {
    return (
      <div className='App App-header'>
         <form className="offSet-1 w-25 p-3 mt-5 bg-dark rounded" onSubmit={(e)=>{this.onSubmit(e)}}>
          <h4 className='text-white'>Form Validation</h4><br />
          {/* {console.log(this.state)} */}

          <input 
            type="text"
            name="email"
            className="form-control email" 
            placeholder="Email" 
            value={this.state.value}
            onChange={(e)=>{this.updateEmail(e)}} 
          />


          <div style={{color: 'red ',fontSize:"16px" }}>
              {/* {this.state.formErr.email} */}
              <ValidatetionMessage valid={this.state.emailValid} msg={this.state.formErr.email} />
              {/* {this.props.msg} */}
         </div><br />


          <div className='z_index'>
              <input 
                type={this.state.type}
                name="password" 
                className="form-control password" 
                placeholder="Password"
                value={this.state.value}
                onChange={(e)=>{this.updatePassword(e)}} 
              />


              <span className='FontAwesomeIcon' onClick={()=>{this.iconClick()}}>
                  <FontAwesomeIcon width="20" className='iconShow' icon={this.state.icon} />
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
          {Object.keys(ValidatetionMessage).map((cv, i) => {
          if(ValidatetionMessage[cv].length > 0){
            return (
              <p key={i}>{cv} {ValidatetionMessage[cv]}</p>
            )        
          } else {
            return 'dgbvvvvvvvvvvvvvv';
          }
        })}
      </div>
    );
  }
}


































// if(!email.length){
//   this.setState({
//      emailLength :"Please Enter Email"
//   })
//   isValid = false;
// }else{
//   this.setState({
//     ...this.state,
//     emailLength:""
//   })
// }


// if(!email.trim().includes('@')){
//   this.setState({
//     emailLength :"Please Enter Valid Email"
//  })
//   isValid = false;
// }else{
//   this.setState({
//     ...this.state,
//     emailLength:""
//   })
// }

// if(!password.length < 5){
//   this.setState({
//       ...this.state,
//       passwordLength:"Please Enter minimum 5 digit Password "
//     })
//   isValid = false;
// }else {
//     this.setState({
//       ...this.state,
//       passwordLength:""
//     })
//   }

// if(!password.length > 10){
//   this.setState({
//     ...this.state,
//     passwordLength:"Please Enter maximum 10 digit Password"
//   })
//   isValid = false;
// }else {
//   this.setState({
//     ...this.state,
//     passwordLength:""
//   })
// }