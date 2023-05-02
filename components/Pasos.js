import React from 'react'
import { useRouter } from 'next/router'

const pasos=[
    {paso:1,nombre:'Buscar por pais',url:'/'},
    {paso:2,nombre:'Buscar por region',url:'/region'},
    {paso:3,nombre:'Buscar por capital',url:'/capital'}
]

function Pasos() {
  
    const router=useRouter();
  
    return (
    <div>Pasos</div>
  )
}

export default Pasos