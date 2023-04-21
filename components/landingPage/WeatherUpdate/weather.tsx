import React from 'react'
import Style from './weather.module.scss'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend 
  } from "recharts";


const Weather = ({localWeatherInfo}:any) => {
    
    const xLabels = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];

    const majorWeatherInfos: number[][] = [] 

    Object.keys(localWeatherInfo).map( (info:any )=> {
        if( info === 'TS_MIN' || info === 'TS_MAX' || info === 'WS10M_MAX' ||info === 'PRECTOT' || info === 'CLD_AMT'){
            let tempArr = Object.keys(localWeatherInfo[info]).map((val:any) => Math.round(localWeatherInfo[info][val]) )
            tempArr = tempArr.slice(0,12)
            majorWeatherInfos.push(tempArr)
        }
    } )

    let infoHolder: { month: string; 'Min Temp(C)': string; 'Max Temp(C)': string; 'Rain(mm)': string; 'Max Wind(m/s)': string; 'Clouds(%)': string; }[] = []
   
    majorWeatherInfos.map( (singleMajorInfo:any , index : string | number ) => {

        singleMajorInfo.map( (singleInfo:any , i: any ) => {
            let singleInfoCreator = {
                month : '' ,
                'Min Temp(C)' : '',
                'Max Temp(C)' : '',
                'Rain(mm)' : '',
                'Max Wind(m/s)' : '',
                'Clouds(%)' : '',
            }
            
            if( index === 0){
                singleInfoCreator.month = xLabels[i]
                singleInfoCreator['Min Temp(C)'] = singleInfo

                infoHolder.push(singleInfoCreator)
            }else{
                index === 1 ? infoHolder[i]['Max Temp(C)'] = singleInfo :
                index === 2 ? infoHolder[i]['Rain(mm)'] = singleInfo :
                index === 3 ? infoHolder[i]['Max Wind(m/s)'] = singleInfo :
                infoHolder[i]['Clouds(%)'] = singleInfo
            }

        } )
        
    } ) 


    return (
        <div className={Style.weatherHolder} >
            <div className={Style.title}>
                Annual Weather Report
            </div>
          <div className={Style.chartholder}>
                <LineChart
                    width={400}
                    height={350}
                    data={infoHolder}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3 3" />
                    <XAxis dataKey="month" />
                    <YAxis  />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="Max Temp(C)" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Min Temp(C)" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Max Wind(m/s)" stroke="#80264b" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Rain(mm)" stroke="#b17300" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Clouds(%)" stroke="#168829" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </div>
    )
}

export default Weather
