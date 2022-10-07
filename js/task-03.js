const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

const imagesList = images.map( ({url, alt}) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery-item')
  galleryItem.insertAdjacentHTML("afterbegin", `<img src=${url} style=width:100%>`);
  // the 'alt' attribute creating using 'setAttribute' because of using 'insertAdjacentHTML' -> `${element.alt}`-> returns value of `${element.alt}`  not the whole string but only before its first space
  galleryItem.querySelector('img').setAttribute('alt', alt);
  return galleryItem;
  
});

galleryRef.prepend(...imagesList);



