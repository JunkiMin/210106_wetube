const videoContainer = document.getElementById("jsVideoPlayer");
const videoplaypause = document.querySelector(".playpause");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");
const player = document.querySelector('.videoPlayer__controls');

const ranges = player.querySelectorAll('.player__slider');
const progress = player.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];
  fetch(`/api/${videoId}/view`, {
    method: "POST"
  });
};


function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    
    videoplaypause.innerHTML = "";
    
    
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    videoplaypause.innerHTML = "❚❚";
    videoplaypause.innerHTML = "❚❚";

  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    volumeRange.value = videoPlayer.volume;
  } else {
    volumeRange.value = 0;
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function exitFullScreen() {
  fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScrnBtn.addEventListener("click", goFullScreen);
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}



function handleDrag(event) {
  const {
    target: { value }
  } = event;
  videoPlayer.volume = value;
  if (value >= 0.6) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if (value >= 0.2) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else {
    volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
}



function goFullScreen() {

  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozRequestFullScreen) {
    videoContainer.mozRequestFullScreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }
  fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
  videoplaypause.innerHTML =  '<div class="progress"><div class="progress__filled" style="flex-basis: 73.845%;"></div></div>'
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
}


const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};

function getCurrentTime() {
  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
}

function handleEnded() {
  registerView();
  videoPlayer.currentTime = 0;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function setTotalTime() {
  const totalTimeString = formatDate(videoPlayer.duration);
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 1000);
}



function handleRangeUpdate() {
  videoPlayer[this.name] = this.value;
}

function handleProgress() {
  const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}


function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * videoPlayer.duration;
  videoPlayer.currentTime = scrubTime;
}
/* Hook up the event listeners */



function handdleProgressBar() {

  videoPlayer.addEventListener('timeupdate', handleProgress);
  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));



  let mousedown = false;   //프로그레스 바에서 마우스 떼고 붙일때 쓰는 함수 움직임 제어
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', e => { mousedown && scrub(e); });
  progress.addEventListener('mousedown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);

}







function init() {

  videoPlayer.volume = 0.5;
  videoPlayer.addEventListener("click", handlePlayClick);;
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  fullScrnBtn.addEventListener("click", goFullScreen);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  videoPlayer.addEventListener("timeupdate", getCurrentTime);
  videoPlayer.addEventListener("ended", handleEnded);
  volumeRange.addEventListener("input", handleDrag);
  
  handdleProgressBar();
}






if (videoContainer) {

  init();
  setTimeout(setTotalTime, 100);
}



//  우리는 js Video Player id를 가지고 있는 video 라는 tag를 불러올거야. (정확히느 html media element) https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement
