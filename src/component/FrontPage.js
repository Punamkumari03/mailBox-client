import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/AuthSlice';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './FrontPage.module.css'

const FrontPage = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const inbox = useSelector(state => state.inbox)
  
    const logouHandler = () => {
      alert("logout successfully");
      dispatch(authActions.logout());
    };
  return (
    <>
       <Navbar bg="white" expand="lg">
      <Navbar.Brand className={classes.head}> MailBox</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!isAuthenticated && (
            <NavLink to="/login" className={classes.style} style={{color:"red"}}>
              Login
            </NavLink>
          )}
          {!isAuthenticated && (
            <NavLink to="/signup" className={classes.style} style={{color:"green"}}>
              SignUp
            </NavLink>
          )}

          {isAuthenticated && (
            <NavLink to="/composemail" className={classes.style} style={{color:"green"}}>
              Compose Mail
            </NavLink>
          )}
          {isAuthenticated && (
            <NavLink to="/inbox" className={classes.style} style={{color:"black"}} >
              Inbox{inbox.unreadCount}
            </NavLink>
          )} 

          {isAuthenticated && (
            <NavLink to="/login" className={classes.style} style={{color:"red"}} onClick={logouHandler}>
              Logout
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default FrontPage
