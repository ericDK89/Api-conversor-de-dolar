import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function BRLtoUSD() {

    const [coin, setCoin] = useState('')
    const [brl, setBrl] = useState('')

    const url = 'http://economia.awesomeapi.com.br/json/last/USD-BRL'

    useEffect(() => {
        axios.get(url)
            .then(res => {setCoin(res.data.USDBRL.high)})
    })

    const handleChange = (event) => {
        setBrl(event.target.value)
    }

  return (
    <div>
        <input type='number' value={brl} onChange={handleChange} placeholder='Dolar'/>
        <div> R$ {coin * brl} </div>
    </div>
  )
}
