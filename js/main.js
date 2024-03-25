import {renderPhotos} from './picture.js';

renderPhotos();

import { pictureNode } from './data.js';

pictureNode();

pictureNode.addEventListener('click', (evt) => {
const currentPictureNode = evt.target.closest('.picture');

});

import { openBigPicture } from './big-picture.js';

openBigPicture();
