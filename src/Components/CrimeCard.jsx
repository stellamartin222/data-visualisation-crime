import React from 'react'

export default function CrimeCard({data}) {
    return (
        <ul>
            {data.map((crime) => {
                return <li key={crime.id}>
                    <h2>{crime.category}</h2>
                    <h3>{crime.month}</h3>
                    <p>{crime.outcome_status.category}</p>
                    <p>{crime.outcome_status.date}</p>
                </li>

            })}
        </ul>
    )
}
