import styled from 'styled-components';

export const Company= styled.div`
display:flex;
flex-direction: column;
align-items:center;
`;

export const CompTitle = styled.h1`
font-size:  24px;
color: #444;
margin-bottom: 70px ;
margin-top: 160px;
text-align:center;
`;

export const CompUl = styled.ul`
display:flex;
justify-content: space-evenly;
align-items:center;
width: 90%;

@media screen and (max-width:800px){
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center; 
}
`;

export const CompLi = styled.li`
list-style: none;
width:25%;

@media screen and (max-width:800px){
    width: 50%;
    text-align:center;
}
`;

export const CompInt = styled.h1`   
font-size:70px;
margin-top: 10px;
color: ${props => props.first ? '#bf3ff5' : '' } ;
color: ${props => props.secondary ? '#0191de' : '' } ;
color: ${props => props.third ? '#00d0bb' : '' } ;
color: ${props => props.four ? '#FAE021' : '' } ;

@media screen and (max-width:500px) {
    font-size:50px;
}
`;

export const CompT = styled.h5`
font-size: 16px;
font-weight: 600;
color: #9f9fa0;
margin-top: 10px;
text-align:center;

@media screen and (max-width:500px) {
    font-size:12px;
}
`;

export const CompP = styled.p`
font-size: 15px;
font-weight: 300;
color: #444;
margin-top: 10px;
`;

export const Line = styled.div`
width: 60px;
height: 2px;
background-color: #9f9fa0;
transform: rotate(90deg);
@media screen and (max-width:800px){
    display: none;
}
`;