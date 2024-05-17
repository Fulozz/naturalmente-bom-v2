import React from 'react'
import {CreditCard, Layers, Layers2, ShoppingCart, Wallet} from "lucide-react"
import { cn } from '../../../../lib/cn'
import { formatPrice } from '../../../../lib/formatPrice'
const LargeCard = ({data}) => {
  // Destructuring data
  const { id, sales, title } = data
  // Setup literal object for color data ID is used to determine the color
    const color = {
        "bg-green-600"  : id === 1,
        "bg-orange-600" : id === 2,
        "bg-blue-600"   : id === 3,
        "bg-teal-600"   : id === 4,
        "bg-emerald-600": id === 5
    }
    
  return (
    <div className={cn(`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 text-wrap text-center`, [color])}>
        { id === 1 ? (<Layers2 />) : id === 2 ? (<Layers />) : id == 3 ? (<ShoppingCart />)  : id === 4 ? (<CreditCard />) : id === 5 ? (<Wallet />) : null }
        <h4>{title}</h4>
        <h2 className='lg:text-3xl text-2xl'>{formatPrice(sales, {notation: 'compact'})}</h2>
    </div>
  )
}

export default LargeCard