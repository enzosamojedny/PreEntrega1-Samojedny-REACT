import React from 'react'
import '../body-items/ProductItem.css'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ProductItem({ title, description, price, image }) {
    return (
        <div className='product-item'>
            <img src={image} alt={title} className="product-item__image" style={{ width: 100, height: 100 }} />
            <Typography variant='h2' style={{ fontSize: 17, fontWeight: 500 }} className="product-item-title">{title}</Typography>
            <Typography variant='h3' style={{ fontSize: 19, fontWeight: 600 }}>${price}</Typography>
            {/*<p>{description}</p>*/}
            <Box style={{ display: 'flex', flexDirection: 'row', width: '250px', alignItems: 'center', justifyContent: 'center' }}>
                <Button variant="outlined" size='small' style={{ color: '#172738', borderColor: '#172738', marginRight: 20, backgroundColor: '#E6E6FA', fontWeight: 600 }}>
                    Add to Cart
                </Button>
                <Button variant="outlined" size='small' style={{ color: '#172738', borderColor: '#172738', backgroundColor: '#E6E6FA', fontWeight: 600 }}>
                    Buy Now!
                </Button>
            </Box>
        </div >
    )
}

export default ProductItem
