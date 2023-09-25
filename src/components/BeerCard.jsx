import React from 'react'

const BeerCard = ({beer}) => {
   
   
  return (
    <div className="card max-w-[320px] h-[200px] flex justify-center items-center  gap-5 border-2 border-slate-300 rounded-lg p-5">
        <div className="image h-[150px] w-[150px]">
            <img src={beer.image_url} alt="" className='h-full w-[100px] object-contain'/>
        </div>
        <div className="name  ">
            <div className="names">
            <h1 className=' text-xl font-bold '>{beer.name}</h1>
                <p className='mt-2 text-sm'>{beer.tagline}</p>
                <span className='mt-2 text-sm'>Since-{beer.first_brewed}</span>
            </div>

            </div>

    </div>
  )
}

export default BeerCard