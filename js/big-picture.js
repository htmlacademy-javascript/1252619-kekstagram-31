const openBigPicture = (photos) => {
  const pictures = document.querySelector('.pictures');
  pictures.addEventListener('click', (evt)=>{
    const pictureId = evt.target.dataset.id;
const currentPhoto = photos.find((photos) => photos.id === Number(pictureId));
  })
};

export {openBigPicture};

const closeBigPicture = () => {
  bigPictureNode.classList.add('hidden');
  bigPictureCancelNode.removeEventListener('click', openBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeydown);
};
