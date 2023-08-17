// Item.js

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductItem.css';
import ResponsiveDialog from './ResponsiveDialog';
import Counter from './Counter';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography, Box, Button } from '@mui/material';
import { fetchItems } from './fetchItems';

function Item({ item }) {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchItems();
                const products = data.map(product => ({
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    category: product.category,
                    image: product.image,
                    rating: product.rating,
                    id: product.id,
                }));
                setResult(products);
                setLoading(false);
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {loading ? (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Stack spacing={3} style={{ display: 'flex', flexDirection: 'column', margin: '0' }}>
                            <Skeleton variant="rectangular" width={210} height={210} />
                            <Skeleton variant="rectangular" width={210} height={210} />
                            <Skeleton variant="rectangular" width={210} height={210} />
                        </Stack>
                    </div>
                ) : (
                    <ResponsiveDialog />
                )}
            </div>
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
                                <Link to={`/products/${product.id}`}>
                                    <Button variant="outlined" size='small' style={{ color: '#000000', borderColor: '#172738', marginRight: 20, backgroundColor: '#E6E6FA', fontWeight: 600 }}>
                                        Details
                                    </Button>
                                </Link>
                            </div>
                        </Box>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Item;
