import React from 'react'
import Featureinfo from '../../component/featureInfo/Featureinfo'
import Chart from '../../component/chart/Chart'
import { userData } from "../../dummyData";
import "./home.css"

export default function Home() {
    return (
        <div className='home'>
            <Featureinfo Revanue="Revanue 1 "/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    )
}
