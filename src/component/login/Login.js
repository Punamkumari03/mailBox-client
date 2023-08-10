import { useRef } from "react";
import { FormControl, Form, FloatingLabel, Button, Nav } from "react-bootstrap";
import classes from "../SignUp.module.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const usernameref = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const EmailId = usernameref.current.value;
    const Password = passwordInputRef.current.value;

    if (EmailId === "" || Password === "") {
      alert("Must fill both Email and Password");
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtVnZ9ipkn0Emo_qH1sYgnbSMrUvfQaDc",
        {
          method: "POST",
          body: JSON.stringify({
            email: EmailId,
            password: Password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          console.log("successfully logged in");
          alert("Successfully Logged In");
        } else {
          return res.json().then((data) => {
            let errorMessage = "authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    }
    usernameref.current.value = "";
    passwordInputRef.current.value = "";
  };
  return (
    <>
    <div className={classes.signup}>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        <FloatingLabel label="Email address" className="mb-3">
          <FormControl
            type="text"
            placeholder="Username"
            required
            ref={usernameref}
          />
        </FloatingLabel>
        <FloatingLabel label="Password" className="mb-3">
          <FormControl
            type="password"
            placeholder="Username"
            required
            ref={passwordInputRef}
          />
        </FloatingLabel>
      
        
        <div className="d-grid">
          <Button type="submit" style={{ borderRadius: "5rem" }}>
            Login
          </Button>
        </div>
      </Form>
    </div>
    <div className={classes.h2}>
      <NavLink to='/signup'>Have an account? SignUp</NavLink>
    </div>
  </>
  );
};
export default Login;