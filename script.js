const btn = document.querySelector('.btn');
const activeBtn = document.querySelector('.active-btn');
const share = document.querySelector('.share');
const activeShare = document.querySelector('.active-share');

btn.addEventListener('click', () => {
  if (screen.width >= 320 && screen.width < 1024) {
    share.classList.toggle('hide');
    activeShare.classList.toggle('hide');

    if (screen.width === 320) {
      activeShare.style.animation = 'entry320 .5s 1 linear';
    } else if (screen.width === 375) {
      activeShare.style.animation = 'entry375 .5s 1 linear';
    } else if (screen.width === 768) {
      activeShare.style.animation = 'entry768 .5s 1 linear';
    }
  } else if (screen.width >= 1024) {
    console.log('działa');
  }
});

activeBtn.addEventListener('click', () => {
  share.classList.toggle('hide');
  activeShare.classList.toggle('hide');

  if (screen.width === 320) {
    share.style.animation = 'entry320 .5s linear';
  } else if (screen.width === 375) {
    share.style.animation = 'entry375 .5s linear';
  } else if (screen.width) {
    share.style.animation = 'entry .5s linear';
  }
});
