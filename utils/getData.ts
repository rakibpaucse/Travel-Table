
export const getTime = async (lat='' , lng='') => {
    
    const localTime = await fetch(`https://europe-west3-nomadtools-8ee82.cloudfunctions.net/api/timezone/lat=${lat}&lng=${lng}`)
    return localTime.json()
}


export const getLivingCost = async (city='' , country='') => {
    
    let retrunData = null  
    
        await fetch(`https://europe-west3-nomadtools-8ee82.cloudfunctions.net/api/costOfLivingData/${city}-${country}`)
        .then((response) => response.json() )
        .then((data) => {
                
                let cityData = data[0]
                cityData ? retrunData = 
                    { 
                        'city' : cityData.city ,
                        'bottleOfWine' : cityData.bottleOfWine ,
                        'beer' : cityData.beer ,
                        'cigarettes' : cityData.cigarettes ,
                        'Fibre' : cityData.uncappedFibre,
                        'monthlyCostOfLiving' : cityData.monthlyCostOfLiving ,
                        'oneBedroomApartment' : cityData.oneBedroomApartment, 
                        'perKmTaxiRent' : cityData.taxi1km, 
                        'restaurantMeal' : cityData.restaurantMeal
                    }  
                : retrunData = {city , error:true}
            })

    return retrunData
}


export const getCovidData = async (country="" , cityCode='') => {
    
    let retrunData = null  
    
        await fetch(`https://europe-west3-nomadtools-8ee82.cloudfunctions.net/api/safeScore/getSafeScoreDataFromCountries` ,
         { 
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:`{"countries":["${cityCode}"]}` 
        })
        .then((response) => response.json() )
        .then((data) => { 
        
            let cityData = data[0]
                cityData ? retrunData = cityData : retrunData = { country , message: data.message , error:true}
            })

    return retrunData
}

export const getInternetData = async (city="", country="") => {
    
    let retrunData = null  
    
        await fetch(`https://europe-west3-nomadtools-8ee82.cloudfunctions.net/api/internetSpeeds/${country}`)
        .then((response) => response.json() )
        .then((data) => {
        
            let cityData = data
            cityData.city = city
                cityData ? retrunData = cityData : retrunData = { city , ErrorMessage: data.error , error:true}
            })

    return retrunData
}

export const getVisaInfo = async (city="", country="") => {
    
    let retrunData = null  
    
        await fetch(`https://europe-west3-nomadtools-8ee82.cloudfunctions.net/api/visas/countrySummary/${country}`)
        .then((response) => response.json() )
        .then((data) => {

            let cityData = data
            cityData.city = city
            cityData.country = country
                cityData ? retrunData = cityData : 
                retrunData = { city , ErrorMessage: data.error , error:true}
            })
            
    return retrunData
}

export const getLocalWeatherInfo = async (city="", id="" , lat='' , lng='') => {
    
    let retrunData = null  
    
        await fetch(`https://europe-west3-nomadtools-8ee82.cloudfunctions.net/api/monthlyWeatherData/${id}-${lat}-${lng}`)
        .then((response) => response.json() )
        .then((data) => {

            let cityData = data
            cityData.city = city
            
                cityData ? retrunData = cityData : 
                retrunData = { city , ErrorMessage: data.error , error:true}
            })
            
    return retrunData
}