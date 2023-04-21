import React from 'react'
import Layout from 'components/landingPage/Layout/Layout';
import { useRouter } from 'next/router'
import SingleCity from 'components/landingPage/SingleCity/single';


const City = () => {
    const router = useRouter();
    const cityAndCountry = router.query

    return (
        <Layout title="Travel_Table | Adventure awaits with us"> 
           <SingleCity city={cityAndCountry.city} country={cityAndCountry.country} />
        </Layout>
    )
}

export default City
