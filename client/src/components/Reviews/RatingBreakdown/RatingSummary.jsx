import React from 'react';
import axios from 'axios';

const RatingSummary = ({ratings}) => {
  return (
    <div>
      <h2>{console.log(ratings)}
        average rating: {ratings}
      </h2>
    </div>
  )
}

export default RatingSummary;