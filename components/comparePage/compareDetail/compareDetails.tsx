import React,{useState, useEffect} from 'react'

import LivingCost from 'components/landingPage/LivingCost/livingCost'
import CoronaTable from 'components/landingPage/CoronaTable/coronaTable'
import InternetTable from 'components/landingPage/InternetTable/internetTable'
import CurrencyTable from 'components/landingPage/Currency/currency'
import VisaDetails from 'components/landingPage/VisaDetails/visaDetails';
import SomeCityInfo from 'components/landingPage/SomeCityInfo/someCityInfo';
import Weather from 'components/landingPage/WeatherUpdate/weather';

import {getTime , getLivingCost , getCovidData , getInternetData , getVisaInfo, getLocalWeatherInfo } from 'utils/getData'
import { cityDetailProops , currencyType } from 'interfaces/index'
import Style from './compare.module.scss'

import currency from 'utils/currency.json' 

const CompareDetails = ({cityList}:any) => {

    const [localLivingCostFrom, setlocalLivingCostFrom] = useState<cityDetailProops | {}>({})
    const [localLivingCostTo, setlocalLivingCostTo] = useState<cityDetailProops | {}>({})
    
    const [localCovidDataFrom, setlocalCovidDataFrom] = useState<cityDetailProops | {}>({})
    const [localCovidDataTo, setlocalCovidDataTo] = useState<cityDetailProops | {}>({})
    
    const [localInternetDataFrom, setlocalInternetDataFrom] = useState<cityDetailProops | {}>({})
    const [localInternetDataTo, setlocalInternetDataTo] = useState<cityDetailProops | {}>({})
    
    const [localVisaInfoFrom, setLocalVisaInfoFrom] = useState<cityDetailProops | {}>({})
    const [localVisaInfoTo, setLocalVisaInfoTo] = useState<cityDetailProops | {}>({})
    
    const [localWeatherInfoFrom, setLocalWeatherInfoFrom] = useState<cityDetailProops | {}>({})
    const [localWeatherInfoTo, setLocalWeatherInfoTo] = useState<cityDetailProops | {}>({})


    useEffect(() => {

        cityList && getLivingCost(cityList.fromCity.city, cityList.fromCity.country)
        .then((res:any) => setlocalLivingCostFrom(res)) 
        cityList && getLivingCost(cityList.toCity.city, cityList.toCity.country)
        .then((res:any) => setlocalLivingCostTo(res)) 

        cityList && getCovidData(cityList.fromCity.country, cityList.fromCity.iso2)
        .then((res:any) => setlocalCovidDataFrom(res)) 
        cityList && getCovidData(cityList.toCity.country, cityList.toCity.iso2)
        .then((res:any) => setlocalCovidDataTo(res)) 

        cityList && getInternetData(cityList.fromCity.city , cityList.fromCity.country )
        .then((res:any) => setlocalInternetDataFrom(res)) 
        cityList && getInternetData(cityList.toCity.city , cityList.toCity.country )
        .then((res:any) => setlocalInternetDataTo(res)) 

        cityList && getVisaInfo(cityList.fromCity.city , cityList.fromCity.country )
        .then((res:any) => setLocalVisaInfoFrom(res)) 
        cityList && getVisaInfo(cityList.toCity.city , cityList.toCity.country )
        .then((res:any) => setLocalVisaInfoTo(res)) 

        cityList && getLocalWeatherInfo(cityList.fromCity.city , cityList.fromCity.id , cityList.fromCity.lat.$numberDecimal , cityList.fromCity.lng.$numberDecimal)
        .then((res:any) => setLocalWeatherInfoFrom(res)) 
        cityList && getLocalWeatherInfo(cityList.toCity.city , cityList.toCity.id , cityList.toCity.lat.$numberDecimal , cityList.toCity.lng.$numberDecimal)
        .then((res:any) => setLocalWeatherInfoTo(res)) 

        

    }, [cityList])
    
    let currencySheet : currencyType = currency
    let localCurrercyFromFinder  = null;
    let localCurrercyFrom  = {name:'', rate:0,currencyCode:''};
    let localCurrercyToFinder = null; 
    let localCurrercyTo = {name:'', rate:0,currencyCode:''};

    localCurrercyFromFinder = currencySheet[cityList.fromCity.currency as keyof currencyType]

    localCurrercyToFinder = currencySheet[cityList.toCity.currency as keyof currencyType]


        localCurrercyFrom.name = localCurrercyFromFinder.name
        localCurrercyFrom.rate = localCurrercyFromFinder.rate
        localCurrercyFrom.currencyCode = cityList.fromCity.currency
        
        localCurrercyTo.name = localCurrercyToFinder.name
        localCurrercyTo.rate = localCurrercyToFinder.rate
        localCurrercyTo.currencyCode = cityList.toCity.currency
    

    return ( 
        <div className={Style.compareHolder} >
            <div className={Style.infoHolder} >
                <LivingCost localLivingCost={localLivingCostFrom} />
                <LivingCost localLivingCost={localLivingCostTo} />
            </div>
            <div className={Style.infoHolder} >
                <CoronaTable localCovidData={localCovidDataFrom} />
                <CoronaTable localCovidData={localCovidDataTo} />
            </div>
            <div className={Style.infoHolder} >
                <InternetTable localInternetData={localInternetDataFrom} />
                <InternetTable localInternetData={localInternetDataTo} />
            </div>
            <div className={Style.infoHolder} >
                <CurrencyTable localCurrercy={localCurrercyFrom} />
                <CurrencyTable localCurrercy={localCurrercyTo} />
            </div>
            <div className={Style.infoHolder} >
                <VisaDetails localVisaInfo={localVisaInfoFrom} />
                <VisaDetails localVisaInfo={localVisaInfoTo} />
            </div>
            <div className={Style.infoHolder} >
                <Weather localWeatherInfo={localWeatherInfoFrom} />
                <Weather localWeatherInfo={localWeatherInfoTo} />         
            </div>
            <div className={Style.infoHolder} >
                <SomeCityInfo cityDetails={cityList.fromCity} localCurrercy={localCurrercyFrom} />
                <SomeCityInfo cityDetails={cityList.toCity} localCurrercy={localCurrercyTo} />         
            </div>
        </div>
    )
}

export default CompareDetails
