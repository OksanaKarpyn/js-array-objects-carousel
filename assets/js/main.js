/*
    Genera una card con le proprietà img, title, text
    e lo appende a ImgGen
*/

function item(img, title, text) {
    // divItem
    let divItem = document.createElement('div')
    divItem.className = 'item'
    imgGen.appendChild(divItem)
    // img
    let imgItem = document.createElement('img')
    imgItem.src = img
    divItem.appendChild(imgItem)
    // title
    let divTitle = document.createElement('div')
    divTitle.classList.add('title')
    divItem.appendChild(divTitle)
    // h2
    let h2Title = document.createElement('h2')
    h2Title.innerHTML += title;
    divTitle.appendChild(h2Title);
    // p
    let p = document.createElement('p')
    p.innerHTML += text
    divTitle.appendChild(p)
}

/*
    Genera un element img e lo appende in thumb
*/

function tumbnails(img) {
    let divThumb = document.createElement('div')
    divThumb.classList.add('itemscroll')
    thumb.append(divThumb)
    let thumbImg = document.createElement('img')
    thumbImg.src = img

    divThumb.appendChild(thumbImg)

}

// Variabili globali

const images = [{
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
}, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
}, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
}, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
}, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
}];


let imgGen = document.querySelector('.general-img');
let thumb = document.querySelector('.thumbnails');

// Chiama le funzioni una volta per ogni elemento dell'array degli oggetti
// sistema un po' i parametri
for (let i = 0; i < images.length; i++) {
    let singleElements = images[i];
    console.log(singleElements);
    let pathImg = './assets/'
    let img = `${pathImg}${singleElements.image}`
    let title = `${singleElements.title}`
    let text = `${singleElements.text}`
    item(img, title, text)
    tumbnails(img)

}

let active = 0; //[]
console.log(active)
thumb.getElementsByClassName('itemscroll')[active].classList.add('active');
imgGen.getElementsByClassName('item')[active].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


prev.addEventListener('click', function () {

    imgGen.getElementsByClassName('item')[active].classList.remove('active')
    thumb.getElementsByClassName('itemscroll')[active].classList.remove('active');
    console.log('prev')
    if (active == 0) {
        active = images.length - 1;
    } else {
        active--;

    }
    console.log(active)
    thumb.getElementsByClassName('itemscroll')[active].classList.add('active');
    imgGen.getElementsByClassName('item')[active].classList.add('active')
})

next.addEventListener('click', function () {

    imgGen.getElementsByClassName('item')[active].classList.remove('active')
    thumb.getElementsByClassName('itemscroll')[active].classList.remove('active');
    if (active == images.length - 1) {
        active = 0;

    } else {
        active++;

    }

    thumb.getElementsByClassName('itemscroll')[active].classList.add('active');
    imgGen.getElementsByClassName('item')[active].classList.add('active')

})