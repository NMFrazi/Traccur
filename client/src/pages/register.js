import React, { Component } from "react";
import Registration from '../component/Registration.js';

class Register extends Component {

     render = () => {
          return (
               <div>
                    <div className="container">
                         <div id="splashWrap">
                              <p id="splashTextTitle">REGISTER</p>

                              <Registration />
                         </div>
                    </div>
               </div>
          );
     }
}

export default Register;