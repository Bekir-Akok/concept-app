import styled from 'styled-components';
import backgroundImg from '../../img/med-badr-chemmaoui-ZSPBhokqDMc-unsplash.jpg';

export const Container = styled.div`
position:relative;
`;

export const Color = styled.div`
z-index:-1;
position:absolute;
top:-5%;
right:0;
width:50%;
height:100vh;
background-image: linear-gradient(144deg,#00d0bb,#0191de 48%,#bf3ff5);
`;

export const Background = styled.div`
width:95%;
height: 90vh;
margin: 40px auto 0 auto;
background-image: url(${backgroundImg} );
background-size: cover;
background-position: bottom;
background-repeat: no-repeat;
@media screen and (max-width:1200px)  {
    margin: 20px auto 0 auto;
}
`; 

export const LandingInfo = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
width: 50%;
height: 100vh;
margin: 0 auto;
text-align:center;

@media screen and (max-width:700px)  {
    width: 100%;
}
`;

export const Title = styled.h1`
font-size: 18px;
color:#00d0bb ;
font-weight: 600;
margin-bottom: 20px;
letter-spacing: 1.4px; 
text-shadow: 0 0 20px rgba(0,0,0,.9);
`;

export const Content = styled.p`
font-size: 50px;
color:#fff;
font-weight:600;
margin-bottom: 24px;
text-shadow: 0 0 20px rgba(0,0,0,.9);

@media screen and (max-width:700px)  {
    font-size: 40px;
}
@media screen and (max-width:700px)  {
    font-size: 30px;
}
`;

export const Buttons = styled.div`
display:flex;
align-items:center;
@media screen and (max-width:700px)  {
    flex-direction: column;
    margin-bottom:20px;
}
`;

export const Button = styled.button`
width:160px;
height:50px;
border-radius:40px;
font-size: 14px;
font-weight: 700;
color:#fff;
background-color: ${props => props.primary ? '#00d0bb' : '#bf3ff5' }   ;
outline:none;
border:none;
margin-left:10px;

&:hover{
    background-color:#0191de;
    transition: all .5s linear;
}
@media screen and (max-width:700px)  {
    margin-top:20px;
}
`;

export const Logo = styled.h1`
@import url(../../fonts.css);
font-family: 'Monoton', cursive;
font-size:100px;
color: #fff;
font-weight:400;
`;
