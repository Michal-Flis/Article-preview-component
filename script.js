const btn = document.querySelector('.btn');
const activeBtn = document.querySelector('.active-btn');
const share = document.querySelector('.share');
const activeShare = document.querySelector('.active-share');

btn.addEventListener('click', () => {
  share.classList.toggle('hide');
  activeShare.classList.toggle('hide');

  activeShare.style.animation = 'entry .5s 1 linear';
});

activeBtn.addEventListener('click', () => {
  share.classList.toggle('hide');
  activeShare.classList.toggle('hide');

  share.style.animation = 'entry .5s linear';
});