"use client"
import { useEffect, useState } from 'react'
import { FilterBox } from './FilterBox'
import { ProductItem } from './ProductItem'
import './products.css'
import { getProducts } from '@/api'

export const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProductsData();
    }, [])

    const getProductsData = async () => {
        const res = await getProducts();
        if (Array.isArray(res)) {
            setData(res);
        }
    }

    return (
        <section id="products">
            <FilterBox />

            <div id="products-box">
                {
                    data.map((item) => {
                        return <ProductItem key={item.id} {...item} />
                    })
                }
            </div>
        </section>
    )
}