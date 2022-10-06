import Rating from "react-rating"

import React from 'react'

function Star() {
  return (
    <div>
      <Rating
  emptySymbol="far fa-star fa-0.5x"
  fullSymbol="fa fa-star fa-0.5x"
  initialRating={3.5}
  fractions={2}
  readonly={true}
/>
    </div>
  )
}

export default Star
