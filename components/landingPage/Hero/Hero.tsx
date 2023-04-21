import React from 'react'
import Image from 'next/image'
import Style from './Hero.module.scss'
import HeroUpImage from 'assets/hero/hero-up.png'
import HeroDownImage from 'assets/hero/hero-back.png'
import HeroImage from 'assets/hero/heroImage-1.svg'

const Hero = () => {
    return (
        <div className={Style.container}>
            <Image className={Style.upImage} src={HeroUpImage} alt='Image of a Plane' />
            <Image className={Style.downImage} src={HeroDownImage} alt='Image of some Buildings' />
            
            <div className={Style.heroSection}>

                <div className={Style.left}>

                    <div className={Style.title}> 
                        <span>Lets</span> Explore 
                         <span style={{visibility:'hidden'}}> . </span> The <span>World</span>  
                    <div className={Style.slogan}> Adventure awaits with us </div>
                    </div>
                </div>

                <div className={Style.right}>
                    <Image className={Style.HeroImage} src={HeroImage} alt='Image of World Travel' />
                </div>
            </div>

        </div>
    )
}
 
export default Hero
