import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import { toast } from "react-toastify";

function Register() {
  const [fullName, setName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNo, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [confirmedpassword, setcpassword] = useState("");

  const navigate = useNavigate();

  
  const rgisterUser = async () => {
    const body = {
      fullName,
      email,
      password,
      phoneNo,
    };
    if (fullName.length === 0) {
      toast.error("name cannot be empty");
    } else if (email.length === 0) {
      toast.error("email required");
    } else if (phoneNo.length === 0) {
      toast.error("phone number cannot be empty");
    } else if (password.length === 0) {
      toast.error("you have to set password");
    } else if (confirmedpassword.length === 0) {
      toast.error("confirm password");
    } else if (password != confirmedpassword) {
      toast.error("confirmed password should match the confirmed password");
    } else {
      const response = await axios.post(`${config.url}/user/register`, body);

      const result = response.data;
      if (result["status"] === "success") {
        toast.success("Registration done successful");
        navigate("/Login");
      } else {
        toast.error("something went wrong");
      }
    }
  };

  return (
    <div className="container mt-4 py-4" style={{ height:"500px", borderRadius:"10px"}}>
     

      <div className="row mt-5">
      <h2 className="page-title mt-4" style={{ textAlign: "center" }}>
        Registeration
      </h2>
        <div className="col-2"></div>

        <div className="col pb-4 pt-4 ps-4 pe-4" style={{ border:"1px solid black"}}>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor=""><b>Full Name</b></label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor=""><b>Email</b></label>
                <input
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="email"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label htmlFor=""><b>Phone Number</b></label>
                <input
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                  type="tel"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor=""><b>Password</b></label>
                <input
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label htmlFor=""><b>Confirm Password</b></label>
                <input
                  onChange={(e) => {
                    setcpassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <b>Already have account ?</b> <Link to="/Login">Login here</Link>
              </div>
               <div className=" d-flex justify-content-center">
                <button onClick={rgisterUser} className="btn btn-success ">
                Register
                  </button>
              </div>
              
            </div>
          </div>
        </div>

        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Register;
