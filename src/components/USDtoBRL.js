import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function USDtoBRL() {

    const [coin, setCoin] = useState('')
    const [usd, setUsd] = useState('')

    const handleChange = (event) => {
        setUsd(event.target.value)
    }

    useEffect(() => {
        axios.get('http://economia.awesomeapi.com.br/json/last/BRL-USD')
            .then(res => {setCoin(res.data.BRLUSD.high)})
    })

  return (
    <div>
        <input type='number' value={usd} onChange={handleChange} placeholder='Real'/>
        <div> US$ {coin * usd} </div>
    </div>
  )
}
