import useSearchCountryEngine from '@/hooks/useSearchCountryEngine'
import React from 'react'
import ListadoPaises from './ListadoPaises';

function Resultado() {
 
  const{paises}=useSearchCountryEngine();
  return (
    <div>
    <table className="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Bandera</th>
        <th>Nombre</th>
        <th>Población</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {paises.map(p=>(
          <ListadoPaises
          key={p.alpha2Code}
          paises={p}
          />
        ))}
    </tbody>
  </table>
    
    </div>
  )
}

export default Resultado