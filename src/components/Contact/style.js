import styled from 'styled-components';


export const Form = styled.form`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
`;

export const Input = styled.input`
outline: none ;
border:none;
border-bottom: 1px solid #9f9f9f;
width: 1200px;
padding: 10px;
margin-bottom: 30px;
@media screen and (max-width:1200px){
    width: 90%;
}
`;

export const Text = styled.textarea`
outline: none ;
border:none;
border-bottom: 1px solid #9f9f9f;
width: 1200px;
padding: 10px;
margin-bottom: 30px;

@media screen and (max-width:1200px){
    width: 90%;
}
`;

export const Title = styled.h1`
color: #444;
font-size: 28px;
margin-bottom: 50px;
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
margin-top: 20px;

&:hover{
    background-color:#0191de;
    color: #fff;
    transition: all .4s ease;
    border: none;
}
`;