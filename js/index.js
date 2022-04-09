// banner
const btns = document.getElementsByClassName("banner_btn");
const imgWrapper = document.getElementsByClassName("wrapper")[0];
let targetImg = 1;

for (let i =0; i<btns.length; i++) {
  btns[i].addEventListener('click', function() {
    for (let j =1; j<=btns.length; j++) {
      imgWrapper.classList.remove(`img${j}`);
      btns[j-1].classList.remove('show');
    }
    let order = this.dataset.order;
    targetImg = order;
    imgWrapper.classList.add(`img${order}`);
    btns[order-1].classList.add('show');
  })
}
imgWrapper.addEventListener('click', function() {
  imgWrapper.classList.remove(`img${targetImg}`);
  btns[targetImg-1].classList.remove('show');
  targetImg = (targetImg % 3) + 1;
  imgWrapper.classList.add(`img${targetImg}`);
  btns[targetImg-1].classList.add('show');
})
