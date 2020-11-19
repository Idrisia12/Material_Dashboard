import React from 'react';
import farm3 from "../src/imgs/farm3.png";
import avatar from "../src/imgs/avatar2.svg";
import './login.css';

function App() {
  return (

    <div className="App">
    <body>
     <img
       className="wave"
       src={farm3}
       alt="img"
      />
     <div className="container">
       <div className="img">
         <img
           src={}
           alt="img"
         />
       </div>
       <div className="login-content">
         <form action="index.html">
           <img
             src={avatar}
             alt="img"
            />
           <h2 className="title">Welcome To <span>QuadAg</span></h2>
                   <div className="input-div">
                      <div className="div">
                         <input type="text" className="input" placeholder="Email" />
                      </div>
                       </div>

                   <div className="input-div">
                      <div className="div">
                         <input type="password" className="input" placeholder="Password" />
                    </div>
                 </div>
                 <a href="forget.html" className="forgot">Forgot Password?</a>
                    <input type="submit" className="btn" value="Login" />
                    <h4>New Here? <a href="register1.html" className="new">Sign Up</a></h4>
                </form>
            </div>
        </div>

    </body>

    </div>
  );
}

export default App;
