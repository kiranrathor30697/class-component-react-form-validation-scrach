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
          errors:{
            emailLength:'',
            passwordLength:""
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


        

        if(!email.length && !password.length){
          this.setState({
            ...this.state,
            emailLength:"Please Enter Email",
            passwordLength:"Please Enter Password "
          }) 
           isValid = false;
        }else{

          if(!email.length && password.length){
            this.setState({
              ...this.state,
              emailLength:"Please Enter Email",
              passwordLength:""
            })
          }

          if(email.length && !password.length){
            this.setState({
              ...this.state,
              emailLength:"",
              passwordLength:"Please Enter Password "
            })
          }

          if(email.length && password.length){
            this.setState({
              ...this.state,
              emailLength:"",
              passwordLength:""
            })
          }
        }
      }


    onSubmit(e){
    //   console.warn("submit");
        e.preventDefault();
        const isValid = this.formSubmit();
        console.log(this.state)

    }

    onChange(e){

        const {name,value} = e.target;
        const {email,password} = this.state;
        let isValid = true;

        this.setState({[name]:value});

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

          <div style={{color: 'red',fontSize:"16px" }}>{this.state.emailLength}</div><br />
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


          <div style={{color: 'red',fontSize:"16px" }}>{this.state.passwordLength}</div><br />
          
          <button className="fluid btn btn-success">Submit</button>
        </form>
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