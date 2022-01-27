import React from 'react'
import './featureinfo.css'
import { ArrowDownward, ArrowUpward, Timeline, CurrencyRupee, ProductionQuantityLimits } from '@mui/icons-material';
export default function FeatureInfo({Revanue}) {
    return (
        <div className="featured">
      <div className="featuredItem">
          <Timeline className="featureIcon icon-1"/>
        <span className="featuredTitle">{Revanue}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
      <ProductionQuantityLimits className="featureIcon icon-2"/>
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
      <CurrencyRupee className="featureIcon icon-3"/>
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
    )
}
