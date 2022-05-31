console.log("Spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: 'Polozenhie', filePath: '1.mp3' },
    { songName: 'Kumbali Trance', filePath: '2.mp3' },
    { songName: 'Mid-Sem Party', filePath: '3.mp3' },
    { songName: 'Virushka', filePath: '4.mp3' },
    { songName: 'Happy Birthday', filePath: '5.mp3' },
    { songName: 'Honda Demo Film', filePath: '6.mp3' },
    { songName: 'Jail', filePath: '7.mp3' }
];
songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0];
    element.getElementsByClassName('songName1')[0].innerText = songs[i].songName;

});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime < 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
    console.log(progress);
});
progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
});

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle-o');
        element.classList.add('fa-play-circle-o');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        songIndex=parseInt(e.target.id);
        console.log(e.target);
        makeAllPlay();
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src=`${songIndex}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
    });
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songIndex}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
});

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`${songIndex}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
});