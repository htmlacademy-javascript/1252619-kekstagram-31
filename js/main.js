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

const SIMULAR_OBJECT_PEOPLE = 25;

const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,];

const url = photos/{{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,}}.jpg;

const discription =  {
Бывают моменты, кода не хочется ни длинных строк, ни философских рассуждений.Просто пишешь: "Офигенно!", и бежишь жить дальше.
};

const MIN_LIKES = 15;
const MAX_LIKES = 200;


const getRandomPositiveInteger = (a, b) => {
const lower = Math.ceil(Math.min(a, b));
const upper = Math.floor(math.max(a, b ));
let previousResult = -1;
return () => {
const result = math.floor(math.random() * (upper - lower +1) + lower);

if (previousResult !== result) {
previousResult = result;
return result;
}
return result === upper ? lower : result +1;
};
};

const gerRandomArrayElement = (Element) => {
  return Element[getRandomPositiveInteger(0, Element.length - 1)];
};


const createinfo = () => {
return {
name: getRandomArrayElemen(OBJECT),
id: getRandomArrayElemen(ID),
url: getRandomArrayElemen(url),
discription: getRandomArrayElemen(discription),
}

};
const simulatorPeople = Array.from({length: 25}, createinfo);
console.log(simulatorPeople);

  return {
    id: ID[randomidIndex],
    url: URL[randomurlIndex],
    description: DESCRIPTION[descriptionIndex],
    like: LIKE[likeIndex],
  };

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
