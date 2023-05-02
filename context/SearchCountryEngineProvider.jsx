
import axios from "axios";
import { useRouter } from "next/router"
import {useState,useEffect,createContext}from "react"

const SearchCountryEngineContext=createContext();

const SearchContryEngineProvider=({children})=>{

    const router=useRouter();

    useEffect(()=>{
        console.log("CAMBIO");
        setPaises([]);
    },[router]);

    const [numero,setNumero]=useState(2);
    const [nombreCapital,setNombreCapital]=useState('');
    const [paises,setPaises]=useState([]);
    const handleNombreCapital= async (nombreCapitalP)=>{
        setNombreCapital(nombreCapitalP);

        const url=`https://restcountries.com/v2/capital/${nombreCapital}`;
        console.log("URL: ",url);
        try{
            const {data}=await axios(url);

            console.log("Paises: ",data);
            setPaises(data);

        }catch(error){
            console.log("Error: ",error);
        }
        if(nombreCapital.length===1){
            setPaises([]);
        }
    }
    const handleNombrePais= async (nombrePaisp)=>{
        setNombreCapital(nombrePaisp);

        const url=`https://restcountries.com/v2/name/${nombreCapital}`;
       
        try{
            const {data}=await axios(url);

            console.log("Paises: ",data);
            setPaises(data);

        }catch(error){
            console.log("Error: ",error);
        }
      //  console.log("nombre: ",nombreCapital.length);
        if(nombreCapital.length===1){
            setPaises([]);
        }
    }

    return (
        <SearchCountryEngineContext.Provider
        value={
            {
                numero:numero,
                nombreCapital:nombreCapital,
                handleNombreCapital:handleNombreCapital,
                paises:paises,
                handleNombrePais:handleNombrePais
            }
        }
        >
        
        {children}
        </SearchCountryEngineContext.Provider>
    )
}
export{
    SearchContryEngineProvider
}
export default SearchCountryEngineContext