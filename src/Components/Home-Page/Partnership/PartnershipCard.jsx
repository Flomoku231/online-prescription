import React from 'react'
import './PartnershipCard.css';

const PartnershipCard = (props) => {
  return (
    <div className="partnership__content-partners">
                <div className="paragraph1">
                <h3>{props.partnerType}</h3>
                <p>{props.partnerInfo}</p>
            </div>
    </div>
  )
}

export default PartnershipCard