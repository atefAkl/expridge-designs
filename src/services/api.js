import axios from 'axios';

/**
 * Pre-configured Axios instance for Mawthiq Partner API communications.
 * Ready for future backend integration.
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Accept-Language': 'ar',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Ready for future auth token or session injection
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorResponse = {
      message: error.response?.data?.message || error.message || 'حدث خطأ غير متوقع في الاتصال',
      status: error.response?.status,
      data: error.response?.data,
    };
    return Promise.reject(errorResponse);
  }
);

export default apiClient;
