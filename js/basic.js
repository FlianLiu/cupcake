const nav = document.getElementById('navigation');
const footer = document.getElementsByTagName("footer")[0];
const tags = document.getElementsByClassName("tagged");
let tags_offsetY = [];
let delta;
for( let i=0; i<tags.length; i++) {
  let offsetTop = 0;
  function computeOffset(element) {
    offsetTop += element.offsetTop;
    if (element.offsetParent) {
      computeOffset(element.offsetParent);
    }
  }
  let tag = tags[i];
  computeOffset(tag);
  tags_offsetY[i] = offsetTop;
}
window.addEventListener('scroll', (e) => {
  // navigation
  if (nav.offsetHeight < this.scrollY) {
    nav.classList.add('show');
  }else {
    nav.classList.remove('show');
  }
  // footer
  delta = this.innerHeight + this.scrollY - footer.offsetTop - footer.offsetHeight;
  footer.style.backgroundPositionY = `${ delta*0.02 + 58 }%`
  // container
  for( let i=0; i<tags.length; i++) {
    if (this.scrollY > tags_offsetY[i] - this.screen.height*0.5) {
      tags[i].classList.add('scrolled');
    }
  }
})

//decoration
const items = document.getElementsByClassName("trans");
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