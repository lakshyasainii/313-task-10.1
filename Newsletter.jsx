// import React from 'react';
// import './Card.css';

// const Newsletter = () => {
//     return (
//         <form action="/" method="POST">
//             <div className="container-fluid bg-light">
//                 <div className="newsletter-container">
//                     <p><b>SIGN UP FOR OUR DAILY INSIDER</b>
//                     <input name="email" type="text" placeholder="Enter your email" className='m-1' />
//                     <button name="submit" type="submit" className="btn btn-secondary btn-sm">Subscribe</button></p>
//                 </div>
//             </div>
//         </form>
//     );
// }

// export default Newsletter;

import React, { useState } from "react";
import './Card.css'

function Header() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (email === '') {
      setErrorMessage('Email address is required');
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail('');
        setErrorMessage('');
        console.log("Email sent successfully!");
      } else {
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear the error message when the user starts typing
    setErrorMessage('');
  };

  return (
    <div className="clr">
      <form id="signup-form" onSubmit={handleSubscribe}>
        <span>
          <label className="size">SIGN UP FOR OUR DAILY INSIDER</label>
          <input
            id="emailInput"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" className="subscribe">Subscribe</button>
        </span>
        <p className="error-message">{errorMessage}</p>
      </form>
    </div>
  );
}

export default Header;
