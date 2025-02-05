import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            sint voluptates iste fugiat? Quidem aperiam exercitationem maxime
            sit numquam consequuntur aliquid eum fugiat voluptatibus esse,
            corrupti, incidunt repudiandae delectus earum.
          </p>
          <span>Dont you have an Account</span>
          <Link to="/register">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
