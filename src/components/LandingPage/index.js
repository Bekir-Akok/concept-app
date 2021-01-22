import React from 'react';
import Header from '../Header/index';
import {Link} from 'react-router-dom';
import {
    Background,
    Button,
    Buttons,
    Color,
    Container,
    Content,
    LandingInfo,
    Title,
} from './style' ;

const LandingPage = () => {
    return (
        <Container>
            <Color/>
            <span id="head"></span>
            <Background>
                <Header/>
                <LandingInfo>
                    <Title>WE'RE BEPİN DESİGN</Title>
                    <Content>We design, build and optimise beautiful web solutions to help your brand grow faster.</Content>
                    <Buttons>
                    <Link to="/menu"><Button primary >OUR WORK</Button></Link>
                    <Link to="/service"><Button>OUR SERVICES</Button></Link>
                    </Buttons>
                </LandingInfo>
            </Background>
        </Container>
    )
}

export default LandingPage
