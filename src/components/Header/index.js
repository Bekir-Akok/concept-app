import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import logo1 from '../../img/logo-1.png';
import {Link} from 'react-router-dom';
import {
    Header,
    Logo,
    MenuLi,
    MenuUl,
    DropDownMenu,
    Button,
    MenuBar,
    Link1,
    Icons,
    NavMenu,
    CloseIcon,
    Flex,
    Color,
    Container,
    DropLogo,
    MenuUln,
    MenuLin,
    Linkn,
    MenuUln1,
    MenuLin1,
    Linkn1,
    MenuBottom,
    Img,
    Line,
    Display,
    FooterTitle,
    FooterSocial,
    Ins,
    Twit,
    Linke,
    MenuFooter
} from './style';




const Menu = () => {

window.onscroll = () => {transparent()};

function transparent(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
       return setHead(true);
    }else{
        return setHead(false); 
    }
}

    const [click, setClick] = useState(false);
    const [head, setHead] = useState(false);

    const handleClick = () => setClick(!click)

    useEffect(() => {
        setHead();
    }, [head])

    return (
        <Header>
             <Link to="/"><Logo src={logo} /></Link>
            <DropDownMenu>
                <MenuUl head={head}>
                    <Link to="/menu"><MenuLi><Link1>Our Work</Link1></MenuLi></Link>
                    <Link to="/service"><MenuLi><Link1>Our Service</Link1></MenuLi></Link>
                    <Link to="/menu"><MenuLi><Link1>About us</Link1></MenuLi></Link>
                    <Link to="/menu"><MenuLi><Link1>News & Insights</Link1></MenuLi></Link>
                </MenuUl>
                <Link to="/contact"><Button primary >CONTACT US</Button></Link>
                <Icons onClick={handleClick}><MenuBar head={head}/></Icons>
            </DropDownMenu>
            <NavMenu click={click} >
                <Color/>
                <Container>
                    <Flex>
                    <Link to="/"><DropLogo src={logo1} /></Link>
                    <CloseIcon onClick={handleClick} />
                    </Flex>
                    <MenuUln>
                        <Link to="/menu"><MenuLin><Linkn>Our Work</Linkn></MenuLin></Link>
                        <Link to="/service"><MenuLin><Linkn>Our Service</Linkn></MenuLin></Link>
                        <Link to="/menu"><MenuLin><Linkn>About us</Linkn></MenuLin></Link>
                        <Link to="/service"><MenuLin><Linkn>News & Insights</Linkn></MenuLin></Link>
                        <Link to="/menu"><MenuLin><Linkn>Contact</Linkn></MenuLin></Link>
                    </MenuUln>
                    <Line/>
                    <MenuBottom>
                        <MenuUln1>
                            <Link to="/menu"><MenuLin1><Linkn1>Careers – Hiring!</Linkn1></MenuLin1></Link>
                            <Link to="/service"><MenuLin1><Linkn1>Free Design & UX Audit</Linkn1></MenuLin1></Link>
                            <Link to="/menu"><MenuLin1><Linkn1>Headless eCommerce</Linkn1></MenuLin1></Link>
                            <Link to="/service"><MenuLin1><Linkn1>Charity partnership</Linkn1></MenuLin1></Link>
                            <Link to="/menu"><MenuLin1><Linkn1>Our brand</Linkn1></MenuLin1></Link>
                        </MenuUln1>
                        <Display>
                            <MenuUln1>
                                <MenuLin1><Linkn1>Platforms we use:</Linkn1></MenuLin1>
                                <MenuLin1><Img src="https://www.blubolt.com/wp-content/uploads/2019/05/shopify-plus.png" ></Img></MenuLin1>
                                <MenuLin1><Img src="https://www.blubolt.com/wp-content/uploads/2019/05/blucommerce.png"></Img></MenuLin1>
                                <MenuLin1><Linkn1>Proudly supporting:</Linkn1></MenuLin1>
                                <MenuLin1><Img src="https://www.blubolt.com/wp-content/uploads/2019/04/main-logo-to-use-teal-for-web-no-strap@3x.png"></Img></MenuLin1>
                            </MenuUln1>
                        </Display>
                    </MenuBottom>
                    <MenuFooter>
                        <FooterTitle>BePin Desing</FooterTitle>
                        <FooterSocial>
                            <Ins />
                            <Twit/>
                            <Linke/>
                        </FooterSocial>
                    </MenuFooter>
                </Container>
            </NavMenu>
        </Header>
    )
}

export default Menu
