import { useState,useEffect } from 'react'

import './App.css'
import BeerCard from './components/BeerCard';

function App() {
  const[data,setData] = useState([]);
  const[filteredData,setFilteredData] = useState(null);
  const fetchData = async ()=>{
    
    try {
      const res =await fetch("https://api.punkapi.com/v2/beers");
      const resJSON = await res.json();
      setData(resJSON);
      setFilteredData(resJSON);
    } catch (error) {
      console.log("error occured")
    }
  }
useEffect(() => {
  fetchData();
}, [])

const searchResults = (e)=>{
  let searchValue = e.target.value;
  if(searchValue == ""){
    setFilteredData(null)
  }
  const filter = data?.filter((beer)=>
  beer.name.toLowerCase().includes(searchValue.toLowerCase()));
  setFilteredData(filter);
}
  return (
    <div className=''>
      
    <div className="pt-10  container flex flex-col items-center">
    <input type="search" name="search" placeholder='search beer...' id="" className=' rounded-lg border-2 text-xl outline-none p-2 ' onChange={e=>searchResults(e)} />
    <div className="mt-10 card-container flex justify-evenly gap-5 items-center flex-wrap ">
        {filteredData.map((beer)=>{
       return <BeerCard key={beer.id} beer={beer}/>
      })}
    </div>
    </div>  
    </div>
  )
}

export default App
