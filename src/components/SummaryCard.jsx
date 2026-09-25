import React from 'react'
import CountUp from '../components/CountUp'

const SummaryCard = ({digit, data}) => {
  return (
    <div>
          <div className="SummaryCard">
              <h1><CountUp
                  from={0}
                  to={digit}
                  separator=","
                  direction="up"
                  duration={.75}
                  className="count-up-text"
                  delay={0}
                />+</h1>
            <p>{data}</p>
        </div>
    </div>
  )
}

export default SummaryCard