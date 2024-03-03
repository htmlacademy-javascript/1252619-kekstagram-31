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

export {generateRandomID};
export {createComments};
