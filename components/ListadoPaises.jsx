import Image from 'next/image'
import React from 'react'
Image
function ListadoPaises({paises}) {
  return (
    <tr>
        <td>{paises.alpha2Code}</td>
        <td><Image width={100} height={100} alt='imagen' src={paises.flag} /></td>
        <td>{paises.capital} {' - '}{paises.name}</td>
        <td>{paises.population}</td>
        <td>Ver mas</td>
  
      </tr>

  )
}

export default ListadoPaises