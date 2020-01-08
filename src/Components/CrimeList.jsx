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

    function handleClick (category) {
        console.log(category)
        console.log(data)
        const result = data.filter(data => data.category === category)
        console.log(result)
        return data.filter(data => data.category === category)
    } 

        return (

            <div class="flex-container">
                 <DropdownButton id="dropdown-basic-button" title="Sort by">
                    {arr.map((category) => {
                        return <Dropdown.Item onClick={() => {handleClick(category)}}>{category}</Dropdown.Item>
                        })
                    }
                </DropdownButton>

                <CrimeCard data={data}/>
            </div>
        )
    }