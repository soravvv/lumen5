import React from "react"
import styled from "styled-components"

const Button = styled.button `
border:1px solid #5846f6;
width: 90px;
font-size: 14px;
line-height: 21px;
height: 38px;
color: #5846f6;
padding: 8px 10PX;
font-weight: 400;
text-align: center;
background-color:white;
text-decoration: none;
border-radius: 50PX;
margin: 0 10px 0 0 ;
cursor: pointer;

&:hover{
     background-color: #5846f6;
     color: white;
}
`;

const Show_Button = styled.button`
     border: 1px solid gray;
     background-color: #f0f0f4;
     font-size: 14px;
     line-height: 21px;
     vertical-align: middle;
     padding: 12px;
     font-weight: 400;
     border-radius: 40px;
     height: 45px;
     width: 110px;

     &:hover{
          background-color: #909090;
     }
`;

export {Button,Show_Button}