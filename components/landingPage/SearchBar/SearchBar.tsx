import React,{ useState , useEffect } from 'react'
import { useGetCityByNameQuery } from 'store/citySlice/cityApi'
import Style from './SearchBox.module.scss'
import { UilSpinner,UilTimes, UilSearch, UilArrowUpLeft , UilBullseye  } from '@iconscout/react-unicons'
import Link from 'next/link'


function useDebounce(value:string, delay:number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}


const SearchBar = ({rightPadding=0 , setClicked}:any) => {

    const [theWord, setTheWord] = useState(''); 
    const [seleted, setSelected] = useState(false); 
    const [showSugg, setShowSugg] = useState(true); 
    const [seletedItem, setSelectedItem] = useState({city:'',country:''}); 
    const [keyword, setKeyword] = useState(''); 
    const debouncedSearchTerm = useDebounce(keyword, 800);

    const { data:cityList , isLoading , isFetching  ,  isSuccess , isError } = useGetCityByNameQuery(theWord , { skip: !(theWord.length) } )

    useEffect(() => {
        if (debouncedSearchTerm) {  
            if (keyword) {
                setTheWord(keyword);
                setSelected(false)
            } 
        }
    }, [debouncedSearchTerm ]);

    const handleCrossBotton = () => {
        setShowSugg(false)
        setKeyword('')
    }

    return (
        <>          

            <div className={Style.search__container} style={{padding:`0rem ${rightPadding}rem`}}  >
                <input  className={Style.search__input} type="text" 
                        onChange={(e) => { setKeyword(e.target.value) ; setShowSugg(true)}}
                        value={seleted ? seletedItem.city+','+ seletedItem.country : keyword}
                        placeholder="Search Country/City" 
                />

                <div className={Style.search__control} > 
                    { keyword ? 
                    <div onClick={handleCrossBotton} ><UilTimes size='25' /></div>  :
                    <div onClick={e => setShowSugg(true)} ><UilSearch size='25'/></div>  }
                </div>

                        { isFetching ? 
                                <div className={Style.ulHolder} >  
                                    <UilSpinner />  
                                </div> :
                                <> 
                                    {
                                        (keyword.length > 0 && !seleted && showSugg ) ?
                                        <div className={Style.ulHolder}  > 
                                    
                                            <div className={Style.suggHolder} >
                                                {
                                                    cityList?.length > 0  ?

                                                    cityList.map( (singleCity:any ) => 
                                                        <Link href={`/${singleCity.country}/${singleCity.cityLower}`}
                                                            key={singleCity.id} className={Style.sugg} 
                                                            onClick={(e) => {setSelected(true); setSelectedItem(singleCity); setClicked(false) }} >
                                                            <div> <span className={Style.iconHolder}><UilBullseye size='18' /></span> {`${singleCity.city} , ${singleCity.country}`}  </div>
                                                            <div> <UilArrowUpLeft  /> </div>
                                                        </Link>
                                                    ) 
                                                        :
                                                        <div className={Style.sugg} style={{textAlign:'center',background:'#ad4551', color:'white'}} >
                                                            No City Found. 
                                                        </div>
                                                }   
                                            </div>
                                    
                                        </div>  
                                        : null
                                    }
                                </>
  
                        }
            </div>


        </>
    )
}

export default SearchBar
