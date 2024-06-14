const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', () => {
  const div = document.createElement('div');
  const span = document.createElement('span');

  div.classList.add('window');
  span.classList.add('rotate');

  wrapper.appendChild(div);
  wrapper.appendChild(span);
});
