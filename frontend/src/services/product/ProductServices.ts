import axios from "axios";

const API_URL = "http://localhost:3000";

class ProductService {
  async fetchProducts(token: string, search?: string) {
    const response = await axios.get(`${API_URL}/products`, {
      params: { search },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}

export default new ProductService();
