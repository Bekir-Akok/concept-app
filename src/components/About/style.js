import styled from 'styled-components';

export const About = styled.div`
display:flex;
justify-content: space-evenly;
align-items:center;
width: 95%;
margin: 90px auto;

@media screen and (max-width:800px) {
    flex-wrap:wrap;
}
`;

export const AboutSec = styled.div`
display:flex;
flex-direction: column;
align-items:left;
max-width: 400px;
margin-left: 20px;
`;

export const AboutMiniTitle = styled.h4`
color: #bf3ff5;
font-size: 14px;
font-weight: 700;
margin-bottom: 20px;
`;

export const AboutTitle = styled.h1`
font-size: 28px;
font-weight: 700;
color: #000;
letter-spacing: 1.3;
line-height: 1.4;
margin-bottom: 20px;
text-shadow: 0 0 20px rgba(0,0,0,.3);
`;

export const AboutText = styled.p`
font-size: 17px;
color:#999;
line-height: 1.5;
letter-spacing: 1.4; 
`;

export const AboutFrame = styled.div`
position:relative;
display:flex;
flex-direction: column;
align-items: center;
`;

export const AboutImg = styled.img`
object-fit:cover;
width: 500px;

@media screen and (max-width:1020px) {
    width: 300px;
}
@media screen and (max-width:800px) {
    margin-top: 30px ;
}
`;

export const AboutFr = styled.div`
position:absolute;
background-image: linear-gradient(137deg,#00d0bb,#0191de 48%,#bf3ff5);
width:106%;
height: 500px;
top: 36%;
z-index:-1;

@media screen and (max-width:1020px) {
    height: 300px;
}
@media screen and (max-width:800px) {
    height: 320px;
}
`;