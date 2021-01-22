import React from 'react';
import {Link} from 'react-router-dom';
import {
    Cards,
    CardMiniTitle,
    CardTitle,
    CardTitles,
    Card,
    CardFlex,
    CardImg,
    CardInt,
    Button,
    Buttons
} from './style.js';


const index = () => {
    return (
        <Cards>
            <CardMiniTitle>OUR SERVICES</CardMiniTitle>
            <CardTitle>How we can help you.</CardTitle>
            <CardFlex>
                <Card>
                    <CardImg src="https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Services/services-banner1.jpg"/>
                    <CardInt color>01</CardInt>
                    <CardTitles hover>Shopify Builds.</CardTitles>
                </Card>
                <Card>
                    <CardImg src="https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Services/services-banner2.jpg"/>
                    <CardInt >02</CardInt>
                    <CardTitles >Shopify Design & UX.</CardTitles>
                </Card>
                <Card>
                    <CardImg src="https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Services/services-banner3.jpg"/>
                    <CardInt color>03</CardInt>
                    <CardTitles hover>Shopify Optimisation.</CardTitles>
                </Card>
                <Card>
                    <CardImg src="https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Services/service5.jpg"/>
                    <CardInt >04</CardInt>
                    <CardTitles >Shopify Apps.</CardTitles>
                </Card>
            </CardFlex>
            <Buttons>
                <Link to="/service"><Button>VIEW OUR SERVICES</Button></Link>
            </Buttons>
        </Cards>
    )
}

export default index
