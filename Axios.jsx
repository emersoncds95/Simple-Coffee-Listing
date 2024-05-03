import { useEffect } from "react"
import axios from 'axios'

function Axios(){
   useEffect(() => {
    axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json').then(response => console.log(response.data)).catch(error => console.log(error)).finally(console.log("dentro do finally"));
   }, [])

   return(
    <>
    </>
   )
}
export default Axios