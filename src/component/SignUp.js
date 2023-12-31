import {
    FloatingLabel,
    Form,
    FormControl,
    Button,
    NavLink,
  } from "react-bootstrap";
  import classes from './SignUp.module.css';
  import { useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

  const SignUp = () => {
    const emailInpurRef = useRef();
    const passwordInputRef = useRef();
    const confirmpasswordInputRef = useRef();

    const submitHandler = (event) => {
      event.preventDefault();

      const enteredEmail = emailInpurRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      const confirmpassword = confirmpasswordInputRef.current.value;

      if (enteredPassword !== confirmpassword) {
        alert("Password and confirm password must match");
      } else {
        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtVnZ9ipkn0Emo_qH1sYgnbSMrUvfQaDc",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.ok) {
            console.log("successfully signed up");
            alert("Account created succesful");
          } else {
            return res.json().then((data) => {
              // console.log(data);
              let errorMessage = "Authentication failed!";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }

              alert(errorMessage);
            });
          }
        });
      }
      emailInpurRef.current.value = "";
      passwordInputRef.current.value = "";
      confirmpasswordInputRef.current.value = "";
    };

    return (
      <>
        <div className={classes.signup}>
          <h1>Sign Up</h1>
          <Form onSubmit={submitHandler}>
            <FloatingLabel label="Email address" className="mb-3">
              <FormControl
                type="text"
                placeholder="Username"
                required
                ref={emailInpurRef}
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
            <FloatingLabel label="Confirm Password" className="mb-3">
              <FormControl
                type="password"
                placeholder="Username"
                required
                ref={confirmpasswordInputRef}
              />
            </FloatingLabel>
            <div className="d-grid">
              <Button type="submit" style={{ borderRadius: "5rem" }}>
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
        <div className={classes.h2}>
          <Link to='login'>Have an account?Login</Link>
        </div>
      </>
    );
  };
  export default SignUp;