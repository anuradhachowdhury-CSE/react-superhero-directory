import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Station.css'



const Station = () => {
    const [productss, setProductss] = useState([]);
    const [cart, setCart] = useState([])
    // const [displayProducts,setdisplayProducts] =
    // useState([]);

    useEffect(() => {
        fetch('./Cosmetics.json')
            .then(res => res.json())
            .then(data => setProductss(data.products)
            )
    }, []);

    const handleAddToCart = (prod) => {
        const newCart = [...cart, prod];
        setCart(newCart);
    }
    return (
        <div className="station">

            <div className='part-one'>


                {
                    productss.map(products => <Person
                        product={products}
                        handleAddToCart={handleAddToCart}
                    ></Person>)
                }


            </div>
            <div className='part-two'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Station