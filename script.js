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

    if (screen.width === 320) {
      activeShare.style.animation = 'entry320 .5s 1 linear';
    } else if (screen.width === 375) {
      activeShare.style.animation = 'entry375 .5s 1 linear';
    } else if (screen.width === 425) {
      activeShare.style.animation = 'entry375 .5s 1 linear';
    } else if (screen.width === 768) {
      activeShare.style.animation = 'entry768 .5s 1 linear';
    }
  } else if (screen.width >= 1024) {
    activeDesktop.classList.toggle('active-desktop-btn');
    tail.classList.toggle('active-desktop-btn');
  }
});

activeBtn.addEventListener('click', () => {
  share.classList.toggle('hide');
  activeShare.classList.toggle('hide');

  if (screen.width === 320) {
    share.style.animation = 'entry320 .5s linear';
  } else if (screen.width === 375) {
    share.style.animation = 'entry375 .5s linear';
  } else if (screen.width === 425) {
    share.style.animation = 'entry375 .5s linear';
  } else if (screen.width === 768) {
    share.style.animation = 'entry768 .5s linear';
  }
});
