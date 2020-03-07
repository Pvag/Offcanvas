const leftNav = document.getElementsByClassName('nav')[0];

// for (let i = 0; i < leftNav.classList.length; i++) {
//     console.log(leftNav.classList[i]);
// }

const openNavButton = document.getElementsByClassName('btn')[0];
openNavButton.addEventListener('click', openNav);

function openNav() {
    leftNav.classList.add('open_left');
}

const closeNavButton = document.getElementsByClassName('close')[0];
closeNavButton.addEventListener('click', closeNav);

function closeNav() {
    leftNav.classList.remove('open_left');
}
