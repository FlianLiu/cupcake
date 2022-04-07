
const nav = document.getElementById('navigation');
const footer = document.getElementsByTagName("footer")[0];
let delta;
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
  
})