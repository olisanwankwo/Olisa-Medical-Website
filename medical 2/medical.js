var playButton = document.getElementById("play_button");
console.log(video)
playButton.addEventListener("click", function() {
  if (video.paused == true) {

    video.play();

    playButton.style.opacity = '0.3';

    // playButton.innerHTML = "";
  } else {
    video.pause();
    playButton.innerHTML = "";
  }
});
video.addEventListener('mouseenter',function(){
    if (video.paused == false) {
        playButton.style.opacity = '0.3';
    }
},false);
playButton.addEventListener('mouseenter',function(){
    if (video.paused == false) {
        playButton.style.opacity = '0.3';
    }
},false);
video.addEventListener('mouseleave',function(){
    if (video.paused == false) {
        playButton.style.opacity = '0';
    }
},false);