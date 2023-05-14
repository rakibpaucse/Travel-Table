import React from 'react'
import Layout from 'components/landingPage/Layout/Layout';
import { useRouter } from 'next/router'
import SingleCity from 'components/landingPage/SingleCity/single';


const City = () => {
    const router = useRouter();
    const cityAndCountry = router.query 

    const capitalize = (string:any) => {
        return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
    }

    return (
        <Layout title={`${capitalize(cityAndCountry.city)} | ${cityAndCountry.country}`} > 
           <SingleCity city={cityAndCountry.city} country={cityAndCountry.country} />
        </Layout>
    )
}

export default City
