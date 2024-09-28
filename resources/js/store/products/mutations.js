export default {
    setProducts(state, products) {
        console.log('Mutation Products:', products.subItems);
        state.products = products.subItems.data;
        state.product = products.subItems;
        state.categories = products.categories;
        state.total = products.totalSubItems;
    },

}
