import axios from "axios";
import { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import config from "../config";
import { toast } from "react-toastify";

function Login() {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const Loginuser = async () => {
    if(email.length===0){
      toast.error('email column cannot be empty')
    }else if(password.length===0){
      toast.error('Enter valid password')
    }else{

    const body = {
      email,
      password,
    };

    const response = await axios.post(`${config.url}/user/login`, body);

    const result = response.data;
    console.log(result)
    if (result["status"] === "success") {
        const {token ,name }=result['data']

        sessionStorage.setItem('token',token)
        sessionStorage.setItem('name',name)

        toast.success(`welcome ${sessionStorage['name']}...`)
        Navigate('/Home')
    } else {
      toast.error('invalid credentials')
    }
  }
  }

  return (
    <div>
      <MDBContainer
        className="my-5"
        style={{
          backgroundColor: "rgba(255, 179, 86, 0.25)",
          paddingBottom: "40px",
          border: "2px solid black",
        }}
      >
        <h2 className="login" style={{ textAlign: "center", color: "white",fontFamily:"cursive",fontWeight:"bolder",fontSize:"45px" , }}>Sunbeam Blogs-Login</h2>
        <MDBCard style={{ border: "1px solid black" }}>
          <MDBRow className="g-0 d-flex align-items-center bg-primary p-2 text-dark bg-opacity-25">
            <MDBCol md="4">
              <MDBCardImage
                style={{ height: "315px" }}
                src="https://www.blogger.com/about/img/social/facebook-1200x630.jpg"
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
              />
            </MDBCol>

            <MDBCol md="8">
              <MDBCardBody>
                <label htmlFor="">
                  {" "}
                  <b>Email</b>
                </label>
                <MDBInput
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  id="form1"
                  type="email"
                />
                <label htmlFor="">
                  <b>Password</b>
                </label>
                <MDBInput
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  wrapperClass="mb-4"
                  id="form2"
                  type="password"
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label=" Remember me"
                  />
                  <Link to="/Register">Register</Link>
                </div>

                <MDBBtn onClick={Loginuser} className="mb-4 w-100">
                  Log in
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;
