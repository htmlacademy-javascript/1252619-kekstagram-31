import {arrayPhotos} from './data';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
export function renderPhotos () {
  arrayPhotos.forEach((photo) => {
    const thumbnail = template.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');
    image.src = photo.url;
    image.alt = photo.description;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    image.dataset.id = photo.id;

    container.appendChild(thumbnail);
  });
}

