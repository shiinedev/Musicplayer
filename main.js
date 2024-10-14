const audioElement = document.createElement("audio");

document.body.appendChild(audioElement);

// Select DOM elements
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('song-title');
const artist = document.getElementById('artist-name');
const cover = document.getElementById('cover');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volume');
const speedSelect = document.getElementById('speed');

;

// Song data
const songs = [
    // https://soundcloud.com/soundhelix/sets/soundhelix-examples?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
    { title: 'Song One', artist: 'Artist one', cover: "https://placehold.co/250/4CAF50/FFFFFF?text=1", src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'Song two', artist: 'Artist two', cover: 'https://placehold.co/250/2196F3/FFFFFF?text=2', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { title: 'Song three', artist: 'Artist three', cover: 'https://placehold.co/250/FFC107/FFFFFF?text=3', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    
];


let songIndex = 0;
let isPlaying = false;
let speed = 1;


//All functions
const loadSongs = (song) =>{
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audioElement.src = song.src;
}

loadSongs(songs[songIndex]);

const playSong = () =>{
    playBtn.querySelector("i").classList.remove("fa-play");
    playBtn.querySelector("i").classList.add("fa-pause");

    audioElement.play();
    isPlaying = true;
}

const pauseSong = () =>{
    playBtn.querySelector("i").classList.remove("fa-pause");
    playBtn.querySelector("i").classList.add("fa-play");

    audioElement.pause();
    isPlaying = false;
}


const nextSong = () =>{

    pauseSong();

    // after 300 milllisecond
    setTimeout(( )=>{

        songIndex++;
    
    if(songIndex > songs.length - 1){
        songIndex = 0;
    }

    loadSongs(songs[songIndex]);
        playSong();

    },300);
    
   
}

//prev song 
const prevSong = () =>{
    pauseSong();

    //after 300 millisecond
    setTimeout(() =>{

        songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;     
    }
    loadSongs(songs[songIndex]);
    playSong();

    },300)
    

}
// updateProgress

const updateProgress = (e) =>{
    // console.log(e.srcElement.duration);
    // console.log(e.srcElement.currentTime);
    const{currentTime,duration} = e.srcElement;
    
    if(isNaN(duration)) return;
    
    progress.style.width = `${currentTime/duration*100}%`

    //time 
    //duration time
    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds  = Math.floor(duration % 60);
 

    if(durationSeconds < 10){
      durationSeconds =`0${durationSeconds}`;
    }
     
    durationEl.textContent= `${durationMinutes}:${durationSeconds}`;

    //current Time

    let currentMinutes = Math.floor(currentTime/60 );
    let currentSeconds = Math.floor(currentTime % 60);

    if(currentSeconds < 10){
        currentSeconds = `0${currentSeconds}`
    }

    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
}

//setProgress
const setProgress = (e) =>{
     const width = this.clientWidth;
     console.log("width", width);

     const clickX = e.offsetX;
     const duration = audioElement.duration;
     
     const newTime = (clickX/width) * duration;
     if(isNaN(duration)) return;

     audioElement.currentTime = newTime;
     console.log(newTime);
     
     
}

// All Events 

// play song btn
playBtn.addEventListener("click", () =>{
    // playSong();
    isPlaying ? pauseSong() : playSong();
});


// change to Next song btn
nextBtn.addEventListener("click" , nextSong);

//back to prev Btn Event 

prevBtn.addEventListener("click" ,  prevSong);

// time /song update

audioElement.addEventListener("timeupdate" ,  updateProgress);

//click progres bar
progressContainer.addEventListener("click", setProgress)