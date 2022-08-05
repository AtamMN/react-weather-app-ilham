import React from 'react'
import { formatToLocalTime } from '../services/weatherServices'

function TimeAndLocation({cuaca:{dt,timezone,name,country}}) {
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <div className="text-white text-xl font-extralight">
                {formatToLocalTime(dt,timezone)}
            </div>
        </div>
        <div className="flex items-center justify-center my-3">
            <div className="text-white text-3xl font-medium">
                {`${name}, ${country}`}
            </div>
        </div>
    </div>
  )
}

export default TimeAndLocation