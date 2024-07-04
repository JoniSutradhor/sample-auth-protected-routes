import axios from "axios";

const API_URL = "http://localhost:3000";

class AuthService {
  async login(email: string, password: string) {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  }

  async signup(email: string, password: string) {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      email,
      password,
    });
    return response.data;
  }
}

export default new AuthService();
