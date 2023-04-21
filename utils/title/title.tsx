import React from 'react'
import Image from 'next/image'
import Style from './title.module.scss'
import BottomTitle from '../../assets/bottomTitle.png'
import {messageType} from '../../interfaces/index'

const Title = ({titleMsg}:messageType) => {
    return (
        <div className={Style.titleHolder} >
            <div className={Style.title} >
                {titleMsg.mainPart} <span> {titleMsg.restPart} </span>
            </div>
            <Image className={Style.upImage} src={BottomTitle} alt='Image of a Plane' />

        </div>
    ) 
} 

export default Title
