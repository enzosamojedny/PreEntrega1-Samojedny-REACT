export const fetchItems = async (productId = null) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        if (productId !== null) {
            const product = data.find(item => item.id === productId);
            if (!product) {
                throw new Error(`Product with ID ${productId} not found.`);
            }
            return product;
        }
        return data;
    } catch (error) {
        console.error("Error fetching item data:", error);
        throw error;
    }
};

