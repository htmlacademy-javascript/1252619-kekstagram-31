const OBJECT = [
  {
  name: 'Амадей',
  name: 'Якоб',
  name: 'Авраам',
  name: 'вольфганг',
  name: 'бартоломео',
  name: 'Кристофер',
  name: 'дензел',
  name: 'Бенджамин',
  name: 'теодор',
  name: 'рудольф',
  name: 'франциск',
  name: 'честер',
  name: 'соломон',
  name: 'артур',
  name: 'давид',
  name: 'гульельмо',
  name: 'луиз',
  name: 'нестор',
  name: 'себастьян',
  name: 'людвиг',
  name: 'джухеппе',
  name: 'клаудио',
  name: 'джованни',
  name: 'ментор',
  name: 'Пабло',
  }
];

const message =  {
Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!
};

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const gerRandomArrayElement = (Element) => {
  return Element[getRandomPositiveInteger(0, Element.length - 1)];
}

function createPeople() {
  const randomnameIndex = getRandomPositiveInteger(0, OBJECT.length - 1);
  const randomidIndex = getRandomPositiveInteger(0, ID.length -1);
  const randomurlIndex = getRandomPositiveInteger(0, URL.length -1);
  const randomdiscription = getRandomPositiveInteger(0, DESCRIPTION.length -1);
  const randomlike = getRandomPositiveInteger(0, LIKE.length - 1);

  return {
    id: ID[randomidIndex],
    url: URL[randomurlIndex],
    description: DESCRIPTION[descriptionIndex],
    like: LIKE[likeIndex],
  };
};

console.log(createPeople);


function newfoto() {
  let id = 1;

  return () => {
    const photo = {};
    photo.id = id;
    photo.url = 'photo/${id}.jpg';
    photo.discription = 'это фотография №${id}';
    photo.like = numLikes();
  };

};
