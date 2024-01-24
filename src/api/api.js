import axiosInstance from './axiosInstance';

const api = {
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

};

export default api;