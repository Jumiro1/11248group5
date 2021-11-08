import React from 'react'
import {Line} from 'react-chartjs-2'

const LineGraph = () => {
    return <div>
        <Line
            data={{
                labels: ['Date 1', 'Date 2', 'Date 3', 'Date 4', 'Date 5', 'Date 6'],
                datasets: [
                    {
                        label: 'Energy Consumption',
                        data: [12,34,35,63,64,90],
                        borderColor: 'red',
                        borderWidth: 1
                    },
                    {
                        label: 'Prediction',
                        data: [12,32,23,50,75,85],
                        borderColor: 'green',
                        borderWidth: 1

                    }
                ]
            }}
            height={400}
            width={400}
            options={{
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true    
                    }
                }                
            }}
        />
    </div>
}

export default LineGraph