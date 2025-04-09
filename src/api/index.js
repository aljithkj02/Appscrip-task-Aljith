const API_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
    try {
        const response = await fetch(API_URL);
        const json = await response.json();

        return json || [];
    } catch (error) {
        console.log(error);
    }
}