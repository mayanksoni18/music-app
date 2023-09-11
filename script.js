console.log("welcome to spotify");

//initialize the variation
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay")
let myprogressbar = document.getElementById("myprogressbar")
// let progressbar = document.getElementsByClassName("progressbar")
let gif = document.getElementById("gif")
let mastersongname = document.getElementById("mastersongname")
let songItem = Array.from(document.getElementsByClassName('songItem'));
// let songitemplay = document.getElementsByClassName("songitemplay")
// console.log(songitemplay)

// let songitemplay = document.getElementsByClassName("songitemplay");

let songs = [
    {songName: "Mann mera", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "rab ka shukrana", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songName: "aye khuda", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName: "muskurane", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName: "tu itni khubsurat hai", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songName: "dilbar", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songName: "kun-faya-kun", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songName: "love me like you do", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
    {songName: "galiyan", filepath: "songs/9.mp3", coverpath: "covers/9.jpg"},
    {songName: "brown rang", filepath: "songs/10.mp3", coverpath: "covers/10.jpg"},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})



masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause')
        masterplay.classList.add('fa-play')
        gif.style.opacity = 0;

    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
        //update seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);//showing the progress in persentage
        myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;//from line 43 currentTime =
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("fa-stop")
        element.classList.add("fa-play")
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{//e vo h jispar click hua
    element.addEventListener("click",(e)=>{
        
        // console.log(e.target)//e.target se hme vo element mila jisme click hua h kyuki e abb ekk event h to hme uske object se ye pta chla ki hm use e.target krskte h (to check this use console.log(e))
        if (audioElement.paused || audioElement.currentTime <= 0) {
            makeAllplays();
            songIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-play')
            e.target.classList.add('fa-stop')
            audioElement.src = `songs/${songIndex+1}.mp3`;
            mastersongname.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            
            audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play")
        masterplay.classList.add("fa-pause")
        
            
        } else {
            
            makeAllplays();
            songIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-stop')
            e.target.classList.add('fa-play')
            audioElement.src = `songs/${songIndex+1}.mp3`;
            mastersongname.innerText = songs[songIndex].songName;
            
            audioElement.currentTime = parseInt(0)
            audioElement.pause();
            myprogressbar.value = audioElement.currentTime
        
            console.log(audioElement.currentTime)
            console.log(myprogressbar.value)
            gif.style.opacity = 0;
            masterplay.classList.remove("fa-pause")
            masterplay.classList.add("fa-play")
            
        }
})
})

document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=9) {
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;

            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.classList.remove("fa-play")
            masterplay.classList.add("fa-pause")
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.classList.remove("fa-play")
            masterplay.classList.add("fa-pause")
})
