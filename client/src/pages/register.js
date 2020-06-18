import React, { Component } from "react";
import Registration from '../component/Registration.js';

const Register = (props) => {

     // render = () => {
     return (
          <div>
               <div className="container">
                    <div id="splashWrap">
                         <p id="splashTextTitle">REGISTER</p>

                         <Registration
                              handleRegister={props.handleRegister}
                         />
                    </div>
               </div>
          </div>
     );
     // }
}

export default Register;