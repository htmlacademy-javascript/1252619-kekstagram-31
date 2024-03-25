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
