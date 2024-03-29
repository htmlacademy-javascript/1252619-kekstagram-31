import {renderPhotos} from './picture.js';
import {openBigPicture} from './big-picture.js';
import {arrayPhotos} from  './data.js';


renderPhotos();
openBigPicture(arrayPhotos);

// pictureNode.addEventListener('click', (evt) => {
//   const currentPictireNode = evt.target.closest('picture');
// console.log(pictureNode)

//   if (currentPictireNode) {
//     openBigPicture(currentPictireNode.dataset.pictureId);
//   }
// });

