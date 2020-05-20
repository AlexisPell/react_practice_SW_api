import React from 'react'

const errorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">Boom!</span>
      <span>
        Something gone terribly wrong
      </span>
      <span>
        (but drones are moved out to repair it :p)
      </span>
    </div>
  )
}

export default errorIndicator