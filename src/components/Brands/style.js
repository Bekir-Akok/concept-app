import styled from 'styled-components';


export const Brands = styled.div`
margin: 80px auto 50px auto;
display:flex;
flex-direction: column;
align-items:center;
width: 100%;
`;


export const BrandsTitle = styled.h1`
font-size: 24px;
color:#000;
font-weight: 700; 
margin-bottom: 50px;
text-shadow: 0 0 20px rgba(0,0,0,.4);
`;

export const Flex = styled.div`
display:flex;
align-items: center;
justify-content:center;
flex-wrap:wrap;
max-width: 960px;
margin: 0 auto;
`;

export const BrandImg = styled.img`
width: 200px;
object-fit: cover !important;
//overflow-yfilter: grayscale(100%);
//opacity: 0.1;
margin-bottom: 30px;
margin-right: 10px;
&:hover{
    //filter: grayscale(0%);
    transition: all .2s ease-in-out;
}

@media screen and (max-width:960px){
    max-width: 150px;
    flex-basis: 47%;
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
margin-top: 20px;

&:hover{
    background-color:#0191de;
    color: #fff;
    transition: all .4s ease;
    border: none;
}
`;