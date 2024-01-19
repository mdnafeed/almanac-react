import axiosInstance from './axiosInstance';

const api = {
    postEnquiry:(data) => axiosInstance.post('/enquiry',data),

    PostMembership:(data) => axiosInstance.post('/membership',data),
    fetchData: () => axiosInstance.get('/data'),

    postData: (data) => axiosInstance.post('/data', data),
    // Add more API functions as needed

    educationPostData: (data) => axiosInstance.post('/education', data),
    // Add more API functions as needed

    generateCertificate:(id) => axiosInstance.get(`/membership/${id}`)

};

export default api;