import React,{ useState , useEffect } from 'react'
import { useGetCityByNameQuery } from 'store/citySlice/cityApi'
import Style from './SearchBox.module.scss'
import { UilSpinner,UilTimes } from '@iconscout/react-unicons'
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


    return (
        <>          

            <div className={Style.search__container} style={{padding:`0rem ${rightPadding}rem`}} >
                <input className={Style.search__input} type="text" 
                        value={seleted ? seletedItem.city+','+ seletedItem.country : keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Search Country/City" 
                />
                        { isFetching ? 
                                <div className={Style.ulHolder} >  
                                    <UilSpinner  />  
                                </div> :
                                <>
                                    {
                                        (keyword.length > 0 && !seleted) ?
                                        <div className={Style.ulHolder} 
                                        onBlur={ (e) => console.log('asdfasd') } > 
                                    
                                            <div className={Style.suggHolder} >
                                                {
                                                    cityList?.length > 0  ?

                                                    cityList.map( (singleCity:any ) => 
                                                        <Link href={`/${singleCity.country}/${singleCity.cityLower}`}
                                                            key={singleCity.id} className={Style.sugg} 
                                                            onClick={(e) => {setSelected(true); setSelectedItem(singleCity); setClicked(false) }} >
                                                            {`${singleCity.city} , ${singleCity.country}`} 
                                                        </Link>
                                                    ) 
                                                        :
                                                        <div className={Style.sugg}>
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

            <div className="svgIcons" style={{height:0,width:0, position:'absolute', visibility:'hidden'}} >
                <svg xmlns="http://www.w3.org/2000/svg">
                        <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fillRule="evenodd"/></symbol>
                        <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fillRule="evenodd"/></symbol>
                </svg>
            </div>

        </>
    )
}

export default SearchBar
