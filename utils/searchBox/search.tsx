import React,{ useState , useEffect } from 'react'
import Image from 'next/image'
import { useGetCityByNameQuery } from 'store/citySlice/cityApi'
import { UilSpinner, UilTimes } from '@iconscout/react-unicons'
import Style from './search.module.scss'
import SearchImg from 'assets/search-1.svg'


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


const SearchTheCity = ({placeHolder='' , setValue}:any) => {

    const [theWord, setTheWord] = useState(''); 
    const [seleted, setSelected] = useState(false); 
    const [showSugg, setShowSugg] = useState(false);
    const [seletedItem, setSelectedItem] = useState({city:'',country:''}); 
    const [keyword, setKeyword] = useState(''); 
    const debouncedSearchTerm = useDebounce(keyword, 800);

    const { data:cityList , isLoading , isFetching  ,  isSuccess , isError } = useGetCityByNameQuery(theWord , { skip: !(theWord.length) } )

    useEffect(() => {
        if (debouncedSearchTerm) {  
            if (keyword) {
                setTheWord(keyword);
                setSelected(false) 
                setShowSugg(true)
            } 
        }
    }, [debouncedSearchTerm ]);

    useEffect( () => {
        setValue(seletedItem)
    } , [seletedItem])
    
    const handleCrossBotton = () => {
        setShowSugg(false)
        setKeyword('')
    }


    return (
        <div className={Style.searchBoxHolder} >
            <div className={Style.inputHolder} >
                {/* <input type="text" name="" id="" 
                    value={seleted ? seletedItem.city+','+ seletedItem.country : keyword} 
                    placeholder={placeHolder}  onChange={(e) => setKeyword(e.target.value)}
                />  */} 

                <div className={Style.fromBoxSearch}>
                    <div className={Style.searchBoxImage} ><Image src={SearchImg} alt='search' /></div>
                    <input type="text" name="" id="" 
                        value={seleted ? seletedItem.city+','+ seletedItem.country : keyword}
                        placeholder={placeHolder}  
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    { keyword && <div onClick={handleCrossBotton} className={Style.crossBoxSearch}> <UilTimes/> </div> }    
                </div>

            </div>

        { isFetching ? 
                <div className={Style.ulHolder} >  
                    <UilSpinner  /> 
                </div> :
                    (showSugg) ? 
                        <div className={Style.ulHolder} > 
                            {
                                (keyword.length > 0 && !seleted)&&
                                <div className={Style.suggHolder} >
                                    {
                                        cityList?.length > 0  ?
                                        cityList.map( (singleCity:any ) => 
                                            <div key={singleCity.id} className={Style.sugg} 
                                                onClick={(e) => {setSelected(true); setSelectedItem(singleCity)}} >
                                                {`${singleCity.city} , ${singleCity.country}`} 
                                            </div>) :
                                            <div className={Style.sugg}>
                                                <p> No City Found. </p>
                                            </div>
                                    }
                                </div>
                            }
                        </div>   
                        : ''
                
        }
        </div>
    )
}

export default SearchTheCity
