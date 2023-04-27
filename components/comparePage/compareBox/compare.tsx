import React,{ useState } from 'react'
import { useRouter } from 'next/router'
import Style from './compare.module.scss'
import { UilTelegramAlt  } from '@iconscout/react-unicons'
import SearchTheCity from 'utils/searchBox/search';
import { useGetComparedCityQuery } from 'store/citySlice/cityApi';
import CompareDetails from '../compareDetail/compareDetails';



const Compare = () => {

    const router = useRouter()   
    const { routedFrom , routedTo } = router.query 

    const [fromValue, setFromValue] = useState({city:'', country:''})
    const [toValue, setToValue] = useState({city:'', country:''})
    const [fetchArg, setFetchArg] = useState({from: routedFrom ? routedFrom : '', to: routedTo ? routedTo : ''})

    const { data:cityList , isLoading , isFetching  ,  isSuccess , isError } = useGetComparedCityQuery(fetchArg , {refetchOnMountOrArgChange:true} )


    const flyHandler = () => {
        let from = fromValue.city
        let to = toValue.city

        setFetchArg({from , to})
    }

    return (
        <div className={Style.compareHolder} >

            <div className={Style.title} >
                Compare The Whole World Among Themselves.
            </div>

            <div className={Style.formHolder} >  

                <div className={Style.form} >

                    <div className={`${Style.startingHolder} ${Style.holder}`}>
                        <div className={`${Style.starting} ${Style.halfForm}`}>
                            <h3> From Where You want To Start </h3>
                            <SearchTheCity placeHolder='Dhaka' setValue={setFromValue} />
                        </div>
                    </div>

                    <div className={`${Style.endingHolder} ${Style.holder}`}>
                        <div className={`${Style.ending} ${Style.halfForm}`}>           
                            <h3> To Where You want To Go </h3>
                            <SearchTheCity placeHolder='Berlin' setValue={setToValue} />
                        </div>
                    </div>
                </div>

                <div className={Style.flyButton} onClick={ flyHandler } >
                    Lets Fly  <UilTelegramAlt />
                </div>

            </div>

            <div className={Style.compareHolderinfo} >
                { (cityList?.fromCity?.city) && <CompareDetails  cityList={cityList} /> }
            </div>

        </div>
    )
}

export default Compare
