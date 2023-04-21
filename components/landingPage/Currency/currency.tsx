import React,{useState} from 'react'
import Style from './currency.module.scss'
import { cityDetailProops , currencyType } from 'interfaces/index'
import currency from 'utils/currency.json'

const Currency = ({localCurrercy}:any) => {
  
    const [seletedCurrency, setSeletedCurrency] = useState('')
    const [seletedValue, setSeletedValue] = useState(1)
    let currencySheet : currencyType = currency
    
    return (
        <div className={Style.CurrencyDetailsHolder}>
            <div className={Style.title}> Exchange of {localCurrercy.name} </div>
            
            <div className={Style.CurrencyConverterHolder}>
        
                <label className={Style.select} htmlFor="slct"> 
                    <select id="slct" required={true}  onChange={e => setSeletedCurrency(e.target.value) } >
                        <option disabled={true}  >Select a Currency</option>
                        {
                            Object.keys(currencySheet).map(currency => {  
                               return  <option key={currency} value={currency} >{currencySheet[currency as keyof currencyType].name}</option>
                            })
                        }
                    </select>
                    <svg>
                        <use xlinkHref="#select-arrow-down"></use>
                    </svg>
                </label>

                {
                    seletedCurrency && 
                    <div className={Style.exchaneRate}> 
                        Will Get <span>  {((localCurrercy.rate / currencySheet[seletedCurrency as keyof currencyType].rate)*seletedValue).toFixed(2)} {localCurrercy.currencyCode} </span>in Exchange of   
                                <div className={Style.formGroup}>
                                    <input className={Style.formField} type='number' value={seletedValue} onChange={e => setSeletedValue(Number(e.target.value))} />
                                    <span>{seletedCurrency}</span>
                                </div>
                    </div>
                }

                <svg className={Style.sprites}>
                    <symbol id="select-arrow-down" viewBox="0 0 10 6">
                        <polyline points="1 1 5 5 9 1"></polyline>
                    </symbol>
                </svg>
            </div>

        </div>
    )
}

export default Currency
