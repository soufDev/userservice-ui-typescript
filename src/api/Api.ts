import axios, { AxiosInstance } from 'axios';
import { API_PATH } from '../utils/constUrls';

class ApiService {
  client: AxiosInstance;

  constructor() {
    const client = axios.create({
      baseURL: API_PATH,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    this.client = client;
  }

  async get(path: string) {
    const response = await this.client.get(path);
    return response.data;
  }

  async create(path: string, payload: Object) {
    const response = await this.client.post(path, payload);
    return response.data;
  }

  async update(path: string, payload: Object) {
    const response = await this.client.put(path, payload);
    return response.data;
  }

  async delete(path: string) {
    const response = await this.client.delete(path);
    return response.data;
  }
}

export default new ApiService();
