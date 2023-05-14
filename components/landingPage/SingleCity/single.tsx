import React,{useState, useEffect} from 'react'
import { useGetSingleCityQuery } from 'store/citySlice/cityApi';
import CityLoader from 'utils/cityLoader';
import Error from 'utils/Error';
import {getTime , getLivingCost , getCovidData , getInternetData , getVisaInfo, getLocalWeatherInfo } from 'utils/getData';
import { currencyType , SingleCityProps , cityDetailProops } from 'interfaces/index'
import Style from './single.module.scss'
import currency from 'utils/currency.json'
import LivingCost from 'components/landingPage/LivingCost/livingCost';
import CoronaTable from 'components/landingPage/CoronaTable/coronaTable'
import InternetTable from 'components/landingPage/InternetTable/internetTable'
import CurrencyTable from 'components/landingPage/Currency/currency'
import VisaDetails from 'components/landingPage/VisaDetails/visaDetails';
import SomeCityInfo from 'components/landingPage/SomeCityInfo/someCityInfo';
import Weather from 'components/landingPage/WeatherUpdate/weather';


const SingleCity = ({ city , country } : any) => {

    const [localDetails, setlocalDetails] = useState<any>({})
    const [localLivingCost, setlocalLivingCost] = useState<any>({})
    const [localCovidData, setlocalCovidData] = useState<any>({})
    const [localInternetData, setlocalInternetData] = useState<any>({})
    const [localVisaInfo, setLocalVisaInfo] = useState<cityDetailProops | {}>({})
    const [localWeatherInfo, setLocalWeatherInfo] = useState<cityDetailProops | {}>({})

    const cityQueryName = city?.includes('-') ? city.replace('-',' ') : city
    const { data:cityDetails , isLoading , isSuccess , isError } = useGetSingleCityQuery(cityQueryName)

    useEffect(() => {

        cityDetails && getTime(cityDetails.lat.$numberDecimal, cityDetails.lng.$numberDecimal)
        .then((res) =>setlocalDetails(res)) 

        cityDetails && getLivingCost(cityDetails.city, cityDetails.country)
        .then((res:any) => setlocalLivingCost(res)) 

        cityDetails && getCovidData(cityDetails.country, cityDetails.iso2)
        .then((res:any) => setlocalCovidData(res)) 

        cityDetails && getInternetData(cityDetails.city , cityDetails.country )
        .then((res:any) => setlocalInternetData(res)) 

        cityDetails && getVisaInfo(cityDetails.city , cityDetails.country )
        .then((res:any) => setLocalVisaInfo(res)) 

        cityDetails && getLocalWeatherInfo(cityDetails.city , cityDetails.id , cityDetails.lat.$numberDecimal , cityDetails.lng.$numberDecimal)
        .then((res:any) => setLocalWeatherInfo(res)) 

    }, [cityDetails])
    

    // render content 
    let content = null; 
    let currencySheet : currencyType = currency
    let localCurrercy = {name:'', rate:0,currencyCode:''};
    let localCurrencyFinder = null 

    if (isLoading) { content = <div className={Style.loaderholder} > <CityLoader /> </div> }
    if (!isLoading && isError) { content = <Error />; }
    if (!isLoading && !isError && isSuccess && cityDetails) {  

        localCurrencyFinder = currencySheet[cityDetails.currency as keyof currencyType]

        localCurrercy.name = localCurrencyFinder.name
        localCurrercy.rate = localCurrencyFinder.rate
        localCurrercy.currencyCode = cityDetails.currency


        content =  
            <> 
                <div className={Style.contentHolder}>
                    <div style={{backgroundImage:`url(${cityDetails.image})`}} className={Style.imageHolder}>
                        <div>
                            <h1>Population: <span> {(cityDetails.population / 1000000).toFixed(2)} Millions </span></h1>
                                { localDetails && <p> Local Time: <span> { localDetails?.formatted?.split(' ')[1] } </span> </p>  }
                        </div>
                    </div>

                    <div className={Style.cityDetailsHolder}>
                        <div className={Style.livingCostHolder}>
                            { localLivingCost.city && <LivingCost localLivingCost={localLivingCost} /> }
                        </div>
                        <div className={Style.coronaHolder}>
                            { localCovidData.country && <CoronaTable localCovidData={localCovidData} /> }
                        </div> 
                        <div className={Style.internetHolder}>
                            { localInternetData.city && <InternetTable localInternetData={localInternetData} /> }
                        </div>
                        <div className={Style.currencyHolder}>
                            { localCurrercy && <CurrencyTable localCurrercy={localCurrercy} /> }
                        </div>
                    </div>

                    <div className={Style.visaDetailsHolder}> 
                        { (cityDetails && localVisaInfo) && <VisaDetails localVisaInfo={localVisaInfo} /> }
                        { localWeatherInfo && <Weather localWeatherInfo={localWeatherInfo} /> }
                        
                    </div>

                    <div>
                        { cityDetails && <SomeCityInfo cityDetails={cityDetails} localCurrercy={localCurrercy} /> }
                    </div>

                </div>
            </>

    }


    return (
        <div className={Style.container}>
            <p className={Style.country}> <span>Country:</span>  { city} </p>
            <p className={Style.city}> <span>City:</span>  { country } </p>
            {content}
        </div>
    )
}

export default SingleCity
