import React from 'react'
import Style from './info.module.scss'
import { UilMapPin, UilEuroCircle, UilMap, UilBuilding } from '@iconscout/react-unicons'

const SomeCityInfo = ({cityDetails , localCurrercy }:any) => {


    return (
        <div className={Style.holder} >
            <div className={Style.title} >
                Living In {cityDetails.city}
            </div>

            <div className={Style.infoHolder} >
                <p>
                    {`  Are you considering living and working in ${cityDetails.city}?
                        Here's all you need to know to get started as a digital nomad in ${cityDetails.city}.
                        Everything from the cost of living and internet speeds to where to stay and coworking spaces is covered.
                        Read the commonly asked questions about living in ${cityDetails.city} below to see whether it's a suitable fit for you. `}
                </p>
                
                <div className={Style.details}> 

                    <div className={Style.location}>
                        <h3> <UilMapPin /> {`Where is ${cityDetails.city}, ${cityDetails.country}?`}</h3>
                        <p>
                            {`
                                ${cityDetails.city} is a place in ${cityDetails.country} with a population of ${cityDetails.population} people.
                                ${cityDetails.city} can be found in the state/province of ${cityDetails.admin_name}, at the following coordinates: llatitude ${cityDetails.lat.$numberDecimal}, longitude ${cityDetails.lng.$numberDecimal}.
                            `}
                        </p>
                        <p>
                            { cityDetails.monthlyCostOfLiving && `The average cost of living in ${cityDetails.city}, ${cityDetails.country} is $${cityDetails.monthlyCostOfLiving} per month. More or less this amount of money needed to cover basic expenses such as housing, food, taxes, and healthcare in a certain place and time period.`}
                        </p>
                    </div>

                    <div className={Style.cost}>
                        <h3> <UilBuilding/> Is the {cityDetails.city}, {cityDetails.country} is good place to live?</h3>
                        <p>
                            { (cityDetails.co2EmissionIndex && cityDetails.healthCareIndex) && `
                                The emission rate of Carbon dioxide is ${cityDetails.co2EmissionIndex.$numberDecimal}. The pollution index is ${cityDetails.pollutionIndex.$numberDecimal}
                                And so the heath care rate is close to ${cityDetails.healthCareIndex.$numberDecimal}.
                            `}
                        </p>

                        { (cityDetails.crimeIndex && cityDetails.safetyIndex) && 
                        <p>
                            Crime index here is {cityDetails.crimeIndex.$numberDecimal}. So the safety Index in this city is {cityDetails.safetyIndex.$numberDecimal}.
                            Now you can easily decided weather this city is good for you or not.
                        </p>
                        }

                        { (cityDetails.trafficIndex && cityDetails.trafficTimeIndexMinutes) &&    
                        <p>
                            Traffic is pretty much good here.Traffic index here is {cityDetails.trafficIndex.$numberDecimal}.
                            And also traffic Time Index Minutes here is {cityDetails.trafficTimeIndexMinutes.$numberDecimal}.
                        </p>
                        }

                    </div>

                    <div className={Style.place}>
                        <h3> <UilMap/> {`Where is the best place to stay in ${cityDetails.city}, ${cityDetails.country}?`}</h3>
                        <p>
                            {`
                                You can find the best places to stay in ${cityDetails.city}, ${cityDetails.country} as well as the best ${cityDetails.city} neighborhoods on our map above.
                                If you are looking for ${cityDetails.city} hotels, try clicking the links to each pin on the map.
                            `}
                        </p>
                    </div>

                    <div className={Style.currency}>
                        <h3> <UilEuroCircle/> {`What is the currency that is used in ${cityDetails.city}, ${cityDetails.country}?`}</h3>
                        <p>
                            {`
                                The currency that is used in ${cityDetails.city}, ${cityDetails.country} is the ${localCurrercy.name}.
                            `}
                        </p>
                        <p>
                            {`
                                The currency code of ${cityDetails.country} is ${localCurrercy.currencyCode}. 
                                You wil get ${localCurrercy.rate} ${localCurrercy.currencyCode} in exchange of one dollar.
                            `}
                        </p>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default SomeCityInfo
