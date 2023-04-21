import React from 'react'
import Style from './coronaTable.module.scss'
import { cityDetailProops } from 'interfaces/index'
import { UilVirusSlash , UilCoronavirus , UilComparison, UilCreativeCommonsPd    } from '@iconscout/react-unicons'

const CoronaTable = ({localCovidData}:any) => { 
     
    return (
        <div className={Style.covidDetailsHolder}>

            <div className={Style.title}>  About Corona Virus Update Of {localCovidData.country} </div>
                {
                    localCovidData.error ? 
                    <div className={Style.error}> 
                        <p> <UilVirusSlash/> Sorry! No Exact Data Available For Current Covid Situation </p>
                        <p> <UilComparison/> We Will Update Here Immediately When It Will Be Available </p>
                    </div> : 
                    <div className={Style.dataHolder}> 
                        <p> <UilCoronavirus /> Total Cases : <span>{Number(localCovidData.total_cases).toLocaleString()}</span> </p>
                        <p> <UilComparison /> Cases Per 100k : <span>{((localCovidData.total_cases / localCovidData.population)*100000).toFixed(2)}</span> </p>
                        <p> <UilVirusSlash /> Total Deaths : <span>{Number(localCovidData.total_deaths).toLocaleString()}</span> </p>
                        <p> <UilCreativeCommonsPd  />  Deaths  Per 100k : <span>{((localCovidData.total_deaths / localCovidData.population)*100000).toFixed(2)}</span> </p>
                        <p style={{margin:'25px 5px'}} > Current Status is {localCovidData.country_status} for {localCovidData.country} </p>
                    </div>
                }
        </div>
    )
}
 
export default CoronaTable
