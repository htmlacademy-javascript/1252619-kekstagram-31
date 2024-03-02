const discription = ['Бывают моменты' , 'кода не хочется ни длинных строк' , 'ни философских рассуждений.Просто пишешь: Офигенно!', 'и бежишь жить дальше.'];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MESSAGE = ['Всё отлично!', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Но не всё.'];
const NAMES = ['Tanya', 'Julia', 'Alina', 'Katya', 'Johan'];

const PHOTOS = 25;



const generateRandomID = (a, b) =>{
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}
const createComments = (a)=> {
  return {
    id: a,
    avatar: `img/avatar-${generateRandomID(1,6)}.svg`,
    MESSAGE: MESSAGE[generateRandomID(0,MESSAGE.length - 1)],
    name: NAMES[generateRandomID(0,NAMES.length - 1)],
  }
};


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
