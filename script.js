window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(function () {
        key.classList.remove("playing");
    }, 100);
});


window.addEventListener("click", function (e) {
    const audio = document.querySelector( `audio[data-key="${e.target.className}"]`);
    const key = document.querySelector(`.key[data-key="${e.target.className}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(function () {
        key.classList.remove("playing");
    }, 100);
});
/* uzun yol

function clickSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(function () {
        key.classList.remove("playing");
    }, 100);
}
const keyA=document.querySelector(".key[data-key='65']");
keyA.addEventListener('click',function(){
  
    clickSound(65);
});
*/ 