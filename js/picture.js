

export const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

mockedPhotos.forEach(photo) => {
 const thumbnail = template.cloneNode(true);
 const image = thumbnail.querySelector('.picture__img');

 image.src = photo.url;
 image.alt = photo.description;

 thumbnail.querySelector('.picture__comments').textContent = photo.coments.length;
 thumbnail.querySelector('.picture__like').textContent = photo.likes;

 container.appendChild(thumbnail);
};
