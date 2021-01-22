import styled from 'styled-components';

export const Cards = styled.div`
margin: 20px auto;
width:80%;
@media screen and (max-width:550px) {
    width: 95%;
}
`;

export const CardMiniTitle = styled.h4`
color: #bf3ff5;
font-size: 14px;
font-weight: 700;
margin-bottom: 20px;
`;

export const CardTitle = styled.h1`
font-size: 28px;
font-weight: 700;
color: #444;
letter-spacing: 1.3;
line-height: 1.4;
margin-bottom: 20px;
text-shadow: 0 0 20px rgba(0,0,0,.3);
`;

export const Card =styled.div`
display: flex;
align-items: center;
flex-direction: column;
@media screen and (max-width:550px) {
    margin-bottom: 50px;
    width: 100%;
}
`;

export const CardImg = styled.img`
max-width: 300px;
object-fit: cover;

@media screen and (max-width:1600px) {
    max-width: 250px;
}
@media screen and (max-width:1300px) {
    max-width: 200px;
}
@media screen and (max-width:1050px) {
    max-width: 300px;
}
@media screen and (max-width:770px) {
    max-width: 250px;
}
@media screen and (max-width:650px) {
    max-width: 200px;
}
    @media screen and (max-width:550px) {
        max-width: 100%;
        max-height: 400px;
        object-fit: contain;
    }
`;

export const CardInt = styled.h2`
font-size: 22px;
color: ${props => props.color ? '#00d0bb' : '#0191de'};
margin-top: 20px;
`;

export const CardTitles =styled.h1`
font-size: 20px;
color:#444;
margin-top: 10px;

&:hover{
    color: ${props => props.hover ? '#00d0bb' : '#0191de'};
}
`;

export const CardFlex = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin: 30px 0;

@media screen and (max-width:1050px) {
    flex-wrap: wrap;
}
`;

export const Button = styled.button`
width:160px;
height:50px;
border-radius:40px;
font-size: 12px;
font-weight: 700;
color:#000;
background-color: transparent ;
outline:none;
border:1px solid #bf3ff5;


&:hover{
    background-color:#0191de;
    color: #fff;
    transition: all .5s ease;
    border: none;
}
`;

export const Buttons =styled.div`
display:flex;
justify-content: center;
width:100%; 
`;