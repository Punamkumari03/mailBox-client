import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, ListGroup, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const userEmail = localStorage.getItem("email");
  const sanitizedEmail = userEmail.replace(/[@.]/g, "");

  useEffect(() => {
   const  res= fetch(`https://mailbox-2ea66-default-rtdb.firebaseio.com/${sanitizedEmail}/inbox.json`)

 res.then(res =>{
  if(res.ok){
    res.json().then(data =>{
      console.log('inbox data',data)
      setMessages(Object.values(data))
    })
  }else{
    res.json().then(err =>{
      console.log(err)
    })
  }
 })
   }, [sanitizedEmail]);

  return (
    <div>
      <h3>Inbox-({sanitizedEmail})</h3>
      <Link to="/composemail">
          {" "}
          <Button>Compose Email</Button>
        </Link>
      <Card className="text-left">
        <ListGroup variant="flush">
          {messages.map((message, index) => (
            <ListGroup.Item key={index}>
              <div>
                {`to-${message.to}: subject-${message.subject} - ${message.content}`}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
       
      </Card>
    </div>
  );
};

export default Inbox;
