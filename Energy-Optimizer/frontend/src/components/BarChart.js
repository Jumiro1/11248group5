import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    return <div>
        <Bar
            data={{
                labels: ['Region 1', 'Region 2', 'Region 3', 'Region 4', 'Region 5', 'Region 6'],
                datasets: [
                    {
                        label: 'Energy Consumption by Regions ',
                        data: [12,34,35,63,64,90],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
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

export default BarChart