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
        />
      <div className="container">
        <div className="img">
          <img
            src={}
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
                        <input type="text" className="input" placeholder="Name" />
                     </div>
                       </div>
                  <div className="input-div">
                     <div className="div">
                        <input type="email" className="input" placeholder="Email" />
                     </div>
                    </div>
                    <div className="input-div">
                        <div className="div">
                             <input type="phone" className="input" placeholder="Phone Number" />
                     </div>
                  </div>
                  <div className="input-div">
                    <div className="div">
                         <input type="password" className="input" placeholder="Password" />
                 </div>
                </div>
                    <input type="submit" className="btn" value="Register" />
                    <h4>Already a User? <a href="login1.html" className="new">Login</a></h4>
                </form>
            </div>
        </div>

    </body>
    </div>
  );
}

export default App;
