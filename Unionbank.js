import React from 'react'
import Andhrabank from './Andhrabank'
import Corporationbank from './Corporationbank'

export default function Unionbank() {
    let data={
        firstname:'ashok',
        lastname:'golla'
    }
    return (
        <div>
            <Corporationbank info={data}/>
            <Andhrabank info={data}/>
            

        </div>
    )
}
