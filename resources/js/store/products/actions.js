import megaShop from "../../axios";

export default {
  async fetchProducts({ commit }, url) {
    try {
      const res = await megaShop.get(url);
      commit('setProducts', res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}
