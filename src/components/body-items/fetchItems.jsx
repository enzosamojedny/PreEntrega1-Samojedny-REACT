export const fetchItems = async ({ productId = null, category = null } = {}) => {
    try {
        const baseUrl = 'https://fakestoreapi.com/products';
        let fetchUrl = baseUrl;

        if (category) {
            fetchUrl = `${baseUrl}?category=${category}`;
            console.log(fetchUrl)
        }

        const response = await fetch(fetchUrl);
        const data = await response.json();

        if (productId) {
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
