import React from 'react'
import Style from './livingCost.module.scss'
import { camelCaseToNormal } from 'utils/helpers';
import { cityDetailProops } from 'interfaces/index'


const LivingCost = ({localLivingCost}:any) => { 

    return (
        <div className={Style.costHolder}>   
            <div className={Style.singleCostHeader} style={{marginTop:0, borderRadius: '7px 7px 0px 0px'}} > <span>Living Cost Of {localLivingCost.city} </span> </div> 
                                
                {
                    localLivingCost.error ?  <div className={Style.singleCost}> <span>Error</span> <span>Living Cost is not Available</span> </div>
                        : Object.keys(localLivingCost).map( (cost:any) =>  
                                    cost !== 'city' ? 
                                        <div key={cost} className={Style.singleCost}>   
                                            <span>{ camelCaseToNormal(cost) }</span>  
                                            <span> { localLivingCost[cost] ?  localLivingCost[cost] + '$' : 'Not Available' } </span>
                                        </div> 
                                    : null       
                    )
                }

        </div> 

    )
}

export default LivingCost
