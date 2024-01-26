import axiosInstance from './axiosInstance';
const api = {
<<<<<<< HEAD
  postEnquiry: (data) => axiosInstance.post('/enquiry', data),
  PostMembership: (data) => axiosInstance.post('/membership', data),
  fetchData: () => axiosInstance.get('/data'),
  postData: (data) => axiosInstance.post('/data', data),
  // Add more API functions as needed
  healthcarePostData: (data) => axiosInstance.post('api/healthcare', data),
  educationPostData: (data) => axiosInstance.post('/api/education', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  // Add more API functions as needed   
  generateCertificate: (id) => axiosInstance.get(`/membership/${id}`)
=======
    postEnquiry:(data) => axiosInstance.post('/enquiry',data),

    PostMembership:(data) => axiosInstance.post('/membership',data),
    fetchData: () => axiosInstance.get('/data'),

    postData: (data) => axiosInstance.post('/data', data),
    // Add more API functions as needed
    // educationPostData: (data) => axiosInstance.post('/api/education', data),
    healthcarePostData: (data) => axiosInstance.post('api/healthcare', data,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
    // educationPostData: (data) => axiosInstance.post('/education', data),
    educationPostData: (data) => axiosInstance.post('/api/education', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    // healthcarePostData: (data) => axiosInstance.post('/healthcare', data),
    // healthcarePostData: (data) => axiosInstance.post('/healthcare', data),
    // Add more API functions as needed   
    generateCertificate:(id) => axiosInstance.get(`/membership/${id}`)

>>>>>>> 620548fa4f069b0832c9f368d16ff11b4d35500a
};
export default api;