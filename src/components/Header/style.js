import styled from 'styled-components';
import {Menu} from '@styled-icons/feather/Menu'
import { Close } from '@styled-icons/evil/Close';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/feather/Twitter';
import { SocialLinkedin } from '@styled-icons/foundation/SocialLinkedin';

export const Header = styled.div`
position: fixed;
display:flex;
justify-content:space-between;
align-items:center;
width: 95%;
margin-top: 30px;
padding: 0 20px;
z-index: 9999;
@media screen and (max-width:450px){
    margin-top: 10px;
}
`;


export const Logo =styled.img`
width: 200px;
object-position: cover;

@media screen and (max-width:450px){
    width: 150px;
}
`;


export const MenuUl = styled.ul`
display: ${ props => props.head ? 'none' : 'flex' };
justify-content:space-between;

@media screen and (max-width:1200px) {
    display:none;
}
`;

export const MenuLi =styled.li`
font-size: 16px;
font-weight: 600;
list-style: none;
color: #fff;
margin-right: 30px;
`;

export const Icons = styled.a`
opacity:1;
width:45px;
margin-left:30px;
`;

export const Link1 = styled.a`
display:inline-block;
text-decoration:none;


&:after {
    display: block;
    content: "";
    height: 3px;
    margin-top: 10px;
    width: 0%;
    background-color: #bf3ff5;
    transition: width .3s ease-in-out;
}
&:hover:after,
&:focus:after {
    width: 100%;
}
`;

export const MenuBar =styled(Menu)`
color:${props => props.head ? '#000' : '#fff' };
`;

export const DropDownMenu = styled.div`
display:flex;
align-items:center;
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

@media screen and (max-width:990px){
    display:none;
}
`;


export const NavMenu = styled.div`
position: fixed;
width: 100%;
height:100%;
padding: 30px;
z-index:999;
top: 0;
left: ${props => props.click ? '0' : '-150%'} ;
background-color:#fff;
transition:all .8s ease-in-out ;
`;

export const CloseIcon = styled(Close)`
color:#bf3ff5;
width: 40px;

@media screen and (max-width:450px){
    width:30px;
}
`;

export const Flex = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`;

export const Color = styled.div`
position:absolute;
z-index:-1;
top:0%;
left:0;
width:50%;
height:100%;
background-image: linear-gradient(144deg,#00d0bb,#0191de 48%,#bf3ff5); 
overflow: hidden;
`;

export const Container = styled.div`
width: 95%;
height:100%;
margin: 0 auto;
background-color:#f9f9f9;
padding: 30px;
@media screen and (max-width:450px){
    padding: 10px;
    overflow-y:scroll;
}
`;

export const DropLogo =styled.img`
width: 200px;
object-position: cover;
@media screen and (max-width:450px){
    width: 150px;
}
`;

export const MenuUln = styled.ul`
display: flex;
justify-content:space-between;
flex-direction: column;
padding: 30px;
`;

export const MenuLin =styled.li`
font-size: 26px;
font-weight: 700;
list-style: none;
color: #444;
margin-top: 20px;

@media screen and (max-width:450px){
    font-size:22px;
    margin-top: 20px;
} 
`;

export const Linkn = styled.a`
transition: width .5s ease-in-out;
display:inline-block;
&:after {
    display: block;
    content: "";
    height: 3px;
    margin-top: 10px;
    width: 0%;
    background-color: #bf3ff5;
    transition: width .5s ease-in-out;
}
&:hover:after,
&:focus:after {
    width: 100%;
}
&:hover{
    color: #0191de;
}
`;

export const MenuUln1 = styled.ul`
display: flex;
justify-content:space-between;
flex-direction: column;
padding: 30px;
`;

export const Line = styled.div`
height:1px;
width: 100%;
background-color: #999;
margin-left: 10px;
`;

export const MenuLin1 =styled.li`
font-size: 18px;
font-weight: 300;
list-style: none;
color: #444;
margin-top: 10px; 

@media screen and (max-width:450px){
    font-size:14px;
} 
`;

export const Linkn1 = styled.a`
transition: width .5s ease-in-out;
display:inline-block;
&:after {
    display: block;
    content: "";
    height: 3px;
    margin-top: 10px;
    width: 0%;
    background-color:  #0191de;
    transition: width .5s ease-in-out;
}
&:hover:after,
&:focus:after {
    width: 100%;
}
&:hover{
    color: #ffe000;
}
`;

export const MenuBottom = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`;

export const Img = styled.img`
width: 200px;
object-position: cover;
`;

export const Display = styled.div`
@media screen and (max-width:760px){
    display:none;
}
`;

export const MenuFooter = styled.div`
width: 100%;
height: 80px;
border-top: 1px solid #999;
margin-bottom: 20px;
display:flex;
justify-content: space-between;
align-items:center;
@media screen and (max-width:760px){
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
`;


export const FooterTitle = styled.h1`
font-size: 18px;
color: #999;
font-weight: 300;
margin-top: 20px;
`;

export const FooterSocial =styled.div`
display:flex;
margin-top: 20px;
`;

export const Ins = styled(Instagram)`
color:#999;
width: 35px;
margin-right: 10px;

&:hover{
    transition: all .4s ease;
    color: #833AB4;
}
`;

export const Twit = styled(Twitter)`
color:#999;
width: 35px;
margin-right: 10px;

&:hover{
    transition: all .4s ease;
    color: #1DA1F2;
}
`;

export const Linke = styled(SocialLinkedin)`
color:#999;
width: 35px;
margin-right: 10px;

&:hover{
    transition: all .4s ease;
    color: #0e76a8;
}
`;