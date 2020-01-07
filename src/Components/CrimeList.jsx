import React from 'react'
import CrimeCard from './CrimeCard'
import {Dropdown, DropdownButton} from 'react-bootstrap'


export default function CrimeList({data}) {
    let arr = []

    data.forEach((crime) => {
        if (!arr.includes(crime.category)){
            arr.push(crime.category)
        }
    })

        return (
            <div>
                 <DropdownButton id="dropdown-basic-button" title="Sort by">
                    {arr.map((category) => {
                        return <Dropdown.Item>{category}</Dropdown.Item>
                        })
                    }
                </DropdownButton>

                <CrimeCard data={data} />
            </div>
        )
    }