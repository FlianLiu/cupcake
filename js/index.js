// banner
let btns = document.getElementsByClassName("banner_btn");
let imgWrapper = document.getElementsByClassName("wrapper")[0];

for (let i =0; i<btns.length; i++) {
  btns[i].addEventListener('click', function() {
    for (let j =1; j<=btns.length; j++) {
      imgWrapper.classList.remove(`img${j}`);
      btns[j-1].classList.remove('show');
    }
    let order = this.dataset.type;
    imgWrapper.classList.add(`img${order}`);
    btns[order-1].classList.add('show');
  })
}

//decoration
let items = document.getElementsByClassName("trans");
let itemsPos = [];
let mousePos;
for (let i=0; i<items.length; i++) {
  let item = items[i];
  let itemPos = {
    x: item.offsetLeft + (item.offsetWidth / 2),
    y: item.offsetTop + (item.offsetHeight / 2 )
  }
  itemsPos[i] = itemPos;
  items[i].style.transform = `translateX(0px) translateY(0px)`;
}
window.addEventListener('mousemove', e=> {
  mousePos = {
    x: e.pageX,
    y: e.pageY
  };
  for (let i=0; i<items.length; i++) {
    let ratio = items[i].dataset.ratio;
    let delta_x = -(mousePos.x - itemsPos[i].x)*0.003*ratio;
    let delta_y = -(mousePos.y - itemsPos[i].y)*0.003*ratio;
    let delta = {
      x: delta_x,
      y: delta_y
    }
    items[i].style.transform = `translateX(${delta.x}px) translateY(${delta.y}px)`;
    }
})