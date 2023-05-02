import { useContext } from "react"
import SearchCountryEngineContext from "/context/SearchCountryEngineProvider"

const useSearchCountryEngine=()=>{
    return useContext(SearchCountryEngineContext);
}
export default useSearchCountryEngine