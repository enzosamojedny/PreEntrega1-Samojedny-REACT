import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItems } from './fetchItems';

function ItemDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const item = await fetchItems(id);
                setProduct(item);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            {/* Add more details here */}
        </div>
    );
}

export default ItemDetail;
