import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './Components/Cards/NewsCards';
import HeaderAnimation from './HeaderAnimation';
import WelcomeCards from "./Components/Cards/WelcomeCards";
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import './App.css';

const alanApiKey =
  "271f83d3d0e6692793c3334fd4cd4ee92e956eca572e1d8b807a3e2338fdd0dc/stage";


function App() {

  const [articles,setArticles]=useState([]);

  useEffect(() => {
    alanBtn({
        key: alanApiKey,
        onCommand : ({command,data}) => {
          if (command=== 'news-sources') {
            // Call the client code that will react to the received command
            console.log(data);
            // console.log(command);
            setArticles(data);
          }
        }
    });
  }, []);

  return (
    <div className="App">
    <div className="App-1"><h1 align="center"><HeaderAnimation/></h1></div>
    <BreakpointProvider><div className="App-2"><WelcomeCards/></div></BreakpointProvider>
    <div className="App-3"><NewsCards articles={articles}/></div></div>
  );
}

export default App;
