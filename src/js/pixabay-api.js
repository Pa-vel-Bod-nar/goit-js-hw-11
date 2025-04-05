import axios from "axios";

const API_KEY = '49651388-bf829c1018596f8ebf90706c1';
const BASE_URL = 'https://pixabay.com/api/';


export function getImagesByQuery(query){
    return axios.get('https://pixabay.com/api/', {
        params:{
            key: '49651388-bf829c1018596f8ebf90706c1',
            q: query,
            image_type: 'photo',
        },
    })
    .then(response => {
        return response.data.hits;
        
    })
    .catch(error => {
        console.error('Request error', error);
        throw error;
    } )
}



