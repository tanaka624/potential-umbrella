import * as React from 'react'
import { Radar } from 'react-chartjs-2';

const data = {
  labels: ['気力', '知力', '体力'],
  datasets: [
    {
      label: 'ジョン',
      data: [5, 3, 1],
    },
  ],
}

const options = {
  elements: {
    line: {
      borderWidth: 3
    }
  }
}

const RadarChart = () => {
  return (
    <div style={{ width: '640px' }}>
      <Radar
        data={data}
        options={options}
      />
    </div >
  )
}

export default RadarChart
