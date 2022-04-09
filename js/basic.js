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