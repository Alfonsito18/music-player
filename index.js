let musicContainer = document.querySelector('.music-container')
let playBtn = document.querySelector('#play');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let audio = document.querySelector('#audio');
let title = document.querySelector('#title');
let cover = document.querySelector('#cover');

//song titles
const songs = ['Alone','Darkside','Earth','Faded','The_Spectre','Who_I_am','On_My_Way','Despacito','Grateful'];

//keep track of songs
let songIndex = 4

//initially load song 
loadSong(songs[songIndex])

//update song details
function loadSong(song){
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

//function playSong
function playSong(){
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')

  audio.play()
}
//function pausedSong
function pausedSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

//prev function
function prevSong(){
    songIndex--
    if(songIndex<0){
        songIndex = songs.length-1
    }
    loadSong(songs[songIndex])
    playSong()
}
//next function
function nextSong(){
    songIndex++
    if(songIndex>songs.length-1){
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}


//Event Listener
playBtn.addEventListener('click',()=>{
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pausedSong()
    }else{
        playSong() 
    }
})

prevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)