import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
// import useInterval from 'react-useinterval';
// import '../css/TextAnimation.css';
import { keyframes } from 'styled-components';

const animation=keyframes`
0% {opacity: 0; transform:translateY(-100px) skewY(10deg) skewX(10deg) rotate(30deg); filter: blur(5px)}
25%% {opacity: 1; transform:translateY(0) skewY(0deg) skewX(0deg) rotate(0deg); filter: blur(0px)}
65% {opacity: 1; transform:translateY(0) skewY(0deg) skewX(0deg) rotate(0deg); filter: blur(0px)}
100% {opacity: 0; transform:translateY(-100px) skewY(10deg) skewX(10deg) rotate(30deg); filter: blur(5px)}
`;

const Wrapper = styled.span`
display: inline-block;
span{
text-align: center;
height: 100%;
vertical-align: middle;
justify-content:center;
display: inline-block;
font-size:5vw;
color: yellow;
opacity:0;
animation-name :${animation};
animation-duration: 5s;
animation-fill-mode:forwards;
animation-iteration-count: infinite;
animation-timing-function:cubic-bezier(0.075,0.82,0.165,1);
}
span: nth-child(1){
    animation-delay:0.1s;
}
span: nth-child(2){
    animation-delay:0.2s;
}
span: nth-child(3){
    animation-delay:0.3s;
}
span: nth-child(4){
    animation-delay:0.4s;
}
`;



export default function HeaderAnimation() {
    const arr="ASKME".split("");
    const [items, setItems] = useState(arr);
    // const [count, setCount] = useState(1);
    // const [play,setPlay] = useState(true);

    // useInterval(
    //     () => {
    //         // if(count ==0)
    //         // setCount(count+1);
    
    //         if(count==1){
    //             setItems(arr2);
    //             setCount(count+1);
    //         }

    //         if(count==2){
    //             setItems(arr3);
    //             setCount(count+1);
    //         }

    //         if(count==3){
    //             setItems(arr4);
    //             setCount(0);
    //         }

    //     },play ? 5000:null
    // )

    // useEffect(
    //     () => {
    //         const timer = setTimeout(() =>{
    //             setItems("Welcome to my website!".split(" "));
    //             setPlay(false);
    //         },20000)

    //         return () => {
    //             clearTimeout(timer);
    //         }},[]
    // )

    return(<Wrapper>
        {items.map((item,id)=>(
            <span key={id}>{item}&nbsp;</span>
        ))}
    </Wrapper>)
}

