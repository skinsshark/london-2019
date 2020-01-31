const body = document.getElementsByTagName('body')[0];

function makeFun() {
  if (body.classList.contains('fun-time')) {
    body.classList.remove('fun-time');
  } else {
    body.classList.add('fun-time');
  }
  console.log(body.classList)
}

const photo_window = document.getElementById('photo');

function showArt() {
  photo_window.style.display = 'block';
  photo_window.style.left = '';
  photo_window.style.right = '13%';
  // photo_window.style.backgroundImage = `url('./images/${id}.jpg')`;
  photo_window.style.backgroundImage = `url('./images/columbia-flower-market.jpg')`;
}

function showFood() {
  photo_window.style.display = 'block';
  photo_window.style.right = '';
  photo_window.style.left = '13%';
  // photo_window.style.backgroundImage = `url('./images/${id}.jpg')`;
  photo_window.style.backgroundImage = `url('./images/columbia-flower-market.jpg')`;
}

function closeGallery() {
  photo_window.style.display = 'none';
}

const art_items = document.querySelectorAll('.art li');
Array.from(art_items).map(art => {
  const id = art.innerText.replace(/ +/g, '-').toLowerCase();
  art.setAttribute('id', id);
  art.onclick = showArt;
});

const food_items = document.querySelectorAll('.food li');
Array.from(food_items).map(food => {
  const id = food.innerText.replace(/ +/g, '-').toLowerCase();
  food.setAttribute('id', id);
  food.onclick = showFood;
})
