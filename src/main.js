
import { getImagesByQuery } from './js/pixabay-api';
import {
createGallery,
clearGallery,
showLoader,
hideLoader
} from './js/render-functions.js'

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import './css/styles.css';


const form = document.querySelector('.form');
const input = form.elements['search-text'];
  
form.addEventListener('submit', onFormSubmit)
function onFormSubmit(event){
    event.preventDefault();
    const query = input.value.trim();

    if (query ==='') {
        iziToast.warning({
            title: 'Oops!',
            message: 'Please enter a search term!',
            position: 'topRight',
        });
        return;
    }
    clearGallery();
    showLoader();
    getImagesByQuery(query)
    .then(images => {
        hideLoader();

        if (images.length === 0){
            iziToast.info({
                title: 'No results',
                message: 'Sorry, there are no images matching your search query.',
                position: 'topRight',
              });
              return;
        }

        createGallery(images);
    })
    .catch(error => {
        hideLoader();
        iziToast.error({
          title: 'Error',
          message: 'Something went wrong. Please try again later.',
          position: 'topRight',
        });
        console.error(error);
      });
}




    
  
   

 