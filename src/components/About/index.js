import React from 'react'
import {
    About,
    AboutSec,
    AboutMiniTitle,
    AboutTitle,
    AboutText,
    AboutFrame,
    AboutImg,
    AboutFr
} from './style.js'


const index = () => {
    return (
        <About>
            <AboutSec>
                <AboutMiniTitle>YOUR ECOMMERCE AGENCY</AboutMiniTitle>
                <AboutTitle>Our rich technical heritage, creative flair and partnership approach is what sets us apart.</AboutTitle>
                <AboutText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quam tempore nesciunt minima quo recusandae quod possimus officia numquam hic <br></br><br></br>voluptas officiis error culpa maiores atque nostrum magnam veniam voluptate esse tenetur. Beatae, ratione? Repellendus fugit excepturi, cumque eum dolorum non aspernatur officia optio repellat saepe, nisi ad dolor eligendi molestiae cum voluptatum doloremque harum dignissimos nostrum perferendis ab? Suscipit molestias eius consequatur sit ut unde nesciunt vitae atque, aut ullam, ab pariatur deserunt quos!</AboutText>
            </AboutSec>
            <AboutFrame>
                <AboutImg src="https://www.blubolt.com/wp-content/themes/blubolt-website/resources/images/pages/About/Smiliey-min.jpg"/>
                <AboutFr/>
            </AboutFrame>
        </About>
    )
}

export default index
