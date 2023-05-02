import React from 'react'
import { useRouter } from 'next/router'



function Sidebar() {
  const router=useRouter();
    return (
    <div>
        <h2>Búsquedas</h2>
        <hr/>
        <ul className="list-group">
            <li className={ router.pathname==='/buscarPorPais'?' bg-primary list-group-item text-white ' : 'list-group-item'} onClick={()=>router.push("/buscarPorPais")}>Buscar Pais</li>
            <li className={ router.pathname==='/buscarPorCapital'?' bg-primary list-group-item text-white ' : 'list-group-item'} onClick={()=>router.push("/buscarPorCapital")} >Por capital</li>
        </ul>
    </div>
  )
}

export default Sidebar