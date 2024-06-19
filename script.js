const btn = document.querySelector('.btn');
const activeBtn = document.querySelector('.active-btn');
const share = document.querySelector('.share');
const activeShare = document.querySelector('.active-share');
const activeDesktop = document.querySelector('.active-desktop');
const tail = document.querySelector('.tail');

btn.addEventListener('click', () => {
  if (screen.width >= 320 && screen.width < 1024) {
    share.classList.toggle('hide');
    activeShare.classList.toggle('hide');

    activeShare.style.animation = 'entry 0.5s 1 linear';
  } else if (screen.width >= 1024) {
    activeDesktop.classList.toggle('active-desktop-btn');
    tail.classList.toggle('active-desktop-btn');
  }
});

activeBtn.addEventListener('click', () => {
  share.classList.toggle('hide');
  activeShare.classList.toggle('hide');

  share.style.animation = 'entry 0.5s linear';
});
