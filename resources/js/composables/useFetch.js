import { ref } from 'vue';
import axios from 'axios';

export default function useFetch() {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const fetchData = async (url, params = {}, options = {}) => {
    loading.value = true;
    try {
      const res = await axios({
        url,
        method: options.method || 'GET',
        headers: options.headers || {},
        params,
        data: options.data || {},
      });
      data.value = res.data;
    } catch (err) {
      error.value = err.message || 'Failed to fetch data';
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, fetchData };
}
