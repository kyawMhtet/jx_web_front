import { createStore } from 'vuex';
import products from './products/index';


const store = createStore({
    modules: {
        products
    }
});

export default store;
