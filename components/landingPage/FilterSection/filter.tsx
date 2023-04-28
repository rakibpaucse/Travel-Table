import React,{useState} from 'react'
import Style from './filter.module.scss'
import { UilPlus } from '@iconscout/react-unicons'

 
const Filter = ({filterOptions  , setFilterOptions , setSearchItem , defaultFilterOption}:any) => {

    const [conditions, setConditions] = useState<any>({})
    
    const handleButtonClick = (e: any) => {
        let title = e.target.title
        let value ;
        let abc = e.target.innerText.split(" ")[0] === '<' ? 'high' : 'low'

        let selectedConditions = {
            ...conditions,
            [title]: e.target.innerText
        }

        setConditions( selectedConditions ) 

        e.target.innerText === 'ALL' ? 
            value = defaultFilterOption[title].low : 
            value = title === 'population' ? Number((e.target.innerText.split(" ")[1]).split(",").join("")) : Number(e.target.innerText.split(" ")[1])

        let updatedFilterOptions = {
            ...filterOptions,
            [title]: {
                ...defaultFilterOption[title],
                [abc] : value
            }
        }

        setFilterOptions( (prev: any) =>  updatedFilterOptions )
    } 

    const handleOnchangeInput = (e: any) => {
        setSearchItem( (prev: any) =>  e.target.value )
    }


    return (
        <div>

            <div className={Style.card}>
                
                <div className={Style.inputHolder}>
                    <h1>Find City - Filter Out Desire City</h1>

                    <input type="text" placeholder='Search The City...' 
                        onChange={ handleOnchangeInput } />
                    <button onClick={ e => { setFilterOptions(defaultFilterOption) , setConditions({})} } >Reset All Filter</button>
                </div>

                <div className={Style.conditionHolder}>
                    {
                        Object.keys(conditions).map( condition => <span> {`${condition} _  ${conditions[condition]}`} </span>)
                    }
                </div> 
                
                <div className={Style.infoHolder} >
                    <details className={Style.costOfLiving} >
                        <summary > <span className={Style.sumIcon}><UilPlus /></span> <span>Cost Of Living </span>  </summary>
                            <div className={Style.buttonHolder} >
                                <div title="monthlyCostOfLiving" onClick={handleButtonClick} > {`<  1400 / M`}  </div>
                                <div title="monthlyCostOfLiving" onClick={handleButtonClick} > {`<  2200 / M`}  </div>
                                <div title="monthlyCostOfLiving" onClick={handleButtonClick} > {`>  2200 / M`}  </div>
                                <div title="monthlyCostOfLiving" onClick={handleButtonClick} > {` ALL `}  </div>
                            </div>
                    </details>

                    <details className={Style.polulation} >
                        <summary> <span className={Style.sumIcon}><UilPlus /></span> <span>Population </span> </summary>
                        <div className={Style.buttonHolder} >
                                <div title="population" onClick={handleButtonClick} > {`< 80,000 `}  </div>
                                <div title="population" onClick={handleButtonClick} > {`< 2,50,000  `}  </div>
                                <div title="population" onClick={handleButtonClick} > {`> 2,50,000 `}  </div>
                                <div title="population" onClick={handleButtonClick} > {` ALL `}  </div>
                            </div>
                    </details>
                    
                    <details className={Style.internet} >
                        <summary> <span className={Style.sumIcon}><UilPlus /></span> <span>Internet Speed</span> </summary>
                            <div className={Style.buttonHolder} >
                                <div title="internet" onClick={handleButtonClick} > {`<  30 / MBPS`}  </div>
                                <div title="internet" onClick={handleButtonClick} > {`<  75 / MBPS`}  </div>
                                <div title="internet" onClick={handleButtonClick} > {`>  75 / MBPS`}  </div>
                                <div title="internet" onClick={handleButtonClick} > {` ALL `}  </div>
                            </div>
                    </details>
                    
                    <details className={Style.crime} >
                        <summary> <span className={Style.sumIcon}><UilPlus /></span> <span>Crime Levels</span></summary>
                        <div className={Style.buttonHolder} >
                                <div title="crimeIndex" onClick={handleButtonClick} > {`< 35 LOW`}  </div>
                                <div title="crimeIndex" onClick={handleButtonClick} > {`< 65 MOD `}  </div>
                                <div title="crimeIndex" onClick={handleButtonClick} > {`> 65 HIGH`}  </div>
                                <div title="crimeIndex" onClick={handleButtonClick} > {` ALL `}  </div>
                            </div>
                    </details>

                    <details className={Style.safety} >
                        <summary> <span className={Style.sumIcon}><UilPlus /></span> <span> Safety Levels</span></summary>
                        <div className={Style.buttonHolder} >
                                <div title="safetyIndex" onClick={handleButtonClick} > {`< 35 LOW`}  </div>
                                <div title="safetyIndex" onClick={handleButtonClick} > {`< 60 MOD `}  </div>
                                <div title="safetyIndex" onClick={handleButtonClick} > {`> 60 HIGH`}  </div>
                                <div title="safetyIndex" onClick={handleButtonClick} > {` ALL `}  </div>
                            </div>
                    </details>
                </div>

            </div>
        </div>
    )
}

export default Filter
