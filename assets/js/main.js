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
for (let i = 0; i < images.length; i++) {
    let singleElements = images[i];
    console.log(singleElements);
    let pathImg = './assets/img/'
    let img = `${pathImg}${singleElements.image}`
    let title = `${singleElements.title}`
    let text = `${singleElements.text}`
    item(img,title,text)
}


function item(img, title,text) {
    // img
    let imgItem = document.createElement('img')
    imgItem.src = img
    imgItem.className = 'item'
    imgItem.className = 'item.active'
    imgItem.classList.remove('display:none')
    imgGen.appendChild(imgItem)
    // title
    let divTitle = document.createElement('div')
    imgItem.appendChild(divTitle)
    // h2
    let h2Title = document.createElement('h2')
    h2Title.innerHTML+= title;
    divTitle.appendChild(h2Title);
    // p
    let p = document.createElement('p')
    p.innerHTML+=text
    divTitle.appendChild(p)
}
function tumbnails(){
    let thumbImg
}