import {PHOTOS, NAMES, MESSAGE, MAX_LIKES, MIN_LIKES, DESCRIPTION} from './constants.js';
import {generateRandomID} from './utils.js';


const createComments = (a)=> {
  return {
    id: a,
    avatar: `img/avatar-${generateRandomID(1, 6)}.svg`,
    MESSAGE: MESSAGE[generateRandomID(0, MESSAGE.length - 1)],
    name: NAMES[generateRandomID(0, NAMES.length - 1)],
  };
};

const arrayComments = [];
for(let i = 1; i <= generateRandomID(1, 30); i++){
  arrayComments.push(createComments(i));
}


export const arrayPhotos = [];
const createPhotos = (a)=> {
  return {
    id: a,
    url: `photos/${a}.jpg`,
    description: DESCRIPTION[generateRandomID(0,3)],
    likes: generateRandomID(MIN_LIKES,MAX_LIKES),
    comments: arrayComments,
  };
};
for(let i = 1; i <= PHOTOS; i++){
  arrayPhotos.push(createPhotos(i));
}

const pictureNode = document.querySelector('.picture');
const pictureTemplate = document.querySelector('.#picture').textContent.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

photos.forEach.(({id, url, comments, likes}) => {
  const pictureNode = pictureTemplate.cloneNode(true);

  pictureNode.dataset.pictureId = id;
  pictureNode.querySelector('picture__img').src = url;
  pictureNode.querySelector('.picture__comments').textContent = comments.length;
  pictureNode.querySelector('.picture__like').textContent.like;

  pictureFragment.appendChild(pictureNode);
});

pictureNode.appendChild(pictureFragment)

export {pictureNode}


const onBigPictureCancelClick = () => {
closeBigPicture();
}

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
};

const closeBigPicture = () => {
bigPictureNode.classList.add('hidden');
bigPictureClasseNode.removeEventLister('click, oneBigPictureCancelClick');
document.removeEventListener('Keydown', onEscKeydown);
};

const openBigPicture = (pictureID) => {
const currentPhoto = photos.find((photos) => photos.id === Number(pictureId));
const socialCommentsFragmetn = document.createDocumentFragment();

bigPictureImgNode.src = currentPhoto.url;
likeCountNode.textContent = currentPhoto.like;
socialCommentsNode.innerHTML = '';

currentPhoto.comments.forEach((comment) => {
  const socialCommentsNode = socialCommentTempalte.cloneNode(true);

  socialCommentNode.querySelector('.social__picture').src = comment.avatar;
  socialCommentNode.querySelector('.social__picture').alt = comment.name;
  socialCommentsNode.querySelector('.social__text').textContent = comment.message;

  socialCommentsFragmetn.appendChild(socialCommentNode);
});

socialCommentNode.appendChild(socialCommentsFragmetn);
commentsCaptionNode.textContent = currentPhoto.description;
commentsCountNode.classList.add('hidden');
commentsLoaderNode.classList.add('hidden');

bigPictureNode.classList.remove('hidden');
bigPictureCancelNode.addEventLister('click', onBigPictureCancelClick);
document.body.classList.add('modal-open');
document.addEventListener('keydown', onEscKeydown);
}

export {openBigPicture};
