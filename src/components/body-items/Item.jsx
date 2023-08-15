
import React, { useState, useEffect } from 'react';
import { Backdrop, Box, Button, CircularProgress, Typography } from '@mui/material';

import './ProductItem.css'
import ResponsiveDialog from './ResponsiveDialog';
import Counter from './Counter';
function SimpleBackdrop() {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            onClick={() => { }}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
function Item({ item }) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([])
    useEffect(() => {
        let fetching = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fetch('https://fakestoreapi.com/products'));
            }, 5000);
        });
        fetching
            .then(res => res.json())
            .then(json => {
                const products = json.map(product => ({
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    image: product.image,
                    rating: product.rating
                }));
                setResult(products);
                setLoading(false);
            })
            .catch(error => {
                console.log("Oops. Something went wrong.");
                console.log(error);
                setLoading(false);
            });
        const timeoutId = setTimeout(() => {
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <div>
            {loading ? <SimpleBackdrop /> : <ResponsiveDialog />}
            <div className='product-container'>
                {result.map((product, index) => (
                    <div key={index} className='product-item'>
                        <img src={product.image} alt={product.title} className="product-item__image" style={{ width: 100, height: 100 }} />
                        <Typography variant='h2' style={{ fontSize: 17, fontWeight: 500 }} className="product-item-title">{product.title}</Typography>
                        <Typography variant='h3' style={{ fontSize: 19, fontWeight: 600 }}>${product.price}</Typography>
                        <Box style={{ display: 'flex', flexDirection: 'row', width: '250px', alignItems: 'center', justifyContent: 'center' }}>
                            <Button variant="outlined" size='small' style={{ color: '#000000', borderColor: '#172738', marginRight: 20, backgroundColor: '#E6E6FA', fontWeight: 600 }}>
                                Add to Cart
                            </Button>

                            <div>
                                <Counter />
                            </div>
                        </Box>
                        {/*<p>Description: {product.description}</p>
                        <p>Category: {product.category}</p>*/}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Item;





