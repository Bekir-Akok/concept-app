import styled from 'styled-components';

export const İntro = styled.div`
background-image: linear-gradient(111deg, #00d0bb, #bf3ff5 98%, #bf3ff5);
width: 100%;
height: 70vh;
padding: 200px 0 0 0 ;

@media screen and (max-width:500px) {
    padding: 150px 0 0 0 ;
}
@media screen and (max-width:380px) {
    padding: 100px 0 0 0 ;
}
@media screen and (max-width:350px) {
    padding: 60px 0 0 0 ;
}
`;

export const İntroInfo = styled.div`
display:flex;
align-items:left;
flex-direction: column;
max-width: 70%;
margin: 0px auto;
`;

export const İntroTitle = styled.h6`
font-size: 16px;
color: #fff;
margin-bottom: 10px;
`;

export const İntroH3 = styled.h3`
color:#fff;
font-size: 26px;
margin-bottom: 20px;
@media screen and (max-width:380px) {
    font-size: 16px;
}
`;

export const İntroP = styled.p`
font-size: 16px;
color: #fff;
@media screen and (max-width:380px) {
    font-size: 12px;
}
`;
