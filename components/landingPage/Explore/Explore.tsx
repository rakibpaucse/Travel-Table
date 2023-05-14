import Image from 'next/image'
import React,{ useState } from 'react'
import Title from 'utils/title/title'
import Style from './Explore.module.scss'
import FromTo from 'assets/fromTo-2.png'
import ExploreImg from 'assets/travelArts/99.png'
import SearchImg from 'assets/search-1.svg'
import SearchTheCity from 'utils/searchBox/search'
import Link from 'next/link'


const Explore = () => {

    const [fromValue, setFromvalue] = useState({city:''}); 
    const [toValue, setTovalue] = useState({city:''});     

    return (
        <div className={Style.container} >
            <Title titleMsg={{mainPart:'Explore', restPart:'The World'}} />

            <div className={Style.explorContainer}>

                <div className={Style.explorer}>
 
                    <div className={Style.fromTo}>

                        <div className={Style.fromToImage}>
                            <Image src={FromTo} alt='explore' />
                        </div> 

                        <div className={Style.fromBoxContainer}>
                            <div className={Style.fromBox}>
                                <p>To The City/Country</p>
                                <div className={Style.fromBoxSearch}>
                                    <SearchTheCity placeHolder='Dhaka' setValue={setFromvalue} />
                                </div>
                                
                            </div>

                            <div className={Style.fromBox}>
                                <p>From The City/Country</p>
                                <div className={Style.fromBoxSearch}>
                                    <SearchTheCity placeHolder='Berlin' setValue={setTovalue} />
                                </div>
                                
                            </div>
 
                        </div>

                    </div>

                    <div className={Style.exploreImg}>
                        <Image src={ExploreImg} alt='explore' />
                    </div>

                </div>

                <Link href={`/compare?routedFrom=${fromValue.city}&routedTo=${toValue.city}`}  className={Style.explorerBtn} style={{pointerEvents: (fromValue.city.length > 0 && fromValue.city.length > 0) ? 'auto':'none' }} >
                    <p> Lets Go </p>
                </Link>
            </div>
        </div>
    )
}

export default Explore
