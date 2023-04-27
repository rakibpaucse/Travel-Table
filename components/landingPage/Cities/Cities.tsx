import Link from 'next/link'
import Image from 'next/image'
import React, { useState , useEffect} from 'react'
import { useGetCitiesQuery , useGetCitiesByPostMutation } from 'store/citySlice/cityApi'
import Error from 'utils/Error'
import Loader from 'utils/loader'
import {getRandomImg} from 'utils/helpers'
import Title from 'utils/title/title'
import Style from './Cities.module.scss' 
import Loading from 'assets/loading.gif'
import FilterOptions from '../FilterSection/filter'

interface ICities {
    id: number;
    name: string;
    value: string;
  }

const Cities = () => {

    const defaultFilterOption =     
    {
        population: {
            low : 13000,
            high : 35770000
        },
        internet: {
            low : 3,
            high : 128
        },
        crimeIndex: {
            low : 14,
            high : 85
        },
        monthlyCostOfLiving: {
            low : 550,
            high : 6850
        },

        safetyIndex: {
            low : 16,
            high : 87
        } 
    }

    const [pageNo, setPageNo] = useState(0)
    const [ allCities , setAllCities ] = useState<ICities[]>([]);
    const [ backupOfAllCities , setBackupOfAllCities ] = useState<any[]>([]);
    const [searchItem , setSearchItem] = useState('')
    const [filterOptions, setFilterOptions] = useState( defaultFilterOption )

    // const { data:newCities , isLoading , isSuccess , isError } = useGetCitiesQuery({pageNo,filterOptions} , { pollingInterval:0 , refetchOnMountOrArgChange : true })
    // const [ setfilters , { data:newFiltedCities , isLoading:isFiltedLoading , isSuccess:isFiltedSuccess , isError:isFiltedError }] = useGetCitiesByPostMutation()
    const [ setfilters , { data:newCities , isLoading , isSuccess , isError }] = useGetCitiesByPostMutation()
    
    
    useEffect(() => {
        if( pageNo === 0 || JSON.stringify(defaultFilterOption) !== JSON.stringify(filterOptions) ){
            setAllCities([newCities].filter(Boolean))
            setBackupOfAllCities([newCities].filter(Boolean))
        }else{
            setAllCities([...allCities , newCities].filter(Boolean))
            setBackupOfAllCities([...allCities , newCities].filter(Boolean))
        }
        
    }, [newCities])

    useEffect(() => {
        let pageNo = 0
        setfilters({filterOptions, pageNo})
    }, [ filterOptions ])

    useEffect(() => {
        setfilters({filterOptions, pageNo})
    }, [ pageNo ])

    useEffect(() => {
        if( searchItem !== '' ){
            let searchedCities = Array.from(new Set(backupOfAllCities.flat()
            .map((item: any ) => item)))
            ?.filter( (city:any , index) => city.cityLower.includes(searchItem) )

            setAllCities([...searchedCities])
        }else{
            setAllCities(backupOfAllCities)
        }
       
    }, [ searchItem ])
   
    let content = null; 

    if (isLoading) {
        content = ( <div className={Style.right} > { <><Loader/><Loader/><Loader/></>  }</div> );
    }

    if (!isLoading && isError) { content = <Error />; }

    if (!isLoading && !isError && isSuccess ) {
        
        
        content =    
                <>
                    <div className={Style.right}>
                        {
                            Array.from(new Set(allCities.flat().map((item: any ) => item)))?.map( (city:any , index) => 
                            // content = allCities.flat()?.map( (city:any , index) => 
                                <div key={index} 
                                    className={Style.city}
                                    style={{backgroundImage: city?.imageThumb ? 
                                            `url(${city?.imageThumb})` : getRandomImg() }} >
                                    <Link href={`/${city?.country}/${city?.cityLower}`} className={Style.cityLink} >
                                        <div>
                                            <h2>{city?.city}</h2>
                                            <p>{city?.country}</p>
                                        </div>
                                    </Link> 
                                </div>
                            )
                        }
                    </div>
 
                    {/* {
                        !isSuccess && <div className={Style.right} > <Loader/><Loader/><Loader/></div>
                    } */}

                    <div className={Style.rightButton}>
                        { backupOfAllCities[0]?.length ? 
                            // <Image width='70' height='70' src={Loading} alt='Loading' /> :
                                newCities.length < 48 ?
                                    <div className={Style.noMore}> No More Cities </div> :
                                    <button onClick={() => setPageNo( prev => prev+=1 )} > Load More </button> 
                            : <Error msg='No Cities Found' />  
                        }
                    </div>
                </>

    }

  
    return (
        <div className={Style.mainContainer}>
            <Title titleMsg={{mainPart:'Explore', restPart:'Some City'}} />

            <div className={Style.container}>
                <div className={Style.left}>
                    <FilterOptions filterOptions={filterOptions} setFilterOptions={setFilterOptions} setSearchItem={setSearchItem} defaultFilterOption={defaultFilterOption} />
                </div>
                <div className={Style.rightHolder}>
                        { content }
                </div> 
            </div>
        </div>
    )
}

export default Cities
