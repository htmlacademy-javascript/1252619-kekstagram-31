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
