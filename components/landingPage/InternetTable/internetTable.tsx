import React from 'react'
import Style from './internetTable.module.scss'
import { cityDetailProops } from 'interfaces/index'
import { UilDashboard, UilTachometerFast  } from '@iconscout/react-unicons'

const InternetTable = ({localInternetData}:any) => {
    
    return (
        <div className={Style.internetDetailsHolder}>
            <div className={Style.title}> Internet Speed of This City </div>
            <p> <UilDashboard /> {`Broadband Speed : ${ localInternetData.broadbandSpeed ? localInternetData.broadbandSpeed+` Mbps` : 'Not Found' }`} <span></span> </p>
            <p style={{marginBottom:23}} > <UilTachometerFast /> {`Mobile Speed : ${ localInternetData.mobileSpeed ? localInternetData.mobileSpeed+` Mbps` : "Not Found" }`} <span></span> </p>
        </div> 
    )
}

export default InternetTable
