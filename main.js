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

// Song data
const songs = [
    // https://soundcloud.com/soundhelix/sets/soundhelix-examples?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
    { title: 'Song One', artist: 'Artist fake', cover: 'https://via.placeholder.com/250/4CAF50/FFFFFF?text=1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'Song One', artist: 'Artist One', cover: 'https://via.placeholder.com/250/4CAF50/FFFFFF?text=1', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'Song Two', artist: 'Artist Two', cover: 'https://via.placeholder.com/250/2196F3/FFFFFF?text=2', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    { title: 'Song Three', artist: 'Artist Three', cover: 'https://via.placeholder.com/250/FFC107/FFFFFF?text=3', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
    
];
