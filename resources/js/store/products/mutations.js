export default {
    setProducts(state, products) {
        console.log('Mutation Products:', products.subItems.data);
        state.products = products.subItems.data;    
        state.product = products.subItems;
    },

}
