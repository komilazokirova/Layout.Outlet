import React, { useEffect, useState } from 'react'
import { getProducts } from '../api'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

const Products = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getProducts()
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })
    }, [])

    if (loading) return <Loader />
  if (error) return <p>Xato: {error.message}</p> 

    return (
        <div>
            <div className='flex justify-between py-6'>
                <button className='border py-2 px-4 rounded-2xl bg-black text-white'>
                    Back
                </button>
                <p className='font-bold text-xl'>Products</p>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {data.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    )
}

export default Products