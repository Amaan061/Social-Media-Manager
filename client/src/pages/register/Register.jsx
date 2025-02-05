import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Submit</button>
          </form>
        </div>
        <div className="left">
          <h1>SocioMeds</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            sint voluptates iste fugiat? Quidem aperiam exercitationem maxime
            sit numquam consequuntur aliquid eum fugiat voluptatibus esse,
            corrupti, incidunt repudiandae delectus earum.
          </p>
          <span>Dont you have an Account</span>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
