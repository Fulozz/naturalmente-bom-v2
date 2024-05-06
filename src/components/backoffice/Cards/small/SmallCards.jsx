import React from 'react'
import SmallCard from './SmallCard'
import { ShoppingCart } from 'lucide-react';

const SmallCards = () => {
  const orderStatus = [
    {
      id: 1,
      title: "Total Order",
      numbers: 505,
    },
    {
      id: 2,
      title: "Pending orders",
      numbers: 185,  
    },
    {
      id: 3,
      title: "Orders processing",
      numbers: 45,   
    },
    {
      id: 4,
      title: "Orders Deliverd",
      numbers: 306,
    },

    
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
      {
        orderStatus.map((item, index)=> {
          return <SmallCard key={index} data={item} />
        })
      }
    </div>
  )
}

export default SmallCards