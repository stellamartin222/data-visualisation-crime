import React from 'react';
import {Radar} from 'react-chartjs-2';

let refFunc = (crimeData) => {  
    let category = crimeData.map(crime => {
        return crime.category
    })
    
    let counter = category.reduce(function (allCrimes, crime) {
        if (crime in allCrimes) {
            allCrimes[crime]++
        }
        else {
            allCrimes[crime] = 1
        }

        return allCrimes
    }, {})

    return counter
}


export default class RadarExample extends React.Component{
    crimeData = this.props.data

    
    state = {
        data : {
            labels: Object.keys(refFunc(this.crimeData)),
            datasets: [
                {
                    label: 'Crimes by category',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: Object.values(refFunc(this.crimeData))
                }
            ]
        }
    }
    
    
    render() {
    console.log(Object.keys(refFunc(this.crimeData)))
    return (
      <div>
        <Radar data={this.state.data} />
      </div>
    );
  }
};

// module.exports = {refFunc}