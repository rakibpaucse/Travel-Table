import React from 'react'
import Style from './visaDetails.module.scss'
import { UilTelegramAlt, UilPlaneDeparture ,UilTelegram, UilTicket, UilEnvelopeStar,UilFileBookmarkAlt  , UilCheckCircle   } from '@iconscout/react-unicons'
import { camelCaseToNormal , makePlain } from 'utils/helpers'


const VisaDetails = ({localVisaInfo}:any) => {

    const icons = [
        <UilFileBookmarkAlt  />,
        <UilTelegram />,
        <UilCheckCircle  />,
        <UilPlaneDeparture />,
        <UilTicket />,
        <UilEnvelopeStar  />
    ]

    return (
        <div className={Style.visaInfoHolder} >
                <div className={Style.title} > 
                    <UilTelegramAlt /> Visa Requiments Summary {localVisaInfo.city}
                </div>
               
                <div className={Style.details} >
                    {
                        localVisaInfo.error ? <div> Regarding Information Is Not Available </div> :
                        Object.keys(localVisaInfo).map( (info , i) => 
                            localVisaInfo[info].count > 0 &&
                            <div key={i} > {icons[i]} 
                                { camelCaseToNormal(info) } : { localVisaInfo[info].count } Countries. Example As { makePlain(localVisaInfo[info].examples) }
                            </div>
                            )
                    }
                </div>

                <div className={Style.visaButton} >
                    <a href="https://www.ivisa.com/?utm_source=traveltable" target="_blank">
                        Get <span> {localVisaInfo.country} Visa Online... </span>
                    </a>
                </div>
              
        </div>
    )
}

export default VisaDetails
