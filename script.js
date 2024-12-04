const toggle = document.getElementById('toggle');
const extra = document.getElementById('extra');

toggle.addEventListener('click', () => {
    extra.classList.toggle('readmore');
    toggle.textContent = extra.classList.contains('readmore') ? 'Read More' : 'Read Less';
});

const toggle2 = document.getElementById('toggle2');
const extra2 = document.getElementById('extra2');

toggle2.addEventListener('click', () => {
    extra2.classList.toggle('readmore2');
    toggle2.textContent = extra2.classList.contains('readmore2') ? 'Read More' : 'Read Less';
});

const toggle3 = document.getElementById('toggle3');
const extra3 = document.getElementById('extra3');

toggle3.addEventListener('click', () => {
    extra3.classList.toggle('readmore3');
    toggle3.textContent = extra3.classList.contains('readmore3') ? 'Read More' : 'Read Less';
});

const toggle4 = document.getElementById('toggle4');
const extra4 = document.getElementById('extra4');

toggle4.addEventListener('click', () => {
    extra4.classList.toggle('readmore4');
    toggle4.textContent = extra4.classList.contains('readmore4') ? 'Read More' : 'Read Less';
});

const toggle5 = document.getElementById('toggle5');
const extra5 = document.getElementById('extra5');

toggle5.addEventListener('click', () => {
    extra5.classList.toggle('readmore5');
    toggle5.textContent = extra5.classList.contains('readmore5') ? 'Read More' : 'Read Less';
});

const toggle6 = document.getElementById('toggle6');
const extra6 = document.getElementById('extra6');

toggle6.addEventListener('click', () => {
    extra6.classList.toggle('readmore6');
    toggle6.textContent = extra6.classList.contains('readmore6') ? 'Read More' : 'Read Less';
});
