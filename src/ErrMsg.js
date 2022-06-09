export const ValidatetionMessage = (props) => {
          if(props.valid){
            console.log(props.msg);
              return(<div>{props.msg}</div>);
          }else{
              return null;
          }
      }

      