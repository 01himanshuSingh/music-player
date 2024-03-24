console.log("hii");
let masterplay= document.getElementById("masterplay");
let song_pause_choose = document.getElementsByClassName('songpause1'); 
let myprogressbar = document.getElementById("myprogressbar")
let currentFruit = "apple";
let gif = document.getElementById('gif')


let audioElement = new Audio('1.mp3');
let audioElement2 = new Audio('2.mp3');
let audioElement3 = new Audio('apna.mp3');
let audioElement4 = new Audio('3.mp3');
let audioElement5 = new Audio('4.mp3');
let arrsong = [audioElement,audioElement2,audioElement3,audioElement4,audioElement5];
let i = 2;


function pll1(){
masterplay.addEventListener('click',()=>{
    if(arrsong[i].paused || arrsong[i].currentTime<=0){
        arrsong[i].play();

        if (currentFruit === "apple") {
            masterplay.src = "bottom pause icons8-pause-button-48.png";
            currentFruit = "banana";
            } 
      gif.style.opacity = 1;
    }
    else{
        arrsong[i].pause()
        masterplay.src = "new pause icons8-play-48.png";
            currentFruit = "apple";
            gif.style.opacity = 0;
    }

})


arrsong[i].addEventListener('timeupdate', ()=>{
    console.log("timeupdate");
    Progress = parseInt((arrsong[i].currentTime/arrsong[i].duration)* 100)
    console.log(Progress)
    myprogressbar.value = Progress
});

myprogressbar.addEventListener('change' , ()=>{
    arrsong[i].currentTime = myprogressbar.value*arrsong[i].duration/100;
})
}



 
pll1();

function bajao(){
    i = 0
    if(arrsong[0].paused || arrsong[0].currentTime<=0){
        arrsong[0].play();

        if (currentFruit === "apple") {
            currentFruit = "banana";
            } 
      gif.style.opacity = 1;
    }
    else{
        arrsong[0].pause()
            currentFruit = "apple";
            gif.style.opacity = 0;
    }}
   

function bjao3(){
 i = 2
    if(arrsong[2].paused || arrsong[2].currentTime<=0){
        arrsong[2].play();

        if (currentFruit === "apple") {
            currentFruit = "banana";
            } 
      gif.style.opacity = 1;
    }
    else{
        arrsong[2].pause()
            currentFruit = "apple";
            gif.style.opacity = 0;
    }
   
}

function bjao2(){
    i = 1
    if(arrsong[1].paused || arrsong[1].currentTime<=0){
        arrsong[1].play();

        if (currentFruit === "apple") {
            currentFruit = "banana";
            } 
      gif.style.opacity = 1;
    }
    else{
        arrsong[1].pause()
            currentFruit = "apple";
            gif.style.opacity = 0;
    }
   
}

function bjao4(){
    i = 3
    if(arrsong[3].paused || arrsong[3].currentTime<=0){
        arrsong[3].play();

        if (currentFruit === "apple") {
            currentFruit = "banana";
            } 
      gif.style.opacity = 1;
    }
    else{
        arrsong[3].pause()
            currentFruit = "apple";
            gif.style.opacity = 0;
    }
   
}
function bjao5(){
    i = 4
    if(arrsong[4].paused || arrsong[4].currentTime<=0){
        arrsong[4].play();

        if (currentFruit === "apple") {
            currentFruit = "banana";
            } 
      gif.style.opacity = 1;
    }
    else{
        arrsong[4].pause()
            currentFruit = "apple";
            gif.style.opacity = 0;
    }
   
}