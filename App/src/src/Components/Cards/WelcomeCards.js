import React from 'react';
import './WelcomeCard.css';
import  { Breakpoint, BreakpointProvider } from 'react-socks';

function WelcomeCards() {
    return (
//         <div>
//             <head>
//   {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"> */}
// </head>
// <body>
<Breakpoint large up>
<div className="start">
<div class="container">
  <div class="card">
    <h3 class="title">NEWS</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"> */}
      <circle class="stroke" cx="60" cy="60" r="50"/>
    {/* </svg> */}
    </div>
  </div>
  <div class="card">
    <h3 class="title">SPORTS</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"> */}
      <circle class="stroke" cx="60" cy="60" r="50"/>
    {/* </svg> */}
    </div>
  </div>
  <div class="card">
    <h3 class="title">CASUAL CONVERSATION</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"> */}
      <circle class="stroke" cx="60" cy="60" r="50"/>
    {/* </svg> */}
    </div>
  </div>
  <div class="card">
    <h3 class="title">WEATHER</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"> */}
      <circle class="stroke" cx="60" cy="60" r="50"/>
    {/* </svg> */}
    </div>
  </div>
        </div>
        </div>
        </Breakpoint>
    )
}

export default WelcomeCards
