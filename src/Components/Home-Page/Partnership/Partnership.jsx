import React from 'react'
import './Partnership.css';
import PartnershipCard from './PartnershipCard';

const Partnership = () => {
  return (
    <div id='Partnership' className='homePage__partnership'>
        <div className="partnership_elipse"></div>
        <div className="space"></div>
        <div className="homePage__partnership-content">
            <h2>Our Partners</h2>
            <div className="line1"></div>
            <div className="line2"></div>
           <div className="Partnership_card">
                <PartnershipCard 
                    partnerType="Hospitals and Clinics"
                    partnerInfo="Our system will be used in hospitals and clinics where 
                    patients receive prescriptions from their doctors after consults, 
                    it will help reduce the queues that were a norm in the current system ."
                />
                <PartnershipCard
                    partnerType="Pharmacies"
                    partnerInfo="With cooperation with pharmacies that the patients take their 
                    prescriptions to get the medicines, the process will 
                    be easier and faster with just searching the patient/'s id and then approve the order."
                />
                <PartnershipCard
                    partnerType="Insurance Companies"
                    partnerInfo="Insurance companies play a big role in the medical field 
                    in general especially in medicine purchases and they cooperate with both the 
                    pharamacies and the 
                    hospitals and clinics which is why partnership with them is also a necessity."/>
            </div> 
        </div>
    </div>
  )
}

export default Partnership