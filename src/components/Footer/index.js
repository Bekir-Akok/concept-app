import React from 'react';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import {
    Footer,
    FooterDown,
    FooterImg,
    FooterInfo,
    FooterLogo,
    FooterP,
    FooterTitle,
    FooterUp,
    Button,
    Line,
    FooterLast,
    Up,
    CopyRight
} from './style.js'


const index = () => {
    return (
        <Footer>
            <FooterUp>
                <FooterImg src="https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/logo-bowelcanuk.png" />
                <FooterTitle>We’re on a mission to raise awareness.</FooterTitle>
                <Link to="/contact"><Button>LEARN MORE</Button></Link>
            </FooterUp>
            <FooterDown>
                <FooterLogo src={logo} />
                <FooterInfo>
                    <FooterP>Get our newsletter</FooterP>
                    <Line/>
                    <FooterP>Adress lorem ipsum lorem</FooterP>
                    <Line/>
                    <FooterP>12365485236</FooterP>
                    <Line/>
                    <FooterP>info@bepin-design.com</FooterP>
                    <Line/>
                </FooterInfo>
            </FooterDown>
            <FooterLast>
                    <CopyRight>No © All rights deserverd. </CopyRight>
                    <a href="#head"><Up/></a>
            </FooterLast>
        </Footer>
    )
}

export default index
