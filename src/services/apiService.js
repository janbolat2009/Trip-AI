import axios from 'axios';

const apiService = {
  async generateTour(preferences) {
    try {
      const response = await axios.post('/api/ai/generate-tour', { preferences });
      console.log('apiService response:', response.data);
      return response.data;
    } catch (error) {
      console.error('apiService error:', error);
      throw error;
    }
  },
};

export default apiService;