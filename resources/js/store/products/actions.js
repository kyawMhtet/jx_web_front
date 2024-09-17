import axios from "axios";

export default {
    async fetchProducts({ commit }, url) {
        // const res = await axios.get('http://localhost:8000/api/shop/products');
        const res = await axios.get(url);
        // console.log(res.data);
        commit('setProducts', res.data);
    }
}
