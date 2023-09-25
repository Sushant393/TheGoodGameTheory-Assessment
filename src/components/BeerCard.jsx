import React from 'react'

const BeerCard = ({beer}) => {
   
   
  return (
    <div className="card max-w-[300px] flex justify-center items-center  gap-5 ">
        <div className="image h-[150px] w-[150px]">
            <img src={beer.image_url} alt="" className='h-full w-[100px] object-contain'/>
        </div>
        <div className="name w-2/3 ">
            <div className="names">
            <h1 className=' whitespace-nowrap'>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <span>Since-{beer.first_brewed}</span>
            </div>
                
                 
                
            </div>

    </div>
  )
}

export default BeerCard