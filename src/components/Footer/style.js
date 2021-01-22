import styled from 'styled-components';
import {ChevronsUp} from '@styled-icons/boxicons-regular/ChevronsUp'

export const Footer = styled.div`

`;


export const FooterUp = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
background-color: #003541;
width: 100%;
height: 100px;
padding: 5px 20px;

@media screen and (max-width:1000px) {
    flex-direction: column;
    height: 100%;
}
`;


export const FooterImg = styled.img`
width: 200px;
object-fit: cover;
@media screen and (max-width:1000px) {
    margin: 20px 0;
}
`;

export const FooterTitle = styled.h2`
font-size: 24px;
color: #fff;
text-align:center;
@media screen and (max-width:670px) {
    font-size: 20px;
}
@media screen and (max-width:500px) {
    font-size: 16px;
}
`;

export const Button = styled.button`
width:160px;
height:50px;
border-radius:40px;
font-size: 14px;
font-weight: 700;
color:#fff;
background-image: linear-gradient(137deg,#00d0bb,#0191de 48%,#bf3ff5);
outline:none;
box-shadow: inset 0 0 0 2px #00d0bb;
border:none;

@media screen and (max-width:1000px) {
    margin: 20px 0;
}
`;

export const FooterDown = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 100%;
padding: 5px 20px;
margin-top: 20px;

@media screen and (max-width:1000px) {
    flex-direction: column;
}
`;


export const FooterLogo = styled.img`
width:200px ;
object-fit: cover;

@media screen and (max-width:1000px) {
    margin: 30px 0;
}
`;

export const FooterInfo = styled.div`
display:flex;
align-items: center;
@media screen and (max-width:1000px) {
    margin-bottom: 40px;
}
@media screen and (max-width:800px) {
    flex-direction: column;
}
`;

export const FooterP = styled.p`
font-size: 16px;
color: #9f9fa0;
`;

export const Line = styled.div`
height: 1px;
width: 20px;
background-color: #9f9fa0 ;
transform: rotate(90deg) ;

@media screen and (max-width:800px) {
    transform: rotate(0deg) ;
    width: 70%;
    margin: 20px 0;
}
`;

export const FooterLast = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
padding: 5px 20px;
`;

export const Up = styled(ChevronsUp)`
color: #444;
width: 45px;
`;

export const CopyRight = styled.h6`
font-size:18px ;
color: #444;

@media screen and (max-width:400px) {
    font-size: 15px;
}
`;