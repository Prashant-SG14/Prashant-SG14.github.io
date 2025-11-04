const stats = document.querySelector('.stats');
const first2 = stats.querySelector('.first2');
const third = stats.querySelector('.third');
const cfc = third.querySelector('.codeforces-card').parentElement;

function adjustLayout() {
  const width = window.innerWidth;

  if (width <= 620) {
    stats.classList.add('smaller');
    stats.classList.remove('small');
    if (!first2.contains(cfc)) first2.insertBefore(cfc, first2.children[1]);

  } else if (width <= 880) {
    stats.classList.add('small');
    stats.classList.remove('smaller');
    if (!first2.contains(cfc)) first2.insertBefore(cfc, first2.children[1]);

  } else {
    stats.classList.remove('small', 'smaller');
    if (!third.contains(cfc)) third.appendChild(cfc);
  }
}

window.addEventListener('DOMContentLoaded', adjustLayout);
window.addEventListener('resize', adjustLayout);

