// const makeAllplays = ()=>{
//     Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
//         element.classList.remove("fa-pause")
//         element.classList.add("fa-play")
//     })
// }

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        myprogressbar.value = audioElement.currentTime
    })
}

    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{//e vo h jispar click hua
        element.addEventListener("click",(e)=>{
            
            // console.log(e.target)//e.target se hme vo element mila jisme click hua h kyuki e abb ekk event h to hme uske object se ye pta chla ki hm use e.target krskte h (to check this use console.log(e))
            if (audioElement.paused || audioElement.currentTime <= 0) {
                makeAllplays();
                songIndex = parseInt(e.target.id)
                e.target.classList.remove('fa-play')
                e.target.classList.add('fa-pause')
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
                e.target.classList.remove('fa-pause')
                e.target.classList.add('fa-play')
                audioElement.src = `songs/${songIndex+1}.mp3`;
                mastersongname.innerText = songs[songIndex].songName;
                audioElement.currentTime = 0;
                audioElement.pause();
                gif.style.opacity = 0;
                masterplay.classList.remove("fa-pause")
                masterplay.classList.add("fa-play")
            }
    })
})

// Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{//e vo h jispar click hua
//     element.addEventListener("click",(e)=>{
        
//         // console.log(e.target)//e.target se hme vo element mila jisme click hua h kyuki e abb ekk event h to hme uske object se ye pta chla ki hm use e.target krskte h (to check this use console.log(e))
//         makeAllplays();
//         songIndex = parseInt(e.target.id)
//         e.target.classList.remove('fa-play')
//         e.target.classList.add('fa-pause')
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         mastersongname.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//     gif.style.opacity = 1;
//     masterplay.classList.remove("fa-play")
//     masterplay.classList.add("fa-pause")
// })
// })