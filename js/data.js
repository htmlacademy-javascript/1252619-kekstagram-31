const arrayComments = [];
for(let i = 1; i <= generateRandomID(1, 30); i++){
  arrayComments.push(createComments(i));
}


const arrayPhotos = [];
const createPhotos = (a)=> {
  return {
    id: a,
    url: `photos/${a}.jpg`,
    description: discription[generateRandomID(0,3)],
    likes: generateRandomID(MIN_LIKES,MAX_LIKES),
    comments: arrayComments,
  }
};
for(let i = 1; i <= PHOTOS; i++){
  arrayPhotos.push(createPhotos(i));
}


console.log(arrayPhotos);

export {arrayComments};
export {createPhotos};
