const body = document.getElementsByTagName('body')[0];

function makeFun() {
  if (body.classList.contains('fun-time')) {
    body.classList.remove('fun-time');
  } else {
    body.classList.add('fun-time');
  }
}
