import React from 'react';
import {Link} from 'react-router-dom';
import {
    Brands,
    BrandsTitle,
    Flex,
    BrandImg,
    Button
} from './style.js'

const index = () => {

    const BrandArray = [
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Work/Logos/AlexaChung.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Homepage/Logos/2x/Seasalt-Colour.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Work/Logos/PipersFarm.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Work/Logos/SourceBMX.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Work/Logos/neverfullydressed.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Work/Logos/Garden-Trading.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Homepage/Logos/2x/Adnams-Colour.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Homepage/Logos/2x/Frugi-Colour.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Work/Logos/Linley.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Homepage/Logos/2x/RouteOne-Colour.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Work/Logos/Kitchen-Craft.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Work/Logos/Sahara.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Homepage/Logos/2x/Hush-Colour.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Work/Logos/Casart.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Homepage/Logos/2x/Robert-Colour.png"},
        {src:"https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/Homepage/Logos/2x/Teapigs-Colour.png"},
    ] 


    return (
       <Brands>
            <BrandsTitle>We help these top brands.</BrandsTitle>
            <Flex>
                {BrandArray.map((brand, i) => (
                    <BrandImg src={brand.src} key={i} />
                 ) )}
            </Flex>
            <Link to="/menu" ><Button>VIEW OUR WORKS</Button></Link>
       </Brands>
    )
}

export default index
