import React from 'react'
// import ActivityCard from './activitesCard'
// import { activitiesData } from './activitesData'
import './activites.css'

const Activities: React.FC = () => {
  return (
    <div className="Activities-Container">
      <div className="later-card">
        <img src="img/404-2.svg" className="errorimg" />
      </div>
      {/* {activitiesData.map((activity, index) => (
        <ActivityCard
          key={index}
          title={activity.title}
          organization={activity.organization}
          ddays={activity.ddays}
          target={activity.target}
          interestArea={activity.interestArea}
          deadline={activity.deadline}
        />
      ))} */}
    </div>
  )
}

export default Activities
